import React, { useState } from 'react';
import { ProjectDetail, Language } from '../types';
import { ProjectModal } from './ProjectModal';
import {
  ArrowUpRight,
  Shield,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  BrainCircuit,
  Lock,
  ExternalLink,
  ChevronRight,
  Eye,
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectDetail[];
  supportingProjects: Array<{
    id: string;
    title: string;
    category: string;
    period: string;
    description: string;
    tags: string[];
  }>;
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  supportingProjects,
  lang,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const primaryProject = projects[0];

  const handleOpenPrimary = () => {
    setSelectedProject(primaryProject);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-8 sm:py-10 border-b border-neutral-800/60">
      {/* Section Header matching the reference image */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight">
          {lang === 'en' ? 'Some of my projects' : '프로젝트 (Projects)'}
        </h2>
        <button
          onClick={handleOpenPrimary}
          className="flex items-center gap-1 text-xs font-medium text-neutral-400 hover:text-white transition-colors group"
        >
          <span>{lang === 'en' ? 'View all specs' : '상세 규격 전체보기'}</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Flagship Project Showcase Card */}
      {primaryProject && (
        <div
          onClick={handleOpenPrimary}
          className="group relative cursor-pointer mb-5 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#121216] to-[#0c0c0e] border border-neutral-800 hover:border-neutral-700/80 transition-all duration-300 shadow-xl overflow-hidden flagship-card"
        >
          {/* Subtle circuit backdrop */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Top meta */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {lang === 'en' ? 'Flagship Project' : '대표 프로젝트'}
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                {primaryProject.period}
              </span>
            </div>
            <span className="text-xs text-neutral-400 font-mono flex items-center gap-1 group-hover:text-emerald-400 transition-colors">
              <span>{lang === 'en' ? 'Explore Architecture' : '아키텍처 탐색'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </div>

          {/* Title & summary */}
          <h3 className="text-base sm:text-lg font-bold text-neutral-100 group-hover:text-white transition-colors tracking-tight mb-2">
            {primaryProject.title}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2 mb-4">
            {primaryProject.summary}
          </p>

          {/* Mini Interactive Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-3 px-3.5 rounded-xl bg-neutral-950/70 border border-neutral-800/70 mb-4 font-mono flagship-metrics">
            <div>
              <div className="text-[10px] text-neutral-500">Codebase</div>
              <div className="text-xs font-bold text-neutral-200">~7,500 lines</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">Endpoints</div>
              <div className="text-xs font-bold text-neutral-200">25 REST APIs</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">LLM Pipeline</div>
              <div className="text-xs font-bold text-neutral-200">10-Axis Judge</div>
            </div>
            <div>
              <div className="text-[10px] text-neutral-500">QA Iterations</div>
              <div className="text-xs font-bold text-emerald-400">85 Cycles</div>
            </div>
          </div>

          {/* Tag Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {primaryProject.tags.slice(0, 6).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800 tag-badge"
              >
                {tag}
              </span>
            ))}
            {primaryProject.tags.length > 6 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 text-neutral-500">
                +{primaryProject.tags.length - 6} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* 2-Column Grid of Supporting Projects matching the screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {supportingProjects.map((proj) => (
          <div
            key={proj.id}
            onClick={handleOpenPrimary}
            className="group cursor-pointer p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800/80 hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Category & Period */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-1.5">
                <span className="text-emerald-400/80">{proj.category}</span>
                <span>{proj.period}</span>
              </div>

              {/* Title */}
              <h4 className="text-sm font-bold text-neutral-200 group-hover:text-white transition-colors tracking-tight mb-1.5 flex items-center justify-between">
                <span>{proj.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-1" />
              </h4>

              {/* Description */}
              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-3">
                {proj.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 pt-2 border-t border-neutral-800/60">
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-950/60 text-neutral-400 border border-neutral-800/80 tag-badge"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
      />
    </section>
  );
};
