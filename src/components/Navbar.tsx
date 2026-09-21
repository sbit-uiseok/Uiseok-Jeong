import React from 'react';
import { Language, Theme } from '../types';
import { Globe, FileText, Send, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenResume: () => void;
  onScrollToContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  onOpenResume,
  onScrollToContact,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#08080a]/80 border-b border-neutral-800/40 transition-all duration-200">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Left: Minimal status & Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-4 ring-emerald-500/20" />
          <span className="text-xs font-medium text-neutral-300 tracking-wide font-mono">
            {lang === 'en' ? 'UJ · SEC/AI' : '정의석 · 보안/AI'}
          </span>
          <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-neutral-800/80 text-neutral-400 border border-neutral-700/40">
            {lang === 'en' ? 'GPA 4.48' : '학점 4.48'}
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            className="flex items-center justify-center w-8 h-8 text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800/80 border border-neutral-800 rounded-lg transition-colors"
            title={
              theme === 'dark'
                ? lang === 'en'
                  ? 'Switch to Light Mode'
                  : '라이트 모드로 전환'
                : lang === 'en'
                ? 'Switch to Dark Mode'
                : '다크 모드로 전환'
            }
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-indigo-500" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            id="lang-toggle-btn"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900/90 hover:bg-neutral-800/80 border border-neutral-800 rounded-lg transition-colors"
            title={lang === 'en' ? 'Switch to Korean' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-neutral-400" />
            <span className="font-mono">{lang === 'en' ? 'KO' : 'EN'}</span>
          </button>

          {/* Resume button */}
          <button
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/60 rounded-lg transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === 'en' ? 'CV' : '이력서'}</span>
          </button>

          {/* Contact scroll */}
          <button
            id="nav-contact-btn"
            onClick={onScrollToContact}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-900 bg-neutral-100 hover:bg-white rounded-lg transition-colors shadow-sm"
          >
            <Send className="w-3 h-3 text-neutral-900" />
            <span>{lang === 'en' ? 'Contact' : '연락하기'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
