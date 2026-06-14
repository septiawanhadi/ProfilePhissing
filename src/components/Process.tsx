import React from 'react';

const steps = [
  {
    number: "01",
    title: "DISCOVERY & ALIGNMENT",
    description: "We begin with a deep dive into your business, customer demographics, and goals. Through a free 30-minute consultation, we analyze your current challenges and determine the best approach to drive real business results.",
  },
  {
    number: "02",
    title: "STRATEGY & ROADMAP",
    description: "We outline the application architecture, propose the optimal tech stack, and define the project timeline. You will receive a comprehensive development roadmap along with a fixed-price proposal. What we quote is exactly what you pay.",
  },
  {
    number: "03",
    title: "ITERATIVE SPRINT BUILDS",
    description: "We develop the solution in focused, weekly sprints. We host live staging sites so you can monitor real-time progress, test interactive components, and provide feedback at every stage of the development cycle.",
  },
  {
    number: "04",
    title: "LAUNCH, SEO & HANDOVER",
    description: "We conduct rigorous cross-browser testing and perform a final search-engine optimization sweep. After launching on high-speed global servers, we hand over full repository ownership and provide 30 days of free bug-fix support.",
  },
];

export default function Process() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[#111111]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[#111111] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
          Process // From First Call to Launch Day
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">
          HOW WE WORK
        </h2>
      </div>

      {/* Inverted Process Grid */}
      <div className="bg-[#111111] text-[#F9F9F7] border border-[#111111]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`p-8 flex flex-col ${
                idx < steps.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-[#F9F9F7]/10"
                  : ""
              }`}
            >
              {/* Step Number */}
              <div className="font-serif text-5xl font-black text-[#CC0000] leading-none mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[#F9F9F7] mb-3">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-body text-sm text-neutral-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-6 text-center">
        <a
          href="#contact"
          className="inline-block text-xs font-mono uppercase tracking-widest text-[#CC0000] font-bold hover:underline underline-offset-4 decoration-2"
        >
          Ready to start? Get your free consultation →
        </a>
      </div>
    </section>
  );
}
