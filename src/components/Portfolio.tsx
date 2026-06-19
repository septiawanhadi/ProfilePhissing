import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ProjectModal from './ProjectModal';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  subtitle: string;
  content: string[];
}

export default function Portfolio() {
  const lang = useLanguage();
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const casesEn: CaseStudy[] = [
    {
      id: "manyarmotor",
      title: "HOW WE HELPED AN AUTO REPAIR SHOP INCREASE BOOKINGS BY 40%",
      industry: "AUTOMOTIVE · SURABAYA",
      subtitle: "A complete website rebuild that turned a slow, outdated site into a lead-generating machine.",
      content: [
        "The client's existing website was built on a bloated template — it loaded in over 6 seconds on mobile and was invisible on Google. Customers were calling competitors instead. We rebuilt the entire platform from scratch using a modern static-site architecture with SEO baked into every page.",
        "Within 60 days of launch, organic search traffic increased by 240%. Mobile bookings jumped 40% as page load times dropped below 0.6 seconds. The site now scores a perfect 100/100 on Google Lighthouse — outperforming every competitor in the area."
      ]
    },
    {
      id: "sagahealth",
      title: "BUILDING AN ACCESSIBLE PLATFORM FOR A SPECIAL EDUCATION SCHOOL",
      industry: "EDUCATION · HEALTHCARE",
      subtitle: "An inclusive web portal designed for parents, teachers, and administrators at a special needs school.",
      content: [
        "The school needed a website that parents could navigate easily on any device, including low-end phones. We built a clean, accessible portal with a health tracking module and a searchable directory — all designed to meet AAA accessibility standards.",
        "Database query speeds improved by 3x, and the portal achieved the highest accessibility rating possible. Parents and teachers can now access educational directories instantly, even on slow mobile connections in rural areas."
      ]
    },
    {
      id: "sawargi",
      title: "CUTTING HOTEL CUSTOMER SERVICE COSTS BY 35% WITH AI",
      industry: "HOSPITALITY · AI INTEGRATION",
      subtitle: "A custom AI chatbot that handles bookings and guest inquiries around the clock.",
      content: [
        "The hotel's front desk was overwhelmed — staff were spending hours answering the same questions about room availability, pricing, and check-in times. We deployed a custom RAG-powered chatbot that connects to both their website and Telegram channel.",
        "The bot now handles 98% of routine inquiries without human intervention. Response times dropped from 15 minutes to 1.2 seconds, and customer service overhead costs decreased by 35%. The hotel staff can now focus on in-person guest experience instead of repetitive messaging."
      ]
    },
    {
      id: "checklist",
      title: "A CUSTOM DESKTOP TOOL THAT REDUCED TRADING ERRORS BY 75%",
      industry: "FINTECH · DESKTOP APP",
      subtitle: "A floating checklist overlay that keeps traders disciplined and accountable.",
      content: [
        "The client — an independent trader — was losing money on impulsive decisions. They needed a tool that would force them to follow their own rules before entering any trade. We built a lightweight desktop widget that floats transparently over their trading platform.",
        "The checklist overlay runs with near-zero CPU usage and prompts the user through a strict verification flow before every trade. Impulsive error rates dropped by 75%, and the client reported significantly improved profitability within the first month of use."
      ]
    }
  ];

  const casesId: CaseStudy[] = [
    {
      id: "manyarmotor",
      title: "BAGAIMANA KAMI MEMBANTU BENGKEL OTOMOTIF MENINGKATKAN PEMESANAN SEBESAR 40%",
      industry: "OTOMOTIF · SURABAYA",
      subtitle: "Pembangunan ulang situs web sepenuhnya yang mengubah situs lambat menjadi mesin penghasil prospek.",
      content: [
        "Situs web klien yang lama dibangun di atas template yang lambat — memuat lebih dari 6 detik di seluler dan tidak terlihat di Google. Pelanggan beralih menghubungi pesaing. Kami membangun kembali seluruh platform dari awal menggunakan arsitektur situs statis modern dengan SEO di setiap halaman.",
        "Dalam 60 hari setelah peluncuran, lalu lintas pencarian organik meningkat sebesar 240%. Pemesanan seluler melonjak 40% karena waktu muat halaman turun di bawah 0,6 detik. Situs ini sekarang mendapat skor sempurna 100/100 di Google Lighthouse — mengungguli semua pesaing di area tersebut."
      ]
    },
    {
      id: "sagahealth",
      title: "MEMBANGUN PLATFORM AKSESIBEL UNTUK SEKOLAH KEBUTUHAN KHUSUS",
      industry: "PENDIDIKAN · KESEHATAN",
      subtitle: "Portal web inklusif yang dirancang untuk orang tua, guru, dan administrator di sekolah kebutuhan khusus.",
      content: [
        "Sekolah membutuhkan situs web yang dapat dinavigasi dengan mudah oleh orang tua di perangkat apa pun, termasuk ponsel kelas bawah. Kami membangun portal yang bersih dan mudah diakses dengan modul pelacakan kesehatan dan direktori yang dapat dicari — semuanya dirancang untuk memenuhi standar aksesibilitas AAA.",
        "Kecepatan kueri database meningkat 3x, dan portal mencapai peringkat aksesibilitas tertinggi yang dimungkinkan. Orang tua dan guru sekarang dapat mengakses direktori pendidikan secara instan, bahkan pada koneksi seluler yang lambat di daerah pedesaan."
      ]
    },
    {
      id: "sawargi",
      title: "MEMOTONG BIAYA LAYANAN PELANGGAN HOTEL SEBESAR 35% DENGAN AI",
      industry: "PERHOTELAN · INTEGRASI AI",
      subtitle: "Chatbot AI khusus yang menangani pemesanan dan pertanyaan tamu sepanjang waktu.",
      content: [
        "Resepsionis hotel kewalahan — staf menghabiskan waktu berjam-jam untuk menjawab pertanyaan yang sama tentang ketersediaan kamar, harga, dan waktu check-in. Kami menerapkan chatbot bertenaga RAG khusus yang terhubung ke situs web dan saluran Telegram mereka.",
        "Bot sekarang menangani 98% pertanyaan rutin tanpa intervensi manusia. Waktu respons turun dari 15 menit menjadi 1,2 detik, dan biaya operasional layanan pelanggan berkurang sebesar 35%. Staf hotel kini dapat fokus pada pengalaman tamu secara langsung daripada pengiriman pesan berulang."
      ]
    },
    {
      id: "checklist",
      title: "ALAT DESKTOP KUSTOM YANG MENGURANGI KESALAHAN TRADING SEBESAR 75%",
      industry: "FINTECH · APLIKASI DESKTOP",
      subtitle: "Overlay daftar periksa melayang yang menjaga disiplin dan akuntabilitas para trader.",
      content: [
        "Klien — seorang trader independen — kehilangan uang karena keputusan impulsif. Mereka membutuhkan alat yang memaksa mereka untuk mengikuti aturan mereka sendiri sebelum masuk ke perdagangan apa pun. Kami membangun widget desktop ringan yang melayang secara transparan di atas platform perdagangan mereka.",
        "Overlay daftar periksa berjalan dengan penggunaan CPU mendekati nol dan meminta pengguna melalui alur verifikasi ketat sebelum setiap transaksi. Tingkat kesalahan impulsif turun sebesar 75%, dan klien melaporkan peningkatan profitabilitas yang signifikan dalam bulan pertama penggunaan."
      ]
    }
  ];

  const cases = lang === 'en' ? casesEn : casesId;

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[#111111] bg-[#F9F9F7]">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12 border-b-2 border-[#111111] pb-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
            {lang === 'en' ? 'Case Studies // Real Results for Real Businesses' : 'Studi Kasus // Hasil Nyata untuk Bisnis Nyata'}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[#111111] tracking-tight">
            {lang === 'en' ? 'SELECTED WORK' : 'KARYA TERPILIH'}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-2 mb-1">
          <button 
            onClick={() => scroll('left')}
            className="border border-[#111111] bg-white w-8 h-8 flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-150 active:translate-y-0.5"
            aria-label="Previous Project"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="border border-[#111111] bg-white w-8 h-8 flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-150 active:translate-y-0.5"
            aria-label="Next Project"
          >
            →
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4 px-1"
      >
        {cases.map((item) => (
          <div 
            key={item.id}
            onClick={() => {
              setSelectedProject(item);
              setIsModalOpen(true);
            }}
            className="w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0 snap-start border-2 border-[#111111] bg-white p-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex flex-col justify-between h-[280px] group"
          >
            <div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-[#CC0000] font-bold mb-2">
                {item.industry}
              </div>
              <h4 className="font-serif text-lg font-bold uppercase text-[#111111] leading-tight mb-2 group-hover:text-[#CC0000] transition-colors line-clamp-2">
                {item.title}
              </h4>
              <p className="font-serif italic text-xs text-neutral-500 mb-4 line-clamp-2">
                "{item.subtitle}"
              </p>
              <p className="font-body text-xs text-neutral-600 leading-relaxed line-clamp-3">
                {item.content[0]}
              </p>
            </div>

            <div className="border-t border-dashed border-neutral-300 pt-4 flex justify-between items-center mt-4">
              <span className="font-mono text-[10px] font-bold text-[#CC0000] tracking-widest uppercase group-hover:underline">
                {lang === 'en' ? 'READ STORY →' : 'BACA SELENGKAPNYA →'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        isOpen={isModalOpen}
        project={selectedProject}
        lang={lang}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
