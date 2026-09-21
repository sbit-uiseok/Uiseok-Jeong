import React, { useState, useEffect } from 'react';
import { Language, Theme } from '../types';
import {
  User,
  Sparkles,
  FolderGit2,
  Shield,
  GraduationCap,
  Award,
  Cpu,
  FileText,
  Calendar,
  MessageSquare,
  ArrowUp,
  Compass,
  X,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react';

interface QuickNavProps {
  lang: Language;
  theme: Theme;
  onToggleTheme: () => void;
}

interface NavItem {
  id: string;
  labelEn: string;
  labelKo: string;
  icon: React.ReactNode;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    id: 'profile',
    labelEn: 'Profile',
    labelKo: '프로필',
    icon: <User className="w-4 h-4" />,
  },
  {
    id: 'about',
    labelEn: 'About',
    labelKo: '소개',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    id: 'projects',
    labelEn: 'Projects',
    labelKo: '프로젝트',
    icon: <FolderGit2 className="w-4 h-4" />,
    badge: 'Core',
  },
  {
    id: 'experience',
    labelEn: 'Experience',
    labelKo: '보안 활동',
    icon: <Shield className="w-4 h-4" />,
    badge: 'S-BIT',
  },
  {
    id: 'education',
    labelEn: 'Education',
    labelKo: '학력',
    icon: <GraduationCap className="w-4 h-4" />,
  },
  {
    id: 'certifications',
    labelEn: 'Certifications',
    labelKo: '자격/수상',
    icon: <Award className="w-4 h-4" />,
  },
  {
    id: 'stack',
    labelEn: 'Stack',
    labelKo: '기술 스택',
    icon: <Cpu className="w-4 h-4" />,
  },
  {
    id: 'articles',
    labelEn: 'Articles',
    labelKo: '기술 분석',
    icon: <FileText className="w-4 h-4" />,
  },
  {
    id: 'timeline',
    labelEn: 'Timeline',
    labelKo: '주요 이력',
    icon: <Calendar className="w-4 h-4" />,
  },
  {
    id: 'contact',
    labelEn: 'Contact',
    labelKo: '연락처',
    icon: <MessageSquare className="w-4 h-4" />,
  },
];

