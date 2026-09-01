import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { AncientTraditionLogo } from './AncientTraditionLogo';
import { getTranslation } from '../services/translations';

interface FooterProps {
  onOpenDisclaimer: () => void;
  setActiveTab?: (tab: string) => void;
  theme?: 'dark' | 'light';
  language?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenDisclaimer,
  setActiveTab,
  theme = 'dark',
  language = 'en',
}) => {
  const t = (key: string) => getTranslation(key, language);

  return (
    <footer className={`mt-16 border-t text-xs py-12 transition-colors ${
      theme === 'dark' 
        ? 'bg-[#08080A] border-[#2A2A2E] text-[#9E9A90]' 
        : 'bg-[#F9F7F1]/80 backdrop-blur-md border-[#E5E1D8] text-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b ${theme === 'dark' ? 'border-[#2A2A2E]' : 'border-[#E5E1D8]'}`}>
          <div className="flex items-center space-x-3.5 text-center md:text-left">
            <AncientTraditionLogo size="md" isLight={theme === 'light'} />
            <div>
              <div className={`font-bold text-sm tracking-wide flex items-center ${theme === 'dark' ? 'text-[#F0ECE1]' : 'text-gray-900'}`}>
                Jyotish<span className="text-[#C9A050] font-sans ml-[2px] text-base mt-[-2px]">वेद</span><span className="ml-2">• Global Astrological Platform</span>
              </div>
              <div className={`text-[11px] ${theme === 'dark' ? 'text-[#9E9A90]' : 'text-gray-500'}`}>
                {t('brand.tagline')}
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap justify-center gap-5 text-xs ${theme === 'dark' ? 'text-[#9E9A90]' : 'text-gray-600'}`}>
            {setActiveTab && (
              <>
                <button onClick={() => setActiveTab('daily')} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:text-[#C9A050]' : 'hover:text-[#8C6B28]'}`}>
                  {t('tab.daily')}
                </button>
                <button onClick={() => setActiveTab('horoscope')} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:text-[#C9A050]' : 'hover:text-[#8C6B28]'}`}>
                  {t('tab.horoscope')}
                </button>
                <button onClick={() => setActiveTab('numerology')} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:text-[#C9A050]' : 'hover:text-[#8C6B28]'}`}>
                  {t('tab.numerology')}
                </button>
                <button onClick={() => setActiveTab('counsellor')} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:text-[#C9A050]' : 'hover:text-[#8C6B28]'}`}>
                  {t('tab.counsellor')}
                </button>
                <button onClick={() => setActiveTab('roadmap')} className={`transition cursor-pointer ${theme === 'dark' ? 'hover:text-[#C9A050]' : 'hover:text-[#8C6B28]'}`}>
                  {t('tab.roadmap')}
                </button>
              </>
            )}
            <button onClick={onOpenDisclaimer} className={`transition cursor-pointer flex items-center space-x-1.5 font-semibold ${theme === 'dark' ? 'text-[#C9A050] hover:text-[#D4AF37]' : 'text-[#8C6B28] hover:text-[#C9A050]'}`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('header.disclaimer')}</span>
            </button>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-center md:text-left ${theme === 'dark' ? 'text-[#9E9A90]' : 'text-gray-500'}`}>
          <p className={`italic ${theme === 'dark' ? 'text-[#C9A050]/90' : 'text-[#8C6B28]'}`}>
            "The cosmos is within us. We are made of star-stuff. We are a way for the cosmos to know itself." — Timeless Celestial Wisdom
          </p>
          <p>© {new Date().getFullYear()} JyotishVeda. Grounded in Ancient Ephemeris & Precision Planetary Calculations.</p>
        </div>
      </div>
    </footer>
  );
};
