'use client';

import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();

  const toggleLanguage = () => {
    switchLanguage(language === 'en' ? 'cs' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
    >
      {language.toUpperCase()}
    </button>
  );
};

export default LanguageSwitcher;