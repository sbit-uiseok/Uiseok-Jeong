import React from 'react';
import { TimelineItem, Language } from '../types';
import { Calendar, CheckCircle2 } from 'lucide-react';

interface TimelineSectionProps {
  timeline: TimelineItem[];
  lang: Language;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  timeline,
  lang,
}) => {
  return (
    <section id="timeline" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-6">
        {lang === 'en' ? 'Timeline' : '주요 이력 (Timeline)'}
      </h2>

      <div className="relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2 sm:before:left-2.5 before:top-2 before:bottom-2 before:w-[1px] before:bg-neutral-800">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div
              className={`absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                item.highlight
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-400'
                  : 'bg-[#09090b] border-neutral-700 group-hover:border-neutral-500'
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full ${
                  item.highlight ? 'bg-emerald-400' : 'bg-neutral-500'
                }`}
              />
            </div>

            {/* Year */}
            <div className="text-[11px] font-mono font-semibold text-emerald-400/90 mb-0.5">
              {item.year}
            </div>

            {/* Event Name */}
            <div className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
              {item.event}
            </div>

            {/* Subtext */}
            {item.subtext && (
              <div className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed mt-0.5">
                {item.subtext}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
