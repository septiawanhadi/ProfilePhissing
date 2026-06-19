import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface FaqItem {
  question: string;
  response: string;
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const lang = useLanguage();

  const itemsEn: FaqItem[] = [
    {
      question: "HOW MUCH DOES A WEBSITE COST?",
      response: "Our projects typically range from $300 to $2,000 depending on complexity. A simple business website starts around $300–$500. A full custom build with SEO optimization, multiple pages, and interactive features lands in the $800–$1,500 range. AI chatbot integrations and custom tools are quoted separately. We always provide a fixed-price quote upfront — no hourly billing, no surprises."
    },
    {
      question: "I'M BASED IN LONDON / THE US — CAN YOU WORK WITH INTERNATIONAL CLIENTS?",
      response: "Absolutely. We work with clients across the UK, Europe, US, and Southeast Asia every day. We communicate in English, use async tools like Slack and email, and schedule calls across timezones (GMT+7, GMT, and EST). Most of our clients have never visited our office — and they don't need to. Everything is handled remotely with regular progress updates."
    },
    {
      question: "HOW LONG DOES A PROJECT TAKE?",
      response: "Most websites are delivered within 4–8 weeks from kickoff. Simpler projects (landing pages, small business sites) can ship in 2–3 weeks. AI chatbot deployments typically take 3–5 weeks including testing. We'll give you a clear timeline during the free consultation and keep you updated throughout the build."
    },
    {
      question: "WHAT HAPPENS AFTER LAUNCH? DO YOU OFFER SUPPORT?",
      response: "You own 100% of the code — we hand over everything. After launch, we offer optional monthly support packages for updates, content changes, and performance monitoring. If you prefer to manage it yourself, we'll make sure your team knows how. We also provide 30 days of free bug fixes after every launch."
    },
    {
      question: "WHY SHOULD I CHOOSE YOU OVER A BIGGER AGENCY?",
      response: "Bigger agencies charge bigger prices for slower work. We're a lean two-person team — every project gets direct attention from a senior developer, not a junior intern. Our sites consistently score 100/100 on Google Lighthouse because we hand-craft every line of code. No templates, no WordPress themes, no bloat. Just fast, clean, results-driven work."
    }
  ];

  const itemsId: FaqItem[] = [
    {
      question: "BERAPA BIAYA PEMBUATAN SITUS WEB?",
      response: "Proyek kami biasanya berkisar dari Rp 4.500.000 hingga Rp 30.000.000 IDR tergantung pada kompleksitasnya. Situs web bisnis sederhana mulai dari sekitar Rp 4.500.000–Rp 7.500.000 IDR. Pembuatan kustom penuh dengan optimasi SEO, banyak halaman, dan fitur interaktif berkisar antara Rp 12.000.000–Rp 22.500.000 IDR. Integrasi chatbot AI dan alat kustom ditawarkan secara terpisah. Kami selalu memberikan harga tetap di muka — tanpa biaya per jam, tanpa kejutan."
    },
    {
      question: "SAYA BERBASIS DI LONDON / AS — APAKAH BISA BEKERJA DENGAN KLIEN INTERNASIONAL?",
      response: "Tentu saja. Kami bekerja dengan klien di seluruh Inggris, Eropa, AS, dan Asia Tenggara setiap hari. Kami berkomunikasi dalam bahasa Inggris, menggunakan alat asinkron seperti Slack dan email, serta mengatur jadwal panggilan di berbagai zona waktu (GMT+7, GMT, dan EST). Sebagian besar klien kami belum pernah mengunjungi kantor kami — dan mereka tidak perlu melakukannya. Semuanya ditangani secara remote dengan pembaruan kemajuan berkala."
    },
    {
      question: "BERAPA LAMA WAKTU PENGERJAAN PROYEK?",
      response: "Sebagian besar situs web dikirimkan dalam waktu 4–8 minggu dari peluncuran perdana. Proyek yang lebih sederhana (landing page, situs bisnis kecil) dapat selesai dalam 2–3 minggu. Penerapan chatbot AI biasanya memakan waktu 3–5 minggu termasuk pengujian. Kami akan memberikan lini masa yang jelas selama konsultasi gratis dan terus memberi Anda pembaruan selama proses pembuatan."
    },
    {
      question: "APA YANG TERJADI SETELAH PELUNCURAN? APAKAH ANDA MENAWARKAN DUKUNGAN?",
      response: "Anda memiliki 100% dari kode sumber — kami menyerahkan semuanya. Setelah peluncuran, kami menawarkan paket dukungan bulanan opsional untuk pembaruan, perubahan konten, dan pemantauan kinerja. Jika Anda lebih suka mengelolanya sendiri, kami akan memastikan tim Anda tahu caranya. Kami juga menyediakan 30 hari dukungan perbaikan bug gratis setelah setiap peluncuran."
    },
    {
      question: "MENGAPA SAYA HARUS MEMILIH ANDA DARIPADA AGENSI YANG LEBIH BESAR?",
      response: "Agensi besar mengenakan tarif yang lebih besar untuk pengerjaan yang lambat. Kami adalah tim kecil beranggotakan dua orang — setiap proyek mendapatkan perhatian langsung dari developer senior, bukan anak magang junior. Situs kami secara konsisten mendapat skor 100/100 di Google Lighthouse karena kami menulis setiap baris kode dengan tangan. Tanpa template, tanpa WordPress, tanpa bloat. Hanya pekerjaan yang cepat, bersih, dan berorientasi hasil."
    }
  ];

  const items = lang === 'en' ? itemsEn : itemsId;

  return (
    <section id="faq" className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[#111111] bg-[#F9F9F7]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[#111111] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
          {lang === 'en' ? 'FAQ // Common Questions From Our Clients' : 'FAQ // Pertanyaan Umum Dari Klien Kami'}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">
          {lang === 'en' ? 'FREQUENTLY ASKED QUESTIONS' : 'PERTANYAAN YANG SERING DIAJUKAN'}
        </h2>
      </div>

      {/* Accordion Layout */}
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item, idx) => {
          const isOpen = openIdx === idx;
          
          return (
            <div 
              key={idx} 
              className="border border-[#111111] bg-white"
            >
              {/* Accordion Trigger */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left p-5 flex justify-between items-center bg-transparent border-none font-serif text-base md:text-lg font-bold uppercase tracking-tight text-[#111111] cursor-pointer hover:bg-neutral-100 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{item.question}</span>
                <span className="shrink-0 flex items-center justify-center border border-[#111111] h-8 w-8 text-sm font-mono font-bold bg-[#F9F9F7] select-none">
                  <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#CC0000]' : 'rotate-0'}`}>
                    {isOpen ? '−' : '＋'}
                  </span>
                </span>
              </button>

              {/* Accordion Content */}
              <div 
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-[#111111]' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 bg-[#F9F9F7]/50 font-body text-xs md:text-sm text-neutral-600 leading-relaxed text-justify">
                    <p className="border-l-4 border-[#CC0000] pl-4">
                      {item.response}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
