import React, { useState } from 'react';
import { ArticleItem, Language } from '../types';
import { ArrowUpRight, BookOpen, Clock, X, Terminal, Shield, Layers } from 'lucide-react';

interface ArticlesSectionProps {
  articles: ArticleItem[];
  lang: Language;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  articles,
  lang,
}) => {
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);

  const getThumbnailGraphic = (id: string) => {
    switch (id) {
      case 'architecture-redesign':
        return (
          <div className="w-full h-full article-thumb article-thumb-indigo bg-gradient-to-br from-indigo-950/60 to-neutral-950 flex flex-col justify-between p-3 border border-indigo-900/30 font-mono transition-colors">
            <div className="flex items-center gap-1.5 text-[9px] text-indigo-400">
              <Layers className="w-3 h-3" />
              <span>3-TIER ARCH</span>
            </div>
            <div className="text-[10px] text-neutral-400 font-medium">
              Streamlit → FastAPI + SQLite
            </div>
            <div className="text-[9px] text-emerald-400 font-bold">
              25 REST Endpoints
            </div>
          </div>
        );
      case 'safety-first-llm':
        return (
          <div className="w-full h-full article-thumb article-thumb-emerald bg-gradient-to-br from-emerald-950/60 to-neutral-950 flex flex-col justify-between p-3 border border-emerald-900/30 font-mono transition-colors">
            <div className="flex items-center gap-1.5 text-[9px] text-emerald-400">
              <Shield className="w-3 h-3" />
              <span>SAFETY GATE</span>
            </div>
            <div className="text-[10px] text-neutral-400 font-medium">
              10-Axis LLM Evaluator
            </div>
            <div className="text-[9px] text-amber-400 font-bold">
              Human-in-the-Loop
            </div>
          </div>
        );
      case 'windows-ocr-ingestion':
        return (
          <div className="w-full h-full article-thumb article-thumb-cyan bg-gradient-to-br from-cyan-950/60 to-neutral-950 flex flex-col justify-between p-3 border border-cyan-900/30 font-mono transition-colors">
            <div className="flex items-center gap-1.5 text-[9px] text-cyan-400">
              <Terminal className="w-3 h-3" />
              <span>DESKTOP OCR</span>
            </div>
            <div className="text-[10px] text-neutral-400 font-medium">
              Win32 + Pixel RGB
            </div>
            <div className="text-[9px] text-sky-400 font-bold">
              difflib Deduplication
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="articles" className="py-8 sm:py-10 border-b border-neutral-800/60">
      {/* Header matching the reference image */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight">
          {lang === 'en' ? 'Articles & Technical Notes' : '기술 기고 및 분석 노트 (Articles)'}
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          3 Case Studies
        </span>
      </div>

      {/* Articles List matching the reference image */}
      <div className="space-y-4">
        {articles.map((art) => (
          <div
            key={art.id}
            onClick={() => setActiveArticle(art)}
            className="group cursor-pointer p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800/70 hover:border-neutral-700 transition-all duration-200 flex flex-col sm:flex-row gap-4 items-start"
          >
            {/* Left Thumbnail Box matching reference image */}
            <div className="w-full sm:w-36 h-24 rounded-lg overflow-hidden shrink-0 border border-neutral-800">
              {getThumbnailGraphic(art.id)}
            </div>

            {/* Right Content */}
            <div className="flex-1 min-w-0 space-y-1.5">
              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500">
                <span className="text-emerald-400/90">{art.category}</span>
                <span>·</span>
                <span>{art.date}</span>
                <span>·</span>
                <span>{art.readTime}</span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-neutral-100 group-hover:text-white transition-colors tracking-tight line-clamp-2">
                {art.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed line-clamp-2">
                {art.description}
              </p>

              <div className="pt-1 flex items-center gap-1 text-xs font-mono font-medium text-neutral-300 group-hover:text-emerald-400 transition-colors">
                <span>{lang === 'en' ? 'Read article' : '전문 읽기'}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-2xl max-h-[85vh] bg-[#0d0d10] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/80 bg-neutral-900/40">
              <div>
                <span className="text-[11px] font-mono font-medium text-emerald-400 uppercase tracking-wider">
                  {activeArticle.category} · {activeArticle.date}
                </span>
                <h2 className="text-sm sm:text-base font-bold text-neutral-100 tracking-tight line-clamp-1">
                  {activeArticle.title}
                </h2>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
                title="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm leading-relaxed text-neutral-300">
              {activeArticle.content.map((paragraph, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5">
                {activeArticle.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-neutral-800/80 bg-neutral-900/30 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-4 py-1.5 text-xs font-medium text-neutral-900 bg-neutral-200 hover:bg-white rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Done' : '닫기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
