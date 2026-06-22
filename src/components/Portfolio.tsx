import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import ProjectModal from './ProjectModal';

// Import local image assets for septi projects
import safetanaImg from '../assets/septi/safetana.png';
import sidiktiImg from '../assets/septi/sidik-ti.png';
import slbraudhatulzannahImg from '../assets/septi/slbraudhatulzannah.png';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  subtitle: string;
  content: string[];
  link?: string;
  image?: string;
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
      ],
      link: "https://manyarmotor.com",
      image: "/assets/didra/manyarmotor.jpg"
    },
    {
      id: "slbraudhatulzannah",
      title: "SLB RAUDHATUL ZANNAH SPECIAL SCHOOL PROFILE PORTAL",
      industry: "EDUCATION · ACCESSIBILITY",
      subtitle: "The official web profile for SLB Raudhatul Zannah school, designed to present their programs and facilities.",
      content: [
        "We designed and built the official school profile website for SLB Raudhatul Zannah. The site serves as a complete information center for parents, students, and the community to learn about the special needs education curriculum, programs, facilities, and upcoming school activities.",
        "The profile portal is optimized for absolute ease of use, ensuring that parents can access important school announcements, academic schedules, and contact details from any device quickly and reliably."
      ],
      link: "https://slbraudhatulzannah.biz.id/",
      image: slbraudhatulzannahImg.src
    },
    {
      id: "safetana",
      title: "SAFETANA — AI-BASED DISASTER MITIGATION & HEALTH CARE PLATFORM",
      industry: "HEALTHCARE · DISASTER MITIGATION · AI",
      subtitle: "An AI-powered web application providing disaster mitigation guidance and real-time health services.",
      content: [
        "Safetana is an innovative, web-based platform that combines AI logic with disaster mitigation and healthcare services. The application analyzes environmental hazards and provides users with real-time health recommendations and safety steps in the event of emergencies or natural disasters.",
        "By integrating AI risk assessment models with emergency medical routing, Safetana helps users prepare for critical events and access nearest healthcare options instantly, enhancing community resilience."
      ],
      link: "https://safetana.vercel.app/",
      image: safetanaImg.src
    },
    {
      id: "bsi",
      title: "CORPORATE WEBSITE REVAMP WITH PERFECT LIGHTHOUSE SCORES & VAPT SECURITY",
      industry: "ENTERPRISE · IT CONSULTING · AUTOMOTIVE",
      subtitle: "Full-stack revamp of bsi.co.id — achieving 100/100 Lighthouse and remediating critical VAPT vulnerabilities.",
      content: [
        "PT Berlian Sistem Informasi needed their corporate website to reflect their enterprise positioning — but the existing site was underperforming on speed, security, and SEO. We rebuilt the entire platform using Next.js and Docker, with custom middleware handling every security layer.",
        "The revamp achieved a perfect 100/100 on Google Lighthouse for SEO and Best Practices. Critical VAPT-identified vulnerabilities (XSS, XSRF, HSTS) were fully remediated using Content Security Policy (CSP) nonces. The new infrastructure is containerized, crawler-optimized, and production-hardened."
      ],
      link: "https://bsi.co.id",
      image: "/assets/didra/bsi.jpg"
    },
    {
      id: "sidikti",
      title: "SIDIK-TI — INTEGRATED IT DEVICE MANAGEMENT & MAINTENANCE SERVICE",
      industry: "IT SERVICES · INFRASTRUCTURE",
      subtitle: "An integrated platform to manage, monitor, and maintain corporate IT assets and hardware devices.",
      content: [
        "Sidik-TI is an all-in-one web service designed to manage and maintain IT equipment and devices within organizations. It provides a central workspace to schedule preventive maintenance, track hardware health status, register assets, and handle tech support requests.",
        "By implementing structured device lifecycles and automated alerts for maintenance periods, Sidik-TI reduces equipment downtime, ensures software compliance, and helps IT support teams run their operations efficiently."
      ],
      link: "https://sidik-ti.biz.id/",
      image: sidiktiImg.src
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
      ],
      link: "https://manyarmotor.com",
      image: "/assets/didra/manyarmotor.jpg"
    },
    {
      id: "slbraudhatulzannah",
      title: "PORTAL PROFIL SEKOLAH LUAR BIASA SLB RAUDHATUL ZANNAH",
      industry: "PENDIDIKAN · AKSESIBILITAS",
      subtitle: "Situs profil sekolah resmi untuk SLB Raudhatul Zannah, dirancang untuk menyajikan program dan fasilitas.",
      content: [
        "Kami merancang dan membangun situs web profil sekolah resmi untuk SLB Raudhatul Zannah. Situs ini berfungsi sebagai pusat informasi lengkap bagi orang tua, siswa, dan masyarakat untuk mengenal kurikulum pendidikan luar biasa, program sekolah, fasilitas pendukung, serta berbagai kegiatan sekolah.",
        "Portal profil ini dioptimalkan agar sangat mudah digunakan, memastikan bahwa orang tua dapat mengakses pengumuman penting sekolah, jadwal akademik, dan detail kontak dari perangkat apa pun secara cepat dan andal."
      ],
      link: "https://slbraudhatulzannah.biz.id/",
      image: slbraudhatulzannahImg.src
    },
    {
      id: "safetana",
      title: "SAFETANA — PLATFORM MITIGASI BENCANA & LAYANAN KESEHATAN BERBASIS AI",
      industry: "KESEHATAN · MITIGASI BENCANA · AI",
      subtitle: "Aplikasi berbasis web dengan dukungan AI untuk menyediakan panduan mitigasi bencana dan layanan kesehatan real-time.",
      content: [
        "Safetana adalah platform inovatif berbasis web yang menggabungkan logika AI dengan layanan mitigasi bencana dan kesehatan. Aplikasi ini menganalisis bahaya lingkungan serta memberikan rekomendasi kesehatan real-time dan langkah-langkah keselamatan kepada pengguna saat terjadi keadaan darurat atau bencana alam.",
        "Dengan mengintegrasikan model penilaian risiko AI dengan rute medis darurat, Safetana membantu masyarakat bersiap menghadapi situasi kritis dan mengakses opsi layanan kesehatan terdekat secara instan."
      ],
      link: "https://safetana.vercel.app/",
      image: safetanaImg.src
    },
    {
      id: "bsi",
      title: "REVAMP WEBSITE KORPORAT DENGAN SKOR LIGHTHOUSE SEMPURNA & KEAMANAN VAPT",
      industry: "ENTERPRISE · IT CONSULTING · OTOMOTIF",
      subtitle: "Revamp full-stack bsi.co.id — meraih skor 100/100 Lighthouse dan meremediasi kerentanan VAPT kritis.",
      content: [
        "PT Berlian Sistem Informasi membutuhkan website korporat yang mencerminkan posisi enterprise mereka — namun situs yang ada underperform dalam hal kecepatan, keamanan, dan SEO. Kami membangun ulang seluruh platform menggunakan Next.js dan Docker, dengan custom middleware yang menangani setiap lapisan keamanan.",
        "Revamp ini meraih skor sempurna 100/100 di Google Lighthouse untuk kategori SEO dan Best Practices. Kerentanan kritis hasil audit VAPT (XSS, XSRF, HSTS) sepenuhnya diremediasi menggunakan Content Security Policy (CSP) nonces. Infrastruktur baru bersifat containerized, teroptimasi untuk crawler, dan telah dikeraskan untuk produksi."
      ],
      link: "https://bsi.co.id",
      image: "/assets/didra/bsi.jpg"
    },
    {
      id: "sidikti",
      title: "SIDIK-TI — LAYANAN TERPADU PENGELOLAAN & PEMELIHARAAN PERANGKAT TI",
      industry: "LAYANAN TI · INFRASTRUKTUR",
      subtitle: "Platform terpadu untuk mengelola, memantau, dan memelihara aset TI serta perangkat keras perusahaan.",
      content: [
        "Sidik-TI adalah layanan web all-in-one yang dirancang untuk mengelola dan memelihara peralatan serta perangkat TI di dalam organisasi. Layanan ini menyediakan ruang kerja terpusat untuk menjadwalkan pemeliharaan preventif, melacak status kesehatan perangkat keras, mencatat aset, dan menangani permintaan dukungan teknis.",
        "Dengan menerapkan siklus hidup perangkat yang terstruktur dan peringatan otomatis untuk periode pemeliharaan, Sidik-TI mengurangi waktu henti (downtime) peralatan, memastikan kepatuhan perangkat lunak, dan membantu tim dukungan TI menjalankan operasi mereka secara efisien."
      ],
      link: "https://sidik-ti.biz.id/",
      image: sidiktiImg.src
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
    <section id="work" className="max-w-screen-xl mx-auto px-4 py-16 border-b-2 border-[var(--color-fg)] bg-[var(--color-bg)]">
      {/* Section Header */}
      <div className="flex justify-between items-end mb-12 border-b-2 border-[var(--color-fg)] pb-4">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold mb-2">
            {lang === 'en' ? 'Case Studies // Real Results for Real Businesses' : 'Studi Kasus // Hasil Nyata untuk Bisnis Nyata'}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-black uppercase text-[var(--color-fg)] tracking-tight">
            {lang === 'en' ? 'SELECTED WORK' : 'KARYA TERPILIH'}
          </h2>
        </div>

        {/* Carousel Controls */}
        <div className="flex gap-2 mb-1">
          <button 
            onClick={() => scroll('left')}
            className="border border-[var(--color-fg)] bg-[var(--color-bg-card)] w-8 h-8 flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] transition-all duration-150 active:translate-y-0.5"
            aria-label="Previous Project"
          >
            ←
          </button>
          <button 
            onClick={() => scroll('right')}
            className="border border-[var(--color-fg)] bg-[var(--color-bg-card)] w-8 h-8 flex items-center justify-center font-bold text-sm cursor-pointer hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] transition-all duration-150 active:translate-y-0.5"
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
            className="w-[280px] sm:w-[340px] md:w-[380px] flex-shrink-0 snap-start border-2 border-[var(--color-fg)] bg-[var(--color-bg-card)] p-6 shadow-[4px_4px_0px_0px_var(--color-fg)] hover:shadow-[6px_6px_0px_0px_var(--color-fg)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex flex-col justify-between h-[280px] group"
          >
            <div>
              <div className="text-[9px] font-mono uppercase tracking-widest text-[var(--color-accent)] font-bold mb-2">
                {item.industry}
              </div>
              <h4 className="font-serif text-lg font-bold uppercase text-[var(--color-fg)] leading-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
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
              <span className="font-mono text-[10px] font-bold text-[var(--color-accent)] tracking-widest uppercase group-hover:underline">
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
