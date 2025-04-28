import { useState } from 'react';
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import ImageParamsEditor from './ImageParamsEditor';
import HeroParamsEditor from './HeroParamsEditor';
import { useLanguage } from '../context/LanguageContext';

interface ImgixParams {
  [key: string]: any;
}

interface ParameterDrawerProps {
  defaultParams: any;
  originalCode: string;
  onParamsChange: (params: any) => void;
  heroParams?: any;
  heroOriginalCode?: string;
  onHeroParamsChange?: (params: any) => void;
}

function ParameterDrawer({ 
  defaultParams, 
  originalCode, 
  onParamsChange,
  heroParams,
  heroOriginalCode,
  onHeroParamsChange
}: ParameterDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  // No need to prevent scrolling - we've removed that behavior

  return (
    <>
      {/* Fixed vertical toggle button */}
      <button
        onClick={toggleDrawer}
        className={`fixed right-0 top-24 z-50 flex flex-col items-center justify-center bg-blue-600 text-white py-4 px-2 rounded-l-lg shadow-lg hover:bg-blue-700 transition-all ${
          isOpen ? 'opacity-80 hover:opacity-100' : ''
        }`}
        style={{ 
          writingMode: 'vertical-lr',
          textOrientation: 'mixed',
          height: isOpen ? '80px' : '180px'
        }}
        aria-label={isOpen ? t('close') : t('edit_parameters')}
      >
        {isOpen ? (
          <>
            <XMarkIcon className="h-6 w-6 mb-1" />
          </>
        ) : (
          <>
            <span className="font-medium tracking-wider">{t('edit_parameters')}</span>
          </>
        )}
      </button>

      {/* Drawer panel - no overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[500px] bg-gray-800 shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-2">{t('image_parameters')}</h2>
          <p className="text-gray-300 text-sm mb-6">
            {t('editor_intro')}
          </p>
          
          {heroParams && heroOriginalCode && onHeroParamsChange && (
            <HeroParamsEditor
              defaultParams={heroParams}
              originalCode={heroOriginalCode}
              onParamsChange={onHeroParamsChange}
            />
          )}
          
          <ImageParamsEditor
            defaultParams={defaultParams}
            originalCode={originalCode}
            onParamsChange={onParamsChange}
          />
        </div>
      </div>
    </>
  );
}

export default ParameterDrawer;