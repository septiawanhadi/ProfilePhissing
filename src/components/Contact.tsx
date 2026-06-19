import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '../hooks/useLanguage';

export default function Contact() {
  const [state, handleSubmit, reset] = useForm('mrevjayn');
  const lang = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '300-500',
    message: ''
  });

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      budget: '300-500',
      message: ''
    });
    reset();
  };

  return (
    <section id="contact" className="max-w-screen-xl mx-auto px-4 py-16 bg-[#F9F9F7]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[#111111] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
          {lang === 'en' ? "Contact // Let's Build Something Great Together" : "Kontak // Mari Bangun Sesuatu yang Hebat Bersama"}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">
          {lang === 'en' ? "START YOUR PROJECT" : "MULAI PROYEK ANDA"}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: What to expect */}
        <div className="lg:col-span-5 border border-[#111111] p-6 bg-white">
          <div className="bg-[#111111] text-[#F9F9F7] text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold mb-4">
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
          <div className="border-t border-dashed border-[#111111] pt-4 space-y-3">
            <a href="mailto:contact@webcunts.dev" className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-neutral-700 hover:text-[#CC0000] transition-colors">
              <span className="inline-flex items-center justify-center border border-[#111111] h-6 w-6 shrink-0 hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors">
                <svg className="h-3 w-3 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              contact@webcunts.dev
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
          className="lg:col-span-7 border-2 border-[#111111] p-8 bg-white"
        >
          {state.succeeded ? (
            <div className="text-center py-12">
              <span className="font-serif text-3xl font-black uppercase text-[#CC0000] block mb-4">
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
                className="mt-6 border border-[#111111] bg-transparent px-6 py-2.5 font-sans font-bold uppercase tracking-widest text-xs transition-colors hover:bg-[#111111] hover:text-[#F9F9F7] cursor-pointer"
              >
                {lang === 'en' ? "Send Another Message" : "Kirim Pesan Lain"}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Name */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Your Name" : "Nama Anda"}
                </label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Smith"
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="font-mono text-xs text-[#CC0000] mt-1 block" />
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
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. john@company.com"
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="font-mono text-xs text-[#CC0000] mt-1 block" />
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
                  className="border-b-2 border-[#111111] bg-transparent px-3 py-2.5 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none cursor-pointer"
                  style={{ borderRadius: '0px' }}
                >
                  <option value="300-500">
                    {lang === 'en' ? '$300 – $500 USD' : 'Rp 4.500.000 – Rp 7.500.000 IDR'}
                  </option>
                  <option value="500-1000">
                    {lang === 'en' ? '$500 – $1,000 USD' : 'Rp 7.500.000 – Rp 15.000.000 IDR'}
                  </option>
                  <option value="1000-1500">
                    {lang === 'en' ? '$1,000 – $1,500 USD' : 'Rp 15.000.000 – Rp 22.500.000 IDR'}
                  </option>
                  <option value="1500-2000">
                    {lang === 'en' ? '$1,500 – $2,000 USD' : 'Rp 22.500.000 – Rp 30.000.000 IDR'}
                  </option>
                  <option value="2000-plus">
                    {lang === 'en' ? '$2,000+ USD' : 'Rp 30.000.000+ IDR'}
                  </option>
                  <option value="not-sure">
                    {lang === 'en' ? "Not sure yet — let's discuss" : "Belum yakin — mari kita diskusikan"}
                  </option>
                </select>
                <ValidationError prefix="Budget" field="budget" errors={state.errors} className="font-mono text-xs text-[#CC0000] mt-1 block" />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-700 mb-1">
                  {lang === 'en' ? "Tell Us About Your Project" : "Beri Tahu Kami Tentang Proyek Anda"}
                </label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={lang === 'en' 
                    ? "What does your business do? What kind of website or tool do you need? Any specific features in mind?"
                    : "Apa yang dilakukan bisnis Anda? Jenis situs web atau alat apa yang Anda butuhkan? Ada fitur khusus yang dipikirkan?"}
                  className="border border-[#111111] bg-transparent p-3 font-mono text-sm focus-visible:bg-neutral-100 focus-visible:outline-none"
                  style={{ borderRadius: '0px' }}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="font-mono text-xs text-[#CC0000] mt-1 block" />
              </div>

              {/* Submit */}
              <button 
                type="submit"
                disabled={state.submitting}
                className="w-full bg-[#111111] text-[#F9F9F7] border border-transparent px-6 py-3.5 font-sans font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-white hover:text-[#111111] hover:border-[#111111] cursor-pointer min-h-[44px] min-w-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ borderRadius: '0px' }}
              >
                {state.submitting 
                  ? (lang === 'en' ? 'Sending...' : 'Mengirim...') 
                  : (lang === 'en' ? 'Send Inquiry' : 'Kirim Pertanyaan')}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
