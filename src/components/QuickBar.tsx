import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  User,
  Sparkles,
  Layers,
  Briefcase,
  GraduationCap,
  Award,
  Cpu,
  BookOpen,
  Milestone,
  Send,
  Compass,
  X,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

interface QuickBarProps {
  lang: Language;
}

interface NavItem {
  id: string;
  labelEn: string;
  labelKo: string;
  subEn: string;
  subKo: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'profile',
    labelEn: 'Profile',
    labelKo: '프로필',
    subEn: 'Intro & Contact',
    subKo: '소개 및 연락처',
    icon: User,
  },
  {
    id: 'about',
    labelEn: 'About',
    labelKo: '자기소개',
    subEn: 'Philosophy & Metrics',
    subKo: '가치관 및 지표',
    icon: Sparkles,
  },
  {
    id: 'projects',
    labelEn: 'Projects',
    labelKo: '프로젝트',
    subEn: 'Flagship & CTF Labs',
    subKo: '대표 AI & 보안 랩',
    icon: Layers,
  },
  {
    id: 'experience',
    labelEn: 'Experience',
    labelKo: '활동 / 경력',
    subEn: 'S-BIT & Security Crew',
    subKo: '동아리 및 보안 활동',
    icon: Briefcase,
  },
  {
    id: 'education',
    labelEn: 'Education',
    labelKo: '학력 / 장학',
    subEn: 'BUFS (GPA 4.48)',
    subKo: '부산외대 (4.48)',
    icon: GraduationCap,
  },
  {
    id: 'certifications',
    labelEn: 'Honors',
    labelKo: '자격 / 수상',
    subEn: 'Certificates & ROKAF',
    subKo: '장학 및 자격',
    icon: Award,
  },
  {
    id: 'stack',
    labelEn: 'Stack',
    labelKo: '기술 스택',
    subEn: 'Python, C, IDA, Linux',
    subKo: '핵심 도구 및 언어',
    icon: Cpu,
  },
  {
    id: 'articles',
    labelEn: 'Articles',
    labelKo: '기술 아티클',
    subEn: '3 Engineering Notes',
    subKo: '아키텍처 분석 노트',
    icon: BookOpen,
  },
  {
    id: 'timeline',
    labelEn: 'Timeline',
    labelKo: '주요 연혁',
    subEn: 'Milestones 2025–2026',
    subKo: '성장 타임라인',
    icon: Milestone,
  },
  {
    id: 'contact',
    labelEn: 'Contact',
    labelKo: '연락하기',
    subEn: 'Live Busan Clock & Form',
    subKo: '부산 시각 및 문의',
    icon: Send,
  },
];

export const QuickBar: React.FC<QuickBarProps> = ({ lang }) => {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* 1. DESKTOP / LARGE SCREEN QUICK BAR (Fixed on the Left side) */}
      <nav
        aria-label="Quick Section Navigation"
        className={`hidden lg:flex fixed z-30 transition-all duration-300 ease-out ${
          isExpanded
            ? 'left-3 xl:left-[max(1rem,calc(50%-530px))]'
            : 'left-3 xl:left-[max(1.5rem,calc(50%-445px))]'
        } top-1/2 -translate-y-1/2`}
      >
        <div
          className={`relative bg-[#0d0d12]/90 backdrop-blur-xl border border-neutral-800/80 rounded-2xl shadow-2xl shadow-black/80 p-2 flex flex-col gap-1 transition-all duration-300 ${
            isExpanded ? 'w-48' : 'w-12'
          }`}
        >
          {/* Header row with collapse/expand toggle */}
          <div className="flex items-center justify-between px-1 py-1 mb-1 border-b border-neutral-800/60">
            {isExpanded ? (
              <div className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-mono font-semibold text-neutral-300 uppercase tracking-wider">
                  {lang === 'en' ? 'Quick Nav' : '빠른 탐색'}
                </span>
              </div>
            ) : (
              <div className="w-full flex justify-center">
                <Compass className="w-3.5 h-3.5 text-emerald-400/80" />
              </div>
            )}

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 text-neutral-500 hover:text-neutral-200 rounded hover:bg-neutral-800/60 transition-colors"
              title={isExpanded ? 'Collapse bar' : 'Expand labels'}
            >
              {isExpanded ? (
                <ChevronLeft className="w-3.5 h-3.5" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5" />
              )}
            </button>
          </div>

          {/* Navigation Items List */}
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const label = lang === 'en' ? item.labelEn : item.labelKo;
              const subtitle = lang === 'en' ? item.subEn : item.subKo;

              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center gap-2.5 p-2 rounded-xl text-xs font-medium transition-all duration-200 text-left ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-sm'
                        : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/70 border border-transparent'
                    }`}
                  >
                    <div className="relative shrink-0 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                      {isActive && (
                        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900" />
                      )}
                    </div>

                    {/* Expanded Label */}
                    {isExpanded && (
                      <div className="flex-1 min-w-0 leading-tight">
                        <div className="truncate font-semibold text-[11px]">
                          {label}
                        </div>
                        <div className="truncate text-[9px] text-neutral-500 font-mono">
                          {subtitle}
                        </div>
                      </div>
                    )}
                  </button>

                  {/* Tooltip for Compact (Unexpanded) Mode */}
                  {!isExpanded && (
                    <div className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 rounded-xl bg-neutral-900/95 border border-neutral-700/80 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-150 z-50 whitespace-nowrap">
                      <div className="text-xs font-semibold text-neutral-100">
                        {label}
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400">
                        {subtitle}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* 2. MOBILE / TABLET FLOATING QUICK BAR TRIGGER (<lg screens) */}
      <div className="lg:hidden fixed bottom-5 left-4 z-40">
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#111115]/90 backdrop-blur-md border border-neutral-700/80 text-neutral-200 shadow-2xl hover:border-emerald-500/50 hover:text-white transition-all text-xs font-medium"
          aria-expanded={isMobileOpen}
        >
          <Compass className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-[11px]">
            {lang === 'en' ? 'Quick Nav' : '빠른 이동'}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </button>

        {/* Mobile Quick Nav Popover */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-sm bg-[#0e0e13] border border-neutral-800 rounded-2xl shadow-2xl p-4 flex flex-col max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Header */}
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold font-mono text-neutral-200 uppercase tracking-wider">
                    {lang === 'en' ? 'Section Jump' : '섹션 바로가기'}
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable list of sections */}
              <div className="overflow-y-auto space-y-1.5 py-1">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  const label = lang === 'en' ? item.labelEn : item.labelKo;
                  const subtitle = lang === 'en' ? item.subEn : item.subKo;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                        isActive
                          ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold'
                          : 'bg-neutral-900/40 text-neutral-300 hover:bg-neutral-800 border border-neutral-800/60'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-neutral-400" />
                        <div>
                          <div className="text-xs">{label}</div>
                          <div className="text-[10px] text-neutral-500 font-mono">
                            {subtitle}
                          </div>
                        </div>
                      </div>
                      {isActive && (
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                          {lang === 'en' ? 'Active' : '현재 위치'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
