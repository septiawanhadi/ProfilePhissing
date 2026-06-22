import React from 'react';
import Marquee from 'react-fast-marquee';
import { useLanguage } from '../hooks/useLanguage';

// Resolve CJS double-nesting inside ESM imports for SSR
const MarqueeComponent = (Marquee as any).default || Marquee;

export default function Ticker() {
  const lang = useLanguage();

  const newsItemsEn = [
    "+240% ORGANIC TRAFFIC FOR AUTOMOTIVE CLIENT IN 60 DAYS",
    "CUSTOMER SERVICE COSTS CUT BY 35% WITH AI CHATBOT DEPLOYMENT",
    "PERFECT 100/100 GOOGLE LIGHTHOUSE SCORES ON EVERY BUILD",
    "NOW ACCEPTING PROJECTS FROM UK, EU, US & SOUTHEAST ASIA",
    "AVERAGE PROJECT TURNAROUND: 4–8 WEEKS",
    "40% INCREASE IN MOBILE BOOKINGS AFTER WEBSITE RELAUNCH",
    "FREE 30-MINUTE CONSULTATION FOR NEW CLIENTS"
  ];

  const newsItemsId = [
    "+240% TRAFIK ORGANIK UNTUK KLIEN OTOMOTIF DALAM 60 HARI",
    "BIAYA CS TERCUT 35% DENGAN IMPLEMENTASI AI CHATBOT",
    "SKOR GOOGLE LIGHTHOUSE SEMPURNA 100/100 DI SETIAP BUILD",
    "KINI MENERIMA PROYEK DARI INGGRIS, EROPA, AS & ASIA TENGGARA",
    "RATA-RATA PENGERJAAN PROYEK: 4–8 MINGGU",
    "KENAIKAN 40% PADA PEMESANAN LEWAT HP SETELAH DILUNCURKAN ULANG",
    "KONSULTASI GRATIS 30 MENIT UNTUK KLIEN BARU"
  ];

  const newsItems = lang === 'en' ? newsItemsEn : newsItemsId;

  return (
    <div className="w-full bg-[var(--color-fg)] text-[var(--color-bg)] py-2 border-b border-[var(--color-fg)] font-mono text-xs uppercase tracking-widest flex items-center select-none">
      <div className="bg-[var(--color-accent)] text-[var(--color-bg)] px-3 py-1 font-bold shrink-0 border-r border-[var(--color-fg)] z-10 text-[11px]">
        {lang === 'en' ? 'UPDATE' : 'BARU'}
      </div>
      <MarqueeComponent speed={40} gradient={false} pauseOnHover={true}>
        {newsItems.map((item, idx) => (
          <span key={idx} className="mx-8 flex items-center">
            <span className="bg-[var(--color-accent)] text-[var(--color-bg)] text-[10px] font-bold px-1.5 py-0.5 mr-2">
              {lang === 'en' ? 'NEW' : 'INFO'}
            </span>
            {item}
            <span className="ml-8 text-neutral-500">•</span>
          </span>
        ))}
      </MarqueeComponent>
    </div>
  );
}
