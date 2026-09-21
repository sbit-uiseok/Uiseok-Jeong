import React from 'react';
import { EducationItem, Language } from '../types';
import { MapPin, Award, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  education: EducationItem[];
  lang: Language;
}

export const EducationSection: React.FC<EducationSectionProps> = ({
  education,
  lang,
}) => {
  return (
    <section id="education" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-6">
        {lang === 'en' ? 'Education' : '학력 (Education)'}
      </h2>

      <div className="space-y-8">
        {education.map((item) => (
          <div key={item.id} className="relative group">
            {/* Top location & date header matching the reference image layout */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-neutral-500 font-mono mb-1.5">
              <div className="flex items-center gap-1.5 text-neutral-400">
                <MapPin className="w-3 h-3 text-neutral-500" />
                <span>@{item.location}</span>
              </div>
              <div className="text-[11px] text-neutral-500">{item.period}</div>
            </div>

            {/* Degree & Institution */}
            <div className="mb-2">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-neutral-100 tracking-tight">
                  {item.degree}
                </h3>
                {item.gpa && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    GPA {item.gpa}
                  </span>
                )}
              </div>
              <p className="text-xs font-medium text-neutral-400 mt-0.5">
                {item.institution}
              </p>
            </div>

            {/* Honors / Scholarship */}
            {item.honors && (
              <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-medium my-2">
                <Award className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{item.honors}</span>
              </div>
            )}

            {/* Description */}
            {item.description && (
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mt-1">
                {item.description}
              </p>
            )}

            {/* Coursework */}
            {item.coursework && (
              <div className="mt-3 pt-2">
                <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-1.5">
                  {lang === 'en' ? 'Core Coursework' : '핵심 이수 교과목'}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
