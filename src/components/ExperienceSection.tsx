import React from 'react';
import { ExperienceItem, Language } from '../types';
import { MapPin, Calendar, Shield, ChevronRight } from 'lucide-react';

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
  lang,
}) => {
  return (
    <section id="experience" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-6">
        {lang === 'en' ? 'Experience & Security Activities' : '경험 및 보안 활동 (Experience)'}
      </h2>

      <div className="space-y-8">
        {experience.map((item) => (
          <div key={item.id} className="relative group">
            {/* Top location & date header matching the reference image layout */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-500 font-mono mb-1.5">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>@{item.location}</span>
              </div>
              <div className="text-[11px] text-neutral-500">{item.period}</div>
            </div>

            {/* Title & Organization */}
            <div className="mb-1">
              <h3 className="text-sm sm:text-base font-bold text-neutral-100 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs font-medium text-emerald-400/90 font-mono">
                {item.role}
              </p>
            </div>

            {/* Bullets matching the clean bullet list in the reference image */}
            <ul className="mt-3 space-y-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 mt-2 shrink-0 group-hover:bg-emerald-400 transition-colors" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mt-3 pt-2">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
