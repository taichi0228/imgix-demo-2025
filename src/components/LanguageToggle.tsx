import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageIcon } from '@heroicons/react/24/outline';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-1.5 p-2 px-3 rounded-md text-gray-100 bg-blue-700 hover:bg-blue-600 transition-colors font-medium"
      aria-label="Toggle language"
    >
      <LanguageIcon className="h-5 w-5" />
      <span>{language === 'en' ? 'Japanese' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;