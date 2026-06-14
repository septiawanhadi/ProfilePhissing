import React, { useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  subtitle: string;
  content: string[];
  metrics: { label: string; value: string }[];
}

export default function Portfolio() {
  const [activeCase, setActiveCase] = useState<string | null>(null);

  const cases: CaseStudy[] = [
    {
      id: "manyarmotor",
      title: "HOW WE HELPED AN AUTO REPAIR SHOP INCREASE BOOKINGS BY 40%",
      industry: "AUTOMOTIVE · SURABAYA",
      subtitle: "A complete website rebuild that turned a slow, outdated site into a lead-generating machine.",
      content: [
        "The client's existing website was built on a bloated template — it loaded in over 6 seconds on mobile and was invisible on Google. Customers were calling competitors instead. We rebuilt the entire platform from scratch using a modern static-site architecture with SEO baked into every page.",
        "Within 60 days of launch, organic search traffic increased by 240%. Mobile bookings jumped 40% as page load times dropped below 0.6 seconds. The site now scores a perfect 100/100 on Google Lighthouse — outperforming every competitor in the area."
      ],
      metrics: [
        { label: "LOAD TIME", value: "0.6s" },
        { label: "LIGHTHOUSE", value: "100/100" },
        { label: "TRAFFIC", value: "+240%" }
      ],
    },
    {
      id: "sagahealth",
      title: "BUILDING AN ACCESSIBLE PLATFORM FOR A SPECIAL EDUCATION SCHOOL",
      industry: "EDUCATION · HEALTHCARE",
      subtitle: "An inclusive web portal designed for parents, teachers, and administrators at a special needs school.",
      content: [
        "The school needed a website that parents could navigate easily on any device, including low-end phones. We built a clean, accessible portal with a health tracking module and a searchable directory — all designed to meet AAA accessibility standards.",
        "Database query speeds improved by 3x, and the portal achieved the highest accessibility rating possible. Parents and teachers can now access educational directories instantly, even on slow mobile connections in rural areas."
      ],
      metrics: [
        { label: "ACCESSIBILITY", value: "AAA" },
        { label: "QUERY SPEED", value: "45ms" },
        { label: "USER RATING", value: "9.8/10" }
      ],
    },
    {
      id: "sawargi",
      title: "CUTTING HOTEL CUSTOMER SERVICE COSTS BY 35% WITH AI",
      industry: "HOSPITALITY · AI INTEGRATION",
      subtitle: "A custom AI chatbot that handles bookings and guest inquiries around the clock.",
      content: [
        "The hotel's front desk was overwhelmed — staff were spending hours answering the same questions about room availability, pricing, and check-in times. We deployed a custom RAG-powered chatbot that connects to both their website and Telegram channel.",
        "The bot now handles 98% of routine inquiries without human intervention. Response times dropped from 15 minutes to 1.2 seconds, and customer service overhead costs decreased by 35%. The hotel staff can now focus on in-person guest experience instead of repetitive messaging."
      ],
      metrics: [
        { label: "AUTOMATION", value: "98.2%" },
        { label: "RESPONSE", value: "1.2s" },
        { label: "COST SAVED", value: "-35%" }
      ],
    },
    {
      id: "checklist",
      title: "A CUSTOM DESKTOP TOOL THAT REDUCED TRADING ERRORS BY 75%",
      industry: "FINTECH · DESKTOP APP",
      subtitle: "A floating checklist overlay that keeps traders disciplined and accountable.",
      content: [
        "The client — an independent trader — was losing money on impulsive decisions. They needed a tool that would force them to follow their own rules before entering any trade. We built a lightweight desktop widget that floats transparently over their trading platform.",
        "The checklist overlay runs with near-zero CPU usage and prompts the user through a strict verification flow before every trade. Impulsive error rates dropped by 75%, and the client reported significantly improved profitability within the first month of use."
      ],
      metrics: [
        { label: "CPU USAGE", value: "0.2%" },
        { label: "ERRORS", value: "-75%" },
        { label: "FORMAT", value: "DESKTOP" }
      ],
    }
  ];

  return (
    <section id="work" className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[#111111] bg-[#F9F9F7]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[#111111] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">Case Studies // Real Results for Real Businesses</div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">SELECTED WORK</h2>
      </div>

      {/* Asymmetric Newspaper Grids */}
      <div className="grid grid-cols-12 gap-0 border-t border-l border-[#111111] bg-white">
        {cases.map((item, index) => {
          const isOdd = index % 2 === 0;
          const colSpan = isOdd ? "col-span-12 lg:col-span-7" : "col-span-12 lg:col-span-5";
          
          return (
            <div 
              key={item.id}
              className={`${colSpan} p-6 md:p-8 border-r border-b border-[#111111] flex flex-col justify-between hover:bg-neutral-100 transition-colors duration-200`}
            >
              <div>
                {/* Industry Tag */}
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#CC0000] font-bold mb-3">
                  <span>{item.industry}</span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase text-[#111111] mb-3 leading-tight tracking-tight">
                  {item.title}
                </h3>

                <p className="font-serif italic text-neutral-700 text-sm mb-4">
                  "{item.subtitle}"
                </p>

                {/* Client story copy */}
                <div className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed text-justify mb-6 space-y-3">
                  <p>{item.content[0]}</p>
                  {activeCase === item.id && (
                    <p className="border-t border-dashed border-[#111111] pt-3">{item.content[1]}</p>
                  )}
                </div>
              </div>

              <div>
                {/* Metrics Table */}
                <div className="border border-[#111111] bg-[#F9F9F7] mb-4">
                  <div className="grid grid-cols-3 divide-x divide-[#111111] text-center font-mono text-[10px] uppercase py-1 bg-[#111111] text-[#F9F9F7] font-bold">
                    {item.metrics.map((m, idx) => (
                      <div key={idx}>{m.label}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 divide-x divide-[#111111] text-center font-mono text-xs font-bold py-2 bg-white text-neutral-900">
                    {item.metrics.map((m, idx) => (
                      <div key={idx} className={m.value.startsWith('+') || m.value.startsWith('-') || m.value === '100/100' || m.value === 'AAA' ? "text-[#CC0000]" : ""}>
                        {m.value}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expand/Collapse */}
                <div className="flex justify-between items-center text-xs font-mono tracking-widest uppercase mt-4 pt-4 border-t border-dashed border-neutral-300">
                  <button 
                    onClick={() => setActiveCase(activeCase === item.id ? null : item.id)}
                    className="text-[#CC0000] font-bold hover:underline underline-offset-4 decoration-2 cursor-pointer bg-transparent border-none p-0 text-left tracking-widest"
                  >
                    {activeCase === item.id ? "Show Less" : "Read Full Story"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
