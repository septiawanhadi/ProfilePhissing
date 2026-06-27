import React, { useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../hooks/useLanguage';

// ─── Security: Input Sanitizer ───────────────────────────────────────────────
// Strips HTML tags, script injections, and dangerous characters from user input
const sanitize = (input: string): string => {
  return input
    .replace(/<[^>]*>/g, '')                       // Strip HTML tags
    .replace(/javascript:/gi, '')                  // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '')                    // Remove inline event handlers
    .replace(/[\u0000-\u0008\u000B\u000E-\u001F]/g, '') // Strip control characters
    .trim();
};

// ─── Security: Validation Helpers ────────────────────────────────────────────
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 2000;
const RATE_LIMIT_MS = 10000; // 10 seconds between submissions

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// reCAPTCHA site key from environment variable
const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || '6LdKEDItAAAAAGjV9Y7QIn2S7iYlfkUiUxMjVeSy';

// Extend window type for reCAPTCHA v3
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default function Contact() {
  const [state, handleFormspreeSubmit, reset] = useForm('mvzjgbvr');
  const lang = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'landing-page',
    budget: '300-500',
    message: ''
  });

  // ─── Security State ──────────────────────────────────────────────────────
  const [captchaError, setCaptchaError] = useState<string>('');
  const [securityError, setSecurityError] = useState<string>('');
  const lastSubmitTime = useRef<number>(0);

  // ─── Secure Form Submission ──────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSecurityError('');
    setCaptchaError('');

    // Rate limiting check
    const now = Date.now();
    if (now - lastSubmitTime.current < RATE_LIMIT_MS) {
      setSecurityError(
        lang === 'en'
          ? 'Please wait a moment before submitting again.'
          : 'Mohon tunggu sebentar sebelum mengirim lagi.'
      );
      return;
    }

    // Honeypot check — if the hidden field has a value, it's a bot
    const form = e.currentTarget;
    const honeypot = form.querySelector<HTMLInputElement>('input[name="_gotcha"]');
    if (honeypot && honeypot.value) {
      // Silently "succeed" to confuse bots
      return;
    }

    // SQL Injection detection (basic keyword check)
    const hasSqlInjection = (text: string) => {
      const lower = text.toLowerCase();
      const sqlKeywords = [
        'select ', 'union ', 'insert ', 'delete ', 'update ', 
        'drop table', 'drop database', 'alter table', 'xp_cmdshell',
        '--', '/*'
      ];
      return sqlKeywords.some(keyword => lower.includes(keyword));
    };

    if (
      hasSqlInjection(formData.name) || 
      hasSqlInjection(formData.email) || 
      hasSqlInjection(formData.message)
    ) {
      setSecurityError(
        lang === 'en'
          ? 'Security Alert: Database queries or comments are not allowed.'
          : 'Peringatan Keamanan: Kueri atau komentar database tidak diizinkan.'
      );
      return;
    }

    // Sanitize all inputs
    const cleanName = sanitize(formData.name);
    const cleanEmail = sanitize(formData.email);
    const cleanMessage = sanitize(formData.message);

    // Validate lengths
    if (cleanName.length < 2 || cleanName.length > MAX_NAME_LENGTH) {
      setSecurityError(
        lang === 'en'
          ? `Name must be between 2 and ${MAX_NAME_LENGTH} characters.`
          : `Nama harus antara 2 dan ${MAX_NAME_LENGTH} karakter.`
      );
      return;
    }

    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > MAX_EMAIL_LENGTH) {
      setSecurityError(
        lang === 'en'
          ? 'Please enter a valid email address.'
          : 'Silakan masukkan alamat email yang valid.'
      );
      return;
    }

    if (cleanMessage.length < 10 || cleanMessage.length > MAX_MESSAGE_LENGTH) {
      setSecurityError(
        lang === 'en'
          ? `Message must be between 10 and ${MAX_MESSAGE_LENGTH} characters.`
          : `Pesan harus antara 10 dan ${MAX_MESSAGE_LENGTH} karakter.`
      );
      return;
    }

    // ─── reCAPTCHA v3: execute invisibly and get token ───────────────────
    let captchaToken = '';
    try {
      captchaToken = await new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha?.ready) {
          reject(new Error('reCAPTCHA not loaded'));
          return;
        }
        window.grecaptcha.ready(async () => {
          try {
            const token = await window.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'contact' });
            resolve(token);
          } catch (err) {
            reject(err);
          }
        });
      });
    } catch {
      setCaptchaError(
        lang === 'en'
          ? 'Security verification failed. Please refresh and try again.'
          : 'Verifikasi keamanan gagal. Silakan refresh dan coba lagi.'
      );
      return;
    }

    if (!captchaToken) {
      setCaptchaError(
        lang === 'en'
          ? 'Security verification failed. Please try again.'
          : 'Verifikasi keamanan gagal. Silakan coba lagi.'
      );
      return;
    }

    // Build a clean FormData object to send to Formspree
    const safeFormData = new FormData();
    safeFormData.append('name', cleanName);
    safeFormData.append('email', cleanEmail);
    safeFormData.append('projectType', formData.projectType);
    safeFormData.append('budget', formData.budget);
    safeFormData.append('message', cleanMessage);
    safeFormData.append('g-recaptcha-response', captchaToken);

    lastSubmitTime.current = now;

    // Submit to Formspree
    await handleFormspreeSubmit(safeFormData);
  };

  // ─── Reset Handler ───────────────────────────────────────────────────────
  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'landing-page',
      budget: '300-500',
      message: ''
    });
    setCaptchaError('');
    setSecurityError('');
    reset();
  };


  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 py-16 bg-[var(--color-bg)]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[var(--color-fg)] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
          {lang === 'en' ? "Contact // Let's Build Something Great Together" : "Kontak // Mari Bangun Sesuatu yang Hebat Bersama"}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[var(--color-fg)] tracking-tight">
          {lang === 'en' ? "START YOUR PROJECT" : "MULAI PROYEK ANDA"}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: What to expect */}
        <div className="lg:col-span-5 border border-[var(--color-fg)] p-6 bg-[var(--color-bg-card)]">
          <div className="bg-[var(--color-fg)] text-[var(--color-bg)] text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold mb-4">
            {lang === 'en' ? "WHAT TO EXPECT" : "APA YANG DIHARAPKAN"}
          </div>
          <p className="font-body text-sm text-neutral-600 text-justify mb-4">
            {lang === 'en' 
              ? "Tell us about your project and we'll get back to you within 4 hours with an honest assessment — no obligation, no hard sell. If we're a good fit, we'll schedule a free 30-minute consultation to discuss your goals and timeline."
              : "Beri tahu kami tentang proyek Anda dan kami akan menghubungi Anda kembali dalam waktu 4 jam dengan penilaian jujur — tanpa kewajiban, tanpa paksaan. Jika cocok, kami akan menjadwalkan konsultasi gratis 30 menit untuk membahas tujuan dan lini masa Anda."}
          </p>
          <p className="font-body text-sm text-neutral-600 text-justify mb-6">
            {lang === 'en'
              ? "Every project gets a fixed-price quote upfront. You'll always know what you're paying before any work begins."
              : "Setiap proyek mendapatkan penawaran harga tetap di awal. Anda selalu tahu berapa biaya yang akan dibayarkan sebelum pekerjaan dimulai."}
          </p>
          <div className="border-t border-dashed border-[var(--color-fg)] pt-4 space-y-3">
            <a href="mailto:contact@dripcode.site" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-700 hover:text-[var(--color-accent)] transition-colors">
              <span className="inline-flex items-center justify-center border border-[var(--color-fg)] h-6 w-6 shrink-0 hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] transition-colors">
                <svg className="h-3 w-3 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              contact@dripcode.site
            </a>
            <div className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 pt-2">
              <div>{lang === 'en' ? "• We work across GMT+7, GMT, and EST timezones" : "• Kami bekerja di zona waktu GMT+7, GMT, dan EST"}</div>
              <div>{lang === 'en' ? "• Response within 4 hours on business days" : "• Respons dalam waktu 4 jam pada hari kerja"}</div>
              <div>{lang === 'en' ? "• English-speaking team" : "• Tim berbahasa Inggris"}</div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <form 
          onSubmit={handleSubmit}
          className="lg:col-span-7 border-2 border-[var(--color-fg)] p-8 bg-[var(--color-bg-card)]"
          noValidate
        >
          {state.succeeded ? (
            <div className="text-center py-12">
              <span className="font-serif text-3xl font-black uppercase text-[var(--color-accent)] block mb-4">
                {lang === 'en' ? "★ MESSAGE SENT ★" : "★ PESAN TERKIRIM ★"}
              </span>
              <p className="font-body text-sm text-neutral-700 max-w-md mx-auto">
                {lang === 'en'
                  ? "Thanks for reaching out! We'll review your project details and get back to you within 4 hours with a thoughtful response."
                  : "Terima kasih telah menghubungi kami! Kami akan meninjau rincian proyek Anda dan menghubungi Anda kembali dalam waktu 4 jam dengan respons yang matang."}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 border border-[var(--color-fg)] bg-transparent px-6 py-2.5 font-sans font-bold uppercase tracking-widest text-xs transition-colors hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] cursor-pointer"
              >
                {lang === 'en' ? "Send Another Message" : "Kirim Pesan Lain"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* ── Honeypot: invisible to humans, bots fill this ── */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                <label htmlFor="_gotcha">Do not fill this field</label>
                <input type="text" name="_gotcha" id="_gotcha" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Security Error Banner */}
              {securityError && (
                <div className="border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10 p-3 font-mono text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">
                  ⚠ {securityError}
                </div>
              )}
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Your Name" : "Nama Anda"}
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  maxLength={MAX_NAME_LENGTH}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="border-b-2 border-[var(--color-fg)] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[var(--color-neutral-100)] focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                  autoComplete="name"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="font-mono text-xs text-[var(--color-accent)] mt-1 block" />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Email Address" : "Alamat Email"}
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  maxLength={MAX_EMAIL_LENGTH}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="border-b-2 border-[var(--color-fg)] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-[var(--color-neutral-100)] focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                  autoComplete="email"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="font-mono text-xs text-[var(--color-accent)] mt-1 block" />
              </div>

              {/* Project Type */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Project Type" : "Jenis Proyek"}
                </label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="border-b-2 border-[var(--color-fg)] bg-transparent px-3 py-2.5 font-mono text-sm focus-visible:bg-[var(--color-neutral-100)] focus-visible:outline-none cursor-pointer text-[var(--color-fg)]"
                  style={{ borderRadius: '0px' }}
                >
                  <option value="landing-page" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'Product Landing Page' : 'Halaman Landing Produk'}
                  </option>
                  <option value="company-profile" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'Company Profile / Business Site' : 'Profil Perusahaan / Situs Bisnis'}
                  </option>
                  <option value="ecommerce" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'E-Commerce / Online Store' : 'E-Commerce / Toko Online'}
                  </option>
                  <option value="web-app" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'Custom Web App / SaaS Dashboard' : 'Aplikasi Web Kustom / Dasbor SaaS'}
                  </option>
                  <option value="ai-bot" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'AI Chatbot / Automation System' : 'Chatbot AI / Sistem Otomatisasi'}
                  </option>
                  <option value="other" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? 'Other / Something Else' : 'Lainnya / Sesuatu yang Lain'}
                  </option>
                </select>
                <ValidationError prefix="ProjectType" field="projectType" errors={state.errors} className="font-mono text-xs text-[var(--color-accent)] mt-1 block" />
              </div>

              {/* Budget */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Estimated Budget" : "Perkiraan Anggaran"}
                </label>
                <select 
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="border-b-2 border-[var(--color-fg)] bg-transparent px-3 py-2.5 font-mono text-sm focus-visible:bg-[var(--color-neutral-100)] focus-visible:outline-none cursor-pointer text-[var(--color-fg)]"
                  style={{ borderRadius: '0px' }}
                >
                  <option value="300-500" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? '$300 – $500 USD' : 'Rp 4.500.000 – Rp 7.500.000 IDR'}
                  </option>
                  <option value="500-1000" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? '$500 – $1,000 USD' : 'Rp 7.500.000 – Rp 15.000.000 IDR'}
                  </option>
                  <option value="1000-1500" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? '$1,000 – $1,500 USD' : 'Rp 15.000.000 – Rp 22.500.000 IDR'}
                  </option>
                  <option value="1500-2000" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? '$1,500 – $2,000 USD' : 'Rp 22.500.000 – Rp 30.000.000 IDR'}
                  </option>
                  <option value="2000-plus" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? '$2,000+ USD' : 'Rp 30.000.000+ IDR'}
                  </option>
                  <option value="not-sure" className="bg-[var(--color-bg-card)] text-[var(--color-fg)]">
                    {lang === 'en' ? "Not sure yet — let's discuss" : "Belum yakin — mari kita diskusikan"}
                  </option>
                </select>
                <ValidationError prefix="Budget" field="budget" errors={state.errors} className="font-mono text-xs text-[var(--color-accent)] mt-1 block" />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Tell Us About Your Project" : "Beri Tahu Kami Tentang Proyek Anda"}
                  <span className="text-neutral-500 font-normal ml-2">({formData.message.length}/{MAX_MESSAGE_LENGTH})</span>
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  maxLength={MAX_MESSAGE_LENGTH}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'en' 
                    ? "What does your business do? What kind of website or tool do you need? Any specific features in mind?"
                    : "Apa yang dilakukan bisnis Anda? Jenis situs web atau alat apa yang Anda butuhkan? Ada fitur khusus yang dipikirkan?"}
                  className="border border-[var(--color-fg)] bg-transparent p-3 font-mono text-sm focus-visible:bg-[var(--color-neutral-100)] focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="font-mono text-xs text-[var(--color-accent)] mt-1 block" />
              </div>

              {/* ── reCAPTCHA v3 error (if any) ── */}
              {captchaError && (
                <div className="border-2 border-[var(--color-accent)] bg-[var(--color-accent)]/10 p-3 font-mono text-xs text-[var(--color-accent)] font-bold uppercase tracking-wider">
                  ⚠ {captchaError}
                </div>
              )}

              {/* Submit */}
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[var(--color-fg)] text-[var(--color-bg)] border border-transparent px-6 py-3.5 font-sans font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-[var(--color-bg-card)] hover:text-[var(--color-fg)] hover:border-[var(--color-fg)] cursor-pointer min-h-[44px] min-w-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ borderRadius: '0px' }}
              >
                {state.submitting 
                  ? (lang === 'en' ? 'Sending...' : 'Mengirim...') 
                  : (lang === 'en' ? 'Send Inquiry' : 'Kirim Pertanyaan')}
              </button>

              {/* Security Notice */}
              <p className="font-mono text-[10px] text-neutral-500 text-center uppercase tracking-wider">
                {lang === 'en'
                  ? 'This form is protected by Google reCAPTCHA. All inputs are sanitized.'
                  : 'Formulir ini dilindungi oleh Google reCAPTCHA. Semua input disanitasi.'}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
