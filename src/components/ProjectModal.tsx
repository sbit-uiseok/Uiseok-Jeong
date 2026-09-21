import React from 'react';
import { ProjectDetail, Language } from '../types';
import {
  X,
  Layers,
  ShieldAlert,
  BrainCircuit,
  Lock,
  Coins,
  Eye,
  GitCommit,
  CheckCircle2,
  Table,
  Zap,
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0d0d10] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 bg-neutral-900/40">
          <div>
            <span className="text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            title="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          {/* Summary */}
          <div className="text-neutral-300 leading-relaxed bg-neutral-900/50 p-4 rounded-xl border border-neutral-800/60">
            <p>{project.summary}</p>
          </div>

          {/* Key Numbers Grid */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono mb-2.5 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'en' ? 'Key Numbers & Metrics' : '핵심 정량 지표'}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {Object.entries(project.metrics).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-neutral-950/60 border border-neutral-800/70"
                >
                  <div className="text-[10px] text-neutral-500">{key}</div>
                  <div className="text-xs font-semibold text-neutral-200 font-mono mt-0.5">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Stage Pipeline Diagram */}
          {project.pipelineSteps && (
            <div>
              <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono mb-2.5 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-sky-400" />
                {lang === 'en'
                  ? '3-Stage LLM Evaluation Pipeline'
                  : '3단계 LLM 자체 평가 파이프라인'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {project.pipelineSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-neutral-900/40 border border-neutral-800/60 relative overflow-hidden"
                  >
                    <div className="text-[10px] font-mono text-sky-400 font-semibold mb-1">
                      {step.step}
                    </div>
                    <div className="font-medium text-neutral-200 text-xs mb-1">
                      {step.title}
                    </div>
                    <div className="text-[11px] text-neutral-400 leading-relaxed">
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Word2Vec Training Table */}
          {project.word2vecTable && (
            <div>
              <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono mb-2.5 flex items-center gap-1.5">
                <Table className="w-3.5 h-3.5 text-purple-400" />
                {lang === 'en'
                  ? 'Conversation-Specific Word2Vec Benchmark'
                  : '대화 특화 Word2Vec 학습 벤치마크'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/70 font-mono text-center">
                <div>
                  <div className="text-[10px] text-neutral-500">Sentences</div>
                  <div className="text-xs font-bold text-neutral-200 mt-0.5">
                    {project.word2vecTable.sentences}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500">Tokens</div>
                  <div className="text-xs font-bold text-neutral-200 mt-0.5">
                    {project.word2vecTable.tokens}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500">Vocabulary</div>
                  <div className="text-xs font-bold text-neutral-200 mt-0.5">
                    {project.word2vecTable.vocab}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500">Training Time</div>
                  <div className="text-xs font-bold text-emerald-400 mt-0.5">
                    {project.word2vecTable.time}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Architecture Sections */}
          <div>
            <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              {lang === 'en'
                ? 'Technical Architecture & Implementation Details'
                : '기술 아키텍처 및 구현 상세'}
            </h3>
            <div className="space-y-4">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-neutral-900/30 border border-neutral-800/60 space-y-2"
                >
                  <h4 className="text-xs sm:text-sm font-semibold text-neutral-200">
                    {arch.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed">
                    {arch.description}
                  </p>
                  <ul className="space-y-1 pt-1">
                    {arch.points.map((pt, pIdx) => (
                      <li
                        key={pIdx}
                        className="flex items-start gap-2 text-[11px] sm:text-xs text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 mt-1.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-2 border-t border-neutral-800/70">
            <div className="text-[10px] font-mono text-neutral-500 mb-2">
              TECH STACK & TOOLS
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-neutral-800/60 text-neutral-300 border border-neutral-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-800/80 bg-neutral-900/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-medium text-neutral-900 bg-neutral-200 hover:bg-white rounded-lg transition-colors"
          >
            {lang === 'en' ? 'Close' : '닫기'}
          </button>
        </div>
      </div>
    </div>
  );
};
