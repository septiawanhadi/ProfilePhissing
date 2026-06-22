import React, { useState, useEffect } from 'react';
import FuzzyText from './FuzzyText';
import { useLanguage } from '../hooks/useLanguage';

export default function NotFound() {
  const lang = useLanguage();
  const [currentPath, setCurrentPath] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
      setCurrentDate(
        new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).toUpperCase()
      );
    }
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto px-4 py-12 md:py-20 flex-grow bg-[#F9F9F7]">
      <div className="border-4 border-[#111111] p-6 md:p-12 bg-white relative">
        {/* Decorative corner markers or elements to match neo-brutalist theme */}
        <div className="absolute top-0 left-0 bg-[#111111] text-[#F9F9F7] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider font-bold">
          {lang === 'en' ? 'SYSTEM STATUS: 404' : 'STATUS SISTEM: 404'}
        </div>

        {/* Newspaper Sub-header */}
        <div className="border-b-4 border-[#111111] pb-2 mb-8 mt-2 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-neutral-500 font-bold">
          <div>GEMILANG ARCHIVE</div>
          <div className="hidden sm:block">
            {lang === 'en' ? 'ERROR CATALOG // NO. 404' : 'KATALOG ERROR // NO. 404'}
          </div>
          <div>{currentDate || 'MONDAY, JUNE 22, 2026'}</div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Fuzzy Text column */}
          <div className="lg:col-span-6 flex justify-center items-center overflow-hidden border-b-4 lg:border-b-0 lg:border-r-4 border-[#111111] pb-8 lg:pb-0 lg:pr-8">
            <FuzzyText
              baseIntensity={0.15}
              hoverIntensity={0.5}
              enableHover={true}
              clickEffect={true}
              color="#111111"
              fontSize="clamp(6rem, 18vw, 15rem)"
              fontWeight={900}
              fuzzRange={25}
              direction="both"
              className="max-w-full"
            >
              404
            </FuzzyText>
          </div>

          {/* Message and actions column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left lg:pl-4">
            <div className="border-b-2 border-[#111111] pb-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-[#CC0000] font-bold block mb-1">
                {lang === 'en' ? 'PAGE ARCHIVE DISCREPANCY' : 'KETIDAKSESUAIAN ARSIP HALAMAN'}
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight text-[#111111]">
                {lang === 'en' ? 'PAGE NOT FOUND' : 'HALAMAN TIDAK DITEMUKAN'}
              </h2>
            </div>

            <p className="font-body text-sm md:text-base text-neutral-600 mb-6 leading-relaxed text-justify">
              {lang === 'en' ? (
                'The document or publication you are trying to access at this address might have been moved, archived under a different classification, or never existed in our digital archives. We apologize for the inconvenience.'
              ) : (
                'Dokumen atau publikasi yang ingin Anda akses di alamat ini mungkin telah dipindahkan, diarsipkan dengan klasifikasi berbeda, atau tidak pernah ada dalam arsip digital kami. Kami memohon maaf atas ketidaknyamanan ini.'
              )}
            </p>

            <div className="border-l-4 border-[#CC0000] pl-4 py-2 bg-neutral-50 mb-8 font-mono text-xs text-neutral-500 space-y-1">
              <div>
                <span className="font-bold text-neutral-700">
                  {lang === 'en' ? 'REQUESTED URI' : 'URI YANG DIMINTA'}:
                </span>{' '}
                <span className="text-[#CC0000] break-all">{currentPath || '/404'}</span>
              </div>
              <div>
                <span className="font-bold text-neutral-700">
                  {lang === 'en' ? 'STATUS' : 'STATUS'}:
                </span>{' '}
                404 NOT FOUND
              </div>
              <div>
                <span className="font-bold text-neutral-700">
                  {lang === 'en' ? 'SECTOR' : 'SEKTOR'}:
                </span>{' '}
                CLASSIFIED // SYSTEM_LOST
              </div>
            </div>

            <div>
              <a
                href="/"
                className="inline-block border-2 border-[#111111] bg-white text-[#111111] font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-6 py-3 hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-150 relative shadow-[4px_4px_0px_0px_#111111] hover:shadow-none hover:translate-x-1 hover:translate-y-1 cursor-pointer"
              >
                {lang === 'en' ? '← BACK TO HOMEPAGE' : '← KEMBALI KE BERANDA'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
