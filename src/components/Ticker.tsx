import React from 'react';
import Marquee from 'react-fast-marquee';

// Resolve CJS double-nesting inside ESM imports for SSR
const MarqueeComponent = (Marquee as any).default || Marquee;

export default function Ticker() {
  const newsItems = [
    "+240% ORGANIC TRAFFIC FOR AUTOMOTIVE CLIENT IN 60 DAYS",
    "CUSTOMER SERVICE COSTS CUT BY 35% WITH AI CHATBOT DEPLOYMENT",
    "PERFECT 100/100 GOOGLE LIGHTHOUSE SCORES ON EVERY BUILD",
    "NOW ACCEPTING PROJECTS FROM UK, EU, US & SOUTHEAST ASIA",
    "AVERAGE PROJECT TURNAROUND: 4–8 WEEKS",
    "40% INCREASE IN MOBILE BOOKINGS AFTER WEBSITE RELAUNCH",
    "FREE 30-MINUTE CONSULTATION FOR NEW CLIENTS"
  ];

  return (
    <div className="w-full bg-[#111111] text-[#F9F9F7] py-2 border-b border-[#111111] font-mono text-xs uppercase tracking-widest flex items-center select-none">
      <div className="bg-[#CC0000] text-[#F9F9F7] px-3 py-1 font-bold shrink-0 border-r border-[#111111] z-10 text-[11px]">
        UPDATE
      </div>
      <MarqueeComponent speed={40} gradient={false} pauseOnHover={true}>
        {newsItems.map((item, idx) => (
          <span key={idx} className="mx-8 flex items-center">
            <span className="bg-[#CC0000] text-[#F9F9F7] text-[10px] font-bold px-1.5 py-0.5 mr-2">
              NEW
            </span>
            {item}
            <span className="ml-8 text-neutral-500">•</span>
          </span>
        ))}
      </MarqueeComponent>
    </div>
  );
}
