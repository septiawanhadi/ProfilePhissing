import React from 'react';

export default function Hero() {
  return (
    <section id="home" className="max-w-screen-xl mx-auto px-4 py-12 border-b-2 border-[#111111]">
      <div className="grid grid-cols-12 gap-0">
        
        {/* Left Section: Value Proposition (8 Cols on Desktop) */}
        <div className="col-span-12 lg:col-span-8 pr-0 lg:pr-8 pb-8 lg:pb-0">
          <div className="font-mono text-xs uppercase tracking-widest text-[#CC0000] font-bold mb-3 flex items-center gap-2">
            <span className="h-2 w-2 bg-[#CC0000] inline-block"></span>
            Web Design · SEO · AI Automation
          </div>
          
          <h2 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.85] tracking-tighter uppercase text-[#111111] mb-6">
            WE BUILD WEBSITES THAT MAKE YOUR BUSINESS MONEY
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-neutral-800 font-body text-sm md:text-base leading-relaxed text-justify">
            <div>
              <p className="drop-cap mb-4">
                Your website is your most important salesperson. We build blazing-fast, SEO-optimized websites and intelligent automation systems that turn visitors into customers — whether you're a repair shop in London, a hotel in Singapore, or a startup anywhere in between.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Every site we ship scores 100/100 on Google Lighthouse, loads in under one second, and is built to rank. We combine enterprise-grade engineering with boutique agency attention — no bloated templates, no page builders, just precision-crafted code that works.
              </p>
              <p className="mb-6 font-mono text-xs uppercase tracking-widest text-neutral-500">
                — Based in Indonesia. Serving clients worldwide.
              </p>
            </div>
          </div>

          {/* CTA Controls */}
          <div className="flex flex-wrap gap-4 items-center pt-4 border-t border-dashed border-[#111111] mt-6">
            <a 
              href="#contact" 
              className="bg-[#111111] text-[#F9F9F7] border border-transparent px-6 py-3 font-sans font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-[#F9F9F7] hover:text-[#111111] hover:border-[#111111] active:translate-y-0.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              Get a Free Consultation
            </a>
            <a 
              href="#work" 
              className="border border-[#111111] bg-transparent px-6 py-3 font-sans font-bold uppercase tracking-widest text-xs transition-all duration-200 hover:bg-[#111111] hover:text-[#F9F9F7] active:translate-y-0.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              See Our Work
            </a>
            <a 
              href="#services" 
              className="text-[#111111] text-xs font-sans font-bold uppercase tracking-widest underline-offset-4 decoration-2 decoration-[#CC0000] hover:underline"
            >
              View Services →
            </a>
          </div>
        </div>

        {/* Right Section: Brand Mark & Metrics (4 Cols on Desktop) */}
        <div className="col-span-12 lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#111111] pt-8 lg:pt-0 pl-0 lg:pl-8 flex flex-col justify-between">
          <div>
            {/* Brand Mark Box */}
            <div className="border border-[#111111] p-2 bg-white relative group cursor-pointer overflow-hidden">
              <div className="h-64 bg-[#E5E5E0] relative flex items-center justify-center overflow-hidden">
                {/* Dot Grid Halftone Simulator Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#111_1px,transparent_1px)] opacity-20 [background-size:8px_8px] z-10" />
                {/* Subtle lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.05)_50%,transparent_50%)] [background-size:100%_4px]" />
                
                {/* Agency Monogram */}
                <div className="z-0 text-center uppercase tracking-widest text-neutral-800 transition-transform duration-500 group-hover:scale-110">
                  <div className="font-serif text-7xl font-black mb-2">WC</div>
                  <div className="font-mono text-[10px] text-neutral-600 font-bold border-t border-[#111111] pt-2">
                    EST. 2026 · AGENCY
                  </div>
                </div>
              </div>
              
              {/* Caption */}
              <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-neutral-600 leading-tight">
                <strong>Fig 1.1:</strong> Web Cunts Agency — Jakarta & Surabaya, serving clients in London, Europe, US, and Southeast Asia.
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-6 border border-[#111111] bg-[#F9F9F7]">
              <div className="bg-[#111111] text-[#F9F9F7] text-[10px] font-mono uppercase tracking-widest px-3 py-1 font-bold">
                PERFORMANCE BENCHMARKS
              </div>
              <table className="w-full text-left font-mono text-xs border-collapse">
                <tbody>
                  <tr className="border-b border-[#111111]">
                    <td className="p-2.5 font-bold bg-[#E5E5E0]/40 w-1/2">AVG. LOAD TIME</td>
                    <td className="p-2.5 text-[#CC0000] font-bold">0.6 SECONDS</td>
                  </tr>
                  <tr className="border-b border-[#111111]">
                    <td className="p-2.5 font-bold bg-[#E5E5E0]/40">LIGHTHOUSE</td>
                    <td className="p-2.5 text-neutral-900 font-bold">100 / 100</td>
                  </tr>
                  <tr className="border-b border-[#111111]">
                    <td className="p-2.5 font-bold bg-[#E5E5E0]/40">CLIENT RETENTION</td>
                    <td className="p-2.5 text-neutral-900 font-bold">100%</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold bg-[#E5E5E0]/40">RESPONSE TIME</td>
                    <td className="p-2.5 text-neutral-900 font-bold">&lt; 4 HOURS</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
