import React from 'react';
import { CertificationItem, Language } from '../types';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface CertificationsSectionProps {
  certifications: CertificationItem[];
  lang: Language;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  certifications,
  lang,
}) => {
  return (
    <section id="certifications" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-6">
        {lang === 'en' ? 'Certifications & Honors' : '자격 및 수상 (Certifications)'}
      </h2>

      <div className="space-y-4">
        {certifications.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800/70 transition-all duration-200 group"
          >
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors flex items-center gap-2">
                <span>{item.title}</span>
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                {item.issuer} · {item.year}
              </div>
            </div>

            <div className="flex items-center gap-1 text-xs font-mono font-medium text-neutral-400 group-hover:text-emerald-400 transition-colors">
              <span>{item.linkText || (lang === 'en' ? 'Verified' : '확인')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
