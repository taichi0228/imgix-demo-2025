import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the language type
type Language = 'en' | 'ja';

// Translations interface
interface Translations {
  [key: string]: {
    en: string;
    ja: string;
  };
}

// Context interface
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: (key: string) => key,
});

// Translations dictionary
const translations: Translations = {
  'home': { en: 'Home', ja: 'ホーム' },
  'docs': { en: 'Docs', ja: 'ドキュメント' },
  'github': { en: 'GitHub', ja: 'GitHub' },
  'products': { en: 'Products', ja: '商品' },
  'search': { en: 'Search', ja: '検索' },
  'account': { en: 'Account', ja: 'アカウント' },
  'cart': { en: 'Cart', ja: 'カート' },
  'imgix_demo': { en: 'Imgix Demo', ja: 'Imgix デモ' },
  'hero_title': { 
    en: 'New image expressions with Generative Fill AI', 
    ja: 'Generative Fill AIで新しい画像表現を' 
  },
  'demo_desc1': { 
    en: 'Powerful image optimization technology from Imgix', 
    ja: 'Imgix のパワフルな画像最適化技術により' 
  },
  'demo_desc2': { 
    en: 'will dramatically change your visual content.', 
    ja: 'あなたのビジュアルコンテンツが劇的に変わります。' 
  },
  'demo_desc3': { 
    en: 'In this demo, you can see how easy it is to achieve automatic image optimization and attractive effects.', 
    ja: 'このデモでは、画像の自動最適化と魅力的なエフェクトがどれほど手軽に実現できるかをご覧いただけます。' 
  },
  'links': { en: 'Links', ja: 'リンク' },
  'company': { en: 'Company', ja: '会社情報' },
  'who_we_are': { en: 'Who we are', ja: '私たちについて' },
  'press': { en: 'Press', ja: 'プレス' },
  'contact': { en: 'Contact', ja: 'お問い合わせ' },
  'get_in_touch': { en: 'Get in touch', ja: 'お問い合わせ' },
  'copyright': { en: '© 2023 Imgix, Inc. All rights reserved.', ja: '© 2023 Imgix, Inc. All rights reserved.' },
  'edit_parameters': { en: 'Edit Parameters', ja: 'パラメータ編集' },
  'close': { en: 'Close', ja: '閉じる' },
  'image_parameters': { en: 'Image Parameters', ja: '画像パラメータ' },
  'instructions': { en: 'Instructions:', ja: '使い方:' },
  'editor_intro': { 
    en: 'Edit the parameters below to see real-time changes to the images. Uncomment lines by removing // to enable those parameters.',
    ja: '下記のパラメータを編集すると、画像にリアルタイムで変更が反映されます。// を削除してパラメータを有効化できます。'
  },
  'uncomment_line': { 
    en: 'Uncomment a line by removing the // at the beginning', 
    ja: '行頭の // を削除してコメント解除' 
  },
  'comment_line': { 
    en: 'Comment out a line by adding // at the beginning', 
    ja: '行頭に // を追加してコメントアウト' 
  },
  'only_uncommented': { 
    en: 'Only uncommented parameters will be applied to images', 
    ja: 'コメントされていないパラメータのみが画像に適用されます' 
  },
  'changes_apply': { 
    en: 'Changes apply instantly to all product images', 
    ja: '変更はすべての商品画像に即座に適用されます' 
  },
  'language_toggle': { en: 'Japanese', ja: 'English' },
  'product_parameters': { en: 'Product Parameters', ja: '商品パラメータ' },
  'hero_parameters': { en: 'Hero Image Parameters', ja: 'ヒーロー画像パラメータ' },
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Initialize with user's browser language if possible, otherwise default to English
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return browserLang === 'ja' ? 'ja' : 'en';
  };

  const [language, setLanguage] = useState<Language>(getBrowserLanguage());

  // Update page title when language changes
  useEffect(() => {
    document.title = language === 'en' ? 'Imgix Demo' : 'imgix デモ';
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
    console.log('Language toggled to:', language === 'en' ? 'ja' : 'en');
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;