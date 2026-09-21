import React from 'react';
import { StackCard, Language } from '../types';
import {
  Terminal,
  Code,
  ShieldAlert,
  Network,
  Server,
  BrainCircuit,
  Cpu,
  Laptop,
  ArrowUpRight,
} from 'lucide-react';

interface StackSectionProps {
  stack: StackCard[];
  lang: Language;
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Terminal':
      return <Terminal className="w-4 h-4 text-emerald-400" />;
    case 'Code':
      return <Code className="w-4 h-4 text-cyan-400" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-4 h-4 text-red-400" />;
    case 'Network':
      return <Network className="w-4 h-4 text-blue-400" />;
    case 'Server':
      return <Server className="w-4 h-4 text-indigo-400" />;
    case 'BrainCircuit':
      return <BrainCircuit className="w-4 h-4 text-purple-400" />;
    case 'Cpu':
      return <Cpu className="w-4 h-4 text-amber-400" />;
    case 'Laptop':
      return <Laptop className="w-4 h-4 text-teal-400" />;
    default:
      return <Terminal className="w-4 h-4 text-neutral-400" />;
  }
};

export const StackSection: React.FC<StackSectionProps> = ({ stack, lang }) => {
  return (
    <section id="stack" className="py-8 sm:py-10 border-b border-neutral-800/60">
      <h2 className="text-base sm:text-lg font-bold text-neutral-100 tracking-tight mb-5">
        {lang === 'en' ? 'Stack & Engineering Tools' : '기술 스택 및 도구 (Stack)'}
      </h2>

      {/* Grid of cards matching the reference image's Stack section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {stack.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 sm:p-4 rounded-xl bg-neutral-900/40 hover:bg-neutral-900/70 border border-neutral-800/70 hover:border-neutral-700 transition-all duration-200 group"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {getIcon(item.iconName)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors truncate">
                      {item.name}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>

                <div className="text-[11px] font-mono text-neutral-500 mb-1">
                  {item.category}
                </div>

                <p className="text-[11px] text-neutral-400 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
