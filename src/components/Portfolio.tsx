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
      title: "FULL INFRASTRUCTURE BUILD FOR AN AUTO SERVICE SHOP — ZERO TO RANKED",
      industry: "AUTOMOTIVE · SURABAYA",
      subtitle: "Solo-engineered the entire digital infrastructure for Manyar Auto Service — from server setup to top local search rankings.",
      content: [
        "Manyar Auto Service had no web presence. As the sole developer and infrastructure engineer, we built and managed everything from scratch — architecture, codebase, Docker-based server deployment, domain management, SSL, and analytics. No agencies, no templates, no shortcuts.",
        "Continuous SEO crawling and indexing work delivered consistent high visibility in local search results. With full control over domain, server config, and analytics engine, the shop now operates a self-sufficient digital infrastructure that ranks and converts without ongoing third-party costs."
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
      id: "bsi",
      title: "CORPORATE WEBSITE REVAMP WITH PERFECT LIGHTHOUSE SCORES & VAPT SECURITY",
      industry: "ENTERPRISE · IT CONSULTING · AUTOMOTIVE",
      subtitle: "Full-stack revamp of bsi.co.id — achieving 100/100 Lighthouse and remediating critical VAPT vulnerabilities.",
      content: [
        "PT Berlian Sistem Informasi needed their corporate website to reflect their enterprise positioning — but the existing site was underperforming on speed, security, and SEO. We rebuilt the entire platform using Next.js and Docker, with custom middleware handling every security layer.",
        "The revamp achieved a perfect 100/100 on Google Lighthouse for SEO and Best Practices. Critical VAPT-identified vulnerabilities (XSS, XSRF, HSTS) were fully remediated using Content Security Policy (CSP) nonces. The new infrastructure is containerized, crawler-optimized, and production-hardened."
      ]
    }
  ];

  const casesId: CaseStudy[] = [
    {
      id: "manyarmotor",
      title: "MEMBANGUN INFRASTRUKTUR DIGITAL PENUH UNTUK BENGKEL OTOMOTIF — DARI NOL HINGGA TERINDEKS",
      industry: "OTOMOTIF · SURABAYA",
      subtitle: "Dibangun sendiri dari awal — arsitektur, server, domain, hingga visibilitas pencarian lokal untuk Manyar Auto Service.",
      content: [
        "Manyar Auto Service belum memiliki kehadiran digital sama sekali. Sebagai satu-satunya developer dan infrastructure engineer, kami membangun dan mengelola segalanya dari nol — arsitektur kode, deployment server berbasis Docker, manajemen domain, SSL, dan analytics. Tanpa agensi, tanpa template, tanpa jalan pintas.",
        "Pekerjaan SEO crawling dan indexing secara konsisten menghasilkan visibilitas tinggi di hasil pencarian lokal. Dengan kendali penuh atas domain, konfigurasi server, dan analytics engine, bengkel kini memiliki infrastruktur digital mandiri yang mampu meranking dan mengonversi tanpa biaya pihak ketiga yang berkelanjutan."
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
      id: "bsi",
      title: "REVAMP WEBSITE KORPORAT DENGAN SKOR LIGHTHOUSE SEMPURNA & KEAMANAN VAPT",
      industry: "ENTERPRISE · IT CONSULTING · OTOMOTIF",
      subtitle: "Revamp full-stack bsi.co.id — meraih skor 100/100 Lighthouse dan meremediasi kerentanan VAPT kritis.",
      content: [
        "PT Berlian Sistem Informasi membutuhkan website korporat yang mencerminkan posisi enterprise mereka — namun situs yang ada underperform dalam hal kecepatan, keamanan, dan SEO. Kami membangun ulang seluruh platform menggunakan Next.js dan Docker, dengan custom middleware yang menangani setiap lapisan keamanan.",
        "Revamp ini meraih skor sempurna 100/100 di Google Lighthouse untuk kategori SEO dan Best Practices. Kerentanan kritis hasil audit VAPT (XSS, XSRF, HSTS) sepenuhnya diremediasi menggunakan Content Security Policy (CSP) nonces. Infrastruktur baru bersifat containerized, teroptimasi untuk crawler, dan telah dikeraskan untuk produksi."
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
