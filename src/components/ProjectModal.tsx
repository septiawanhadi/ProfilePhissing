import React, { useEffect, useState } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  subtitle: string;
  content: string[];
}

interface ProjectModalProps {
  isOpen: boolean;
  project: CaseStudy | null;
  lang: string;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, project, lang, onClose }: ProjectModalProps) {
  // Keep local cache of the project so that details don't disappear during exit animation
  const [cachedProject, setCachedProject] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (project) {
      setCachedProject(project);
    }
  }, [project]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, isOpen]);

  // We only return null if we don't even have a cached project to show
  const displayProject = project || cachedProject;
  if (!displayProject) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-900 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-2xl bg-white border-4 border-[#111111] p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] transition-all duration-300 transform ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Content with Left Scrollbar */}
        <div 
          className="mt-4 max-h-[70vh] overflow-y-auto pl-4 custom-scrollbar"
          style={{ direction: 'rtl' }}
        >
          <div style={{ direction: 'ltr' }}>
            {/* Industry/Location Tag */}
            <div className="text-xs font-mono uppercase tracking-widest text-[#CC0000] font-bold mb-2">
              {displayProject.industry}
            </div>

            {/* Title */}
            <h3 
              id="modal-title" 
              className="font-serif text-2xl md:text-3xl font-black uppercase text-[#111111] leading-tight mb-4 tracking-tight pr-8"
            >
              {displayProject.title}
            </h3>

            {/* Subtitle */}
            <p className="font-serif italic text-neutral-700 text-sm md:text-base mb-6 border-l-4 border-[#CC0000] pl-4">
              "{displayProject.subtitle}"
            </p>

            {/* Project Image Area Placeholder */}
            <div className="border-2 border-[#111111] p-2 bg-[#F9F9F7] mb-6 shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
              <div className="h-48 md:h-64 bg-neutral-100 relative flex items-center justify-center overflow-hidden border border-dashed border-[#111111]">
                {/* Uncomment and replace the src below with your actual project image path */}
                {/* 
                <img 
                  src={`/images/projects/${displayProject.id}.png`} 
                  alt={displayProject.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                */}
                <div className="text-center font-mono p-4">
                  <div className="text-xs uppercase tracking-widest text-[#CC0000] font-bold mb-2">
                    [ {lang === 'en' ? 'PROJECT IMAGE PLACEHOLDER' : 'PLACEHOLDER GAMBAR PROYEK'} ]
                  </div>
                  <div className="text-[10px] text-neutral-500 lowercase tracking-tight">
                    {lang === 'en' ? 'Uncomment img tag in ProjectModal.tsx to add custom image' : 'Hapus komentar tag img di ProjectModal.tsx untuk menambah gambar'}
                  </div>
                </div>
              </div>
            </div>

            {/* Description paragraphs */}
            <div className="font-body text-xs md:text-sm text-neutral-600 leading-relaxed text-justify space-y-4">
              {displayProject.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-dashed border-neutral-300 flex justify-end">
          <button 
            onClick={onClose}
            className="border border-[#111111] bg-white px-4 py-2 font-mono text-xs uppercase tracking-widest font-bold hover:bg-[#111111] hover:text-[#F9F9F7] transition-all duration-150 cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'Tutup'}
          </button>
        </div>
      </div>
    </div>
  );
}
