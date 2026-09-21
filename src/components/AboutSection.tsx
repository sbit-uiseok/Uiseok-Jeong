import React from 'react';
import { MetricItem, Language } from '../types';
import { Quote, Sparkles, Award, Code2, GitBranch, Cpu } from 'lucide-react';

interface AboutSectionProps {
  quote: string;
  about: string;
  metrics: MetricItem[];
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  quote,
  about,
  metrics,
  lang,
}) => {
  return (
    <section id="about" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-4">
        {lang === 'en' ? 'About me' : '소개 (About me)'}
      </h2>

      {/* Featured Quote with subtle accent */}
      <div className="relative p-4 sm:p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 mb-6">
        <div className="flex gap-3">
          <Quote className="w-5 h-5 text-emerald-400/70 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
            "{quote}"
          </p>
        </div>
      </div>

      {/* Bio Body text */}
      <div className="space-y-3.5 text-xs sm:text-sm text-neutral-400 leading-relaxed whitespace-pre-line mb-8">
        {about}
      </div>

      {/* At a Glance Metrics Grid */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono">
            {lang === 'en' ? 'At a Glance' : '주요 핵심 지표 (At a Glance)'}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-xl bg-neutral-900/50 border border-neutral-800/70 hover:border-neutral-700/80 transition-all duration-200"
            >
              <div className="text-[11px] font-medium text-neutral-500 mb-1">
                {metric.label}
              </div>
              <div className="text-lg sm:text-xl font-bold text-neutral-100 tracking-tight font-mono">
                {metric.value}
              </div>
              {metric.subtext && (
                <div className="text-[10px] text-neutral-400 mt-1 line-clamp-2">
                  {metric.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
