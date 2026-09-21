import React from 'react';
import { Language } from '../types';
import { Shield, ArrowUp, Github } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-10 text-xs text-neutral-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Shield className="w-3.5 h-3.5 text-emerald-400" />
        <span>
          © {new Date().getFullYear()} Uiseok Jeong (정의석). All rights reserved.
        </span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-[11px] text-neutral-600">
          Vercel & GitHub Ready
        </span>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-neutral-300 transition-colors"
          title="Back to top"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