export const QuickNav: React.FC<QuickNavProps> = ({
  lang,
  theme,
  onToggleTheme,
}) => {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // ScrollSpy to track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
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

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* ======================================================== */}
      {/* 1. DESKTOP LEFT QUICK BAR (Visible on lg, xl, 2xl screens) */}
      {/* ======================================================== */}
      <aside
        aria-label="Quick Navigation"
        className="hidden lg:flex fixed left-3 xl:left-6 2xl:left-[max(1.5rem,calc(50vw-450px))] top-1/2 -translate-y-1/2 z-40 flex-col items-center select-none"
      >
        <div className="relative p-1.5 rounded-2xl bg-[#0c0c0f]/90 backdrop-blur-xl border border-neutral-800/80 shadow-2xl flex flex-col gap-1 items-center group/dock">
          {/* Top mini header indicator */}
          <div
            onClick={scrollToTop}
            className="w-8 h-8 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800/70 flex items-center justify-center cursor-pointer text-emerald-400 transition-colors mb-1"
            title={lang === 'en' ? 'Scroll to Top' : '맨 위로 이동'}
          >
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono font-bold leading-none">UJ</span>
              <span className="w-1 h-1 rounded-full bg-emerald-400 mt-0.5 animate-pulse" />
            </div>
          </div>

          {/* Quick Nav Items List */}
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;
              const label = lang === 'en' ? item.labelEn : item.labelKo;

              return (
                <div
                  key={item.id}
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    id={`quicknav-${item.id}`}
                    onClick={() => scrollTo(item.id)}
                    aria-label={`Jump to ${label}`}
                    className={`relative w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                        : 'text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 border border-transparent'
                    }`}
                  >
                    {item.icon}

                    {/* Active vertical pill indicator */}
                    {isActive && (
                      <span className="absolute -left-1.5 w-1 h-3 rounded-full bg-emerald-400" />
                    )}
                  </button>

                  {/* Floating Tooltip Pill */}
                  {isHovered && (
                    <div className="absolute left-11 px-2.5 py-1 rounded-lg bg-[#141419] border border-neutral-700/80 text-xs font-mono font-medium text-neutral-200 shadow-xl whitespace-nowrap z-50 flex items-center gap-1.5 pointer-events-none animate-in fade-in slide-in-from-left-1 duration-150">
                      <span>{label}</span>
                      {item.badge && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Actions: Theme Toggle & Back-to-Top */}
          <div className="pt-1.5 mt-1 border-t border-neutral-800/80 w-full flex flex-col items-center gap-1">
            <button
              onClick={onToggleTheme}
              className="w-7 h-7 rounded-lg text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/60 flex items-center justify-center transition-colors"
              title={
                theme === 'dark'
                  ? lang === 'en'
                    ? 'Switch to Light Mode'
                    : '라이트 모드'
                  : lang === 'en'
                  ? 'Switch to Dark Mode'
                  : '다크 모드'
              }
            >
              {theme === 'dark' ? (
                <Sun className="w-3.5 h-3.5 text-amber-400" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-indigo-500" />
              )}
            </button>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-800/60 flex items-center justify-center transition-colors"
              title={lang === 'en' ? 'Back to top' : '맨 위로'}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* ======================================================== */}
      {/* 2. MOBILE / TABLET FLOATING QUICK BAR (Screens < lg)    */}
      {/* ======================================================== */}
      <div className="lg:hidden fixed bottom-4 left-4 z-40 select-none">
        {/* Quick Nav Trigger Pill */}
        <button
          onClick={() => setIsMobileOpen((prev) => !prev)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#111115]/95 backdrop-blur-md border border-neutral-700/80 text-xs font-mono font-semibold text-neutral-200 shadow-2xl hover:bg-neutral-800 transition-all active:scale-95"
        >
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>
            {navItems.find((i) => i.id === activeSection)
              ? lang === 'en'
                ? navItems.find((i) => i.id === activeSection)?.labelEn
                : navItems.find((i) => i.id === activeSection)?.labelKo
              : lang === 'en'
              ? 'Menu'
              : '메뉴'}
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-800 text-neutral-400">
            ⚡ Quick
          </span>
        </button>

        {/* Mobile Expanded Menu Drawer / Dropup */}
        {isMobileOpen && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 animate-in fade-in duration-150">
            <div
              className="w-full max-w-sm rounded-2xl bg-[#111116] border border-neutral-800 p-4 shadow-2xl space-y-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-200">
                  <Compass className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'en' ? 'Quick Navigation' : '빠른 섹션 이동'}</span>
                </div>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="p-1 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Grid of Sections */}
              <div className="grid grid-cols-2 gap-1.5 max-h-[60vh] overflow-y-auto pr-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  const label = lang === 'en' ? item.labelEn : item.labelKo;

                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center justify-between p-2 rounded-xl text-xs font-mono text-left transition-colors ${
                        isActive
                          ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                          : 'text-neutral-300 hover:bg-neutral-800/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className={isActive ? 'text-emerald-400' : 'text-neutral-400'}>
                          {item.icon}
                        </span>
                        <span className="truncate">{label}</span>
                      </div>
                      <ChevronRight className="w-3 h-3 text-neutral-500 shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="pt-2 border-t border-neutral-800 flex justify-between items-center text-[11px] font-mono text-neutral-400">
                <div className="flex items-center gap-3">
                  <button
                    onClick={scrollToTop}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <ArrowUp className="w-3 h-3" />
                    <span>{lang === 'en' ? 'Top' : '맨 위로'}</span>
                  </button>
                  <button
                    onClick={onToggleTheme}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-3 h-3 text-amber-400" />
                    ) : (
                      <Moon className="w-3 h-3 text-indigo-500" />
                    )}
                    <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                  </button>
                </div>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-2 py-1 rounded bg-neutral-800 text-neutral-200 hover:text-white"
                >
                  {lang === 'en' ? 'Contact' : '연락하기'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
