import { useState, useEffect } from 'react';

export function useLanguage() {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // Read initial language on client mount
    const storedLang = localStorage.getItem('web-agency-lang') || 'en';
    setLang(storedLang);

    const handleLangChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.lang) {
        setLang(customEvent.detail.lang);
      }
    };

    window.addEventListener('languagechange', handleLangChange);
    return () => {
      window.removeEventListener('languagechange', handleLangChange);
    };
  }, []);

  return lang;
}
