import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Process() {
  const lang = useLanguage();

  const stepsEn = [
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

  const stepsId = [
    {
      number: "01",
      title: "PENEMUAN & PENYELARASAN",
      description: "Kami memulai dengan mendalami bisnis, demografi pelanggan, dan tujuan Anda. Melalui konsultasi gratis 30 menit, kami menganalisis tantangan Anda saat ini dan menentukan pendekatan terbaik untuk mendorong hasil bisnis yang nyata.",
    },
    {
      number: "02",
      title: "STRATEGI & PETA JALAN",
      description: "Kami merancang arsitektur aplikasi, mengusulkan stack teknologi yang optimal, dan menentukan lini masa proyek. Anda akan menerima peta jalan pengembangan yang komprehensif beserta penawaran harga tetap. Apa yang kami tawarkan adalah apa yang Anda bayar.",
    },
    {
      number: "03",
      title: "PEMBANGUNAN SPRINT ITERATIF",
      description: "Kami mengembangkan solusi dalam sprint mingguan yang terfokus. Kami menghosting situs web sementara (staging) langsung sehingga Anda dapat memantau kemajuan secara real-time, menguji komponen interaktif, dan memberikan umpan balik pada setiap tahap siklus pengembangan.",
    },
    {
      number: "04",
      title: "PELUNCURAN, SEO & SERAH TERIMA",
      description: "Kami melakukan pengujian lintas browser yang ketat dan melakukan optimasi mesin pencari (SEO) terakhir. Setelah meluncurkan di server global berkecepatan tinggi, kami menyerahkan kepemilikan repositori penuh dan menyediakan 30 hari dukungan perbaikan bug gratis.",
    },
  ];

  const steps = lang === 'en' ? stepsEn : stepsId;

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[var(--color-fg)]">
      {/* Section Header */}
      <div className="mb-12 border-b-2 border-[var(--color-fg)] pb-4">
        <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
          {lang === 'en' ? 'Process // From First Call to Launch Day' : 'Proses // Dari Telepon Pertama hingga Hari Peluncuran'}
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[var(--color-fg)] tracking-tight">
          {lang === 'en' ? 'HOW WE WORK' : 'CARA KAMI BEKERJA'}
        </h2>
      </div>

      {/* Inverted Process Grid */}
      <div className="bg-[var(--color-fg)] text-[var(--color-bg)] border border-[var(--color-fg)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className={`p-8 flex flex-col ${
                idx < steps.length - 1
                  ? "border-b lg:border-b-0 lg:border-r border-process-subtle"
                  : ""
              }`}
            >
              {/* Step Number */}
              <div className="font-serif text-5xl font-black text-[var(--color-accent)] leading-none mb-4">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-[var(--color-bg)] mb-3">
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
          className="inline-block text-xs font-mono uppercase tracking-widest text-[var(--color-accent)] font-bold hover:underline underline-offset-4 decoration-2"
        >
          {lang === 'en' ? 'Ready to start? Get your free consultation →' : 'Siap untuk memulai? Dapatkan konsultasi gratis Anda →'}
        </a>
      </div>
    </section>
  );
}
