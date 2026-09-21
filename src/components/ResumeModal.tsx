import React, { useState } from 'react';
import { Language } from '../types';
import { portfolioContent } from '../data/portfolioData';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Shield,
  Award,
  Globe,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [copied, setCopied] = useState(false);
  const data = portfolioContent[lang];

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `---
name: ${data.profile.name}
title: ${data.profile.title}
tagline: ${data.profile.tagline}
location: ${data.profile.location}
email: ${data.profile.email}
phone: ${data.profile.phone}
github: ${data.profile.github}
GPA: 4.48 (Busan University of Foreign Studies)
---

# ${data.profile.name}
**${data.profile.tagline}**

> ${data.profile.quote}

## About
${data.profile.about}

## Flagship Project: Persona-Based AI Auto-Reply Assistant (~7,500 lines)
- 3-tier decoupled architecture: Streamlit + FastAPI + SQLite (25 REST endpoints, 10 normalized tables)
- 3-stage LLM evaluation pipeline (10 axes, confidence < 0.70 regeneration)
- Human-in-the-loop safety gating (PII / payment requests blocked, 15 rejection tags)
- Windows native OCR non-API desktop ingestion with speech-bubble RGB heuristics & idempotency
- 85 Claude Code pair-programming cycles & QA

## Experience & Activities
- S-BIT Academic Club (Busan University of Foreign Studies) · Cyber Intrusion Analysis & Whitehat Preparation (IDA Pro, Wireshark, wargames)
- ICT Convergence Security Crew (3rd Cohort)

## Education
- Busan University of Foreign Studies: B.S. in Smart Convergence Security (2025–Present) · GPA 4.48 · Oesung Hope Scholarship
- BUFS AI Bootcamp: Applied AI Track (2026)
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[92vh] bg-[#0e0e12] border border-neutral-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800/80 bg-neutral-900/40">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-semibold text-neutral-200 uppercase tracking-wider">
              {lang === 'en' ? 'Curriculum Vitae' : '이력서 / 경력 기술서'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-lg transition-colors"
              title="Copy as Markdown"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">
                    {lang === 'en' ? 'Copied' : '복사됨'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{lang === 'en' ? 'Copy MD' : 'MD 복사'}</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 rounded-lg transition-colors font-semibold"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Print / PDF' : '인쇄 / PDF 저장'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-200 font-sans text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-neutral-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {data.profile.name}
                </h1>
                <p className="text-xs font-mono font-medium text-emerald-400 mt-0.5">
                  {data.profile.title}
                </p>
              </div>

              <div className="text-[11px] font-mono text-neutral-400 space-y-0.5 sm:text-right">
                <div>{data.profile.location}</div>
                <div>{data.profile.email} · {data.profile.phone}</div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 italic mt-3">
              "{data.profile.quote}"
            </p>
          </div>

          {/* Education & Academic Honors */}
          <div>
            <h2 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              {lang === 'en' ? 'Education' : '학력'}
            </h2>
            <div className="space-y-3 pl-2">
              {data.education.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <div className="flex justify-between text-xs font-semibold text-neutral-100">
                    <span>{edu.degree}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-400">
                    {edu.institution} {edu.gpa ? `· GPA: ${edu.gpa}` : ''}
                  </div>
                  {edu.honors && (
                    <div className="text-[11px] text-amber-300 font-medium">
                      🏆 {edu.honors}
                    </div>
                  )}
                  {edu.coursework && (
                    <div className="text-[11px] text-neutral-400">
                      <span className="font-mono text-neutral-500">Coursework: </span>
                      {edu.coursework.join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Core Technical Capabilities */}
          <div>
            <h2 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Core Competencies & Skills' : '핵심 기술 역량'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2 text-xs">
              {data.skillsList.map((cat, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-neutral-900/40 border border-neutral-800/60">
                  <div className="font-semibold text-neutral-200 text-[11px] mb-1">
                    {cat.category}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Key Project Experience' : '주요 프로젝트'}
            </h2>
            <div className="space-y-4 pl-2">
              {data.projects.map((proj) => (
                <div key={proj.id} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-neutral-100">
                    <span>{proj.title}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {proj.period}
                    </span>
                  </div>
                  <div className="text-[11px] text-emerald-400 font-mono">
                    {proj.role} · {proj.category}
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {proj.summary}
                  </p>
                  <ul className="space-y-1 pl-3 text-[11px] text-neutral-400 list-disc">
                    <li>3-Tier Decoupled Architecture: Streamlit UI / FastAPI Backend / SQLite Database (25 REST endpoints, 10 normalized tables).</li>
                    <li>3-Stage LLM Pipeline: Classification → Candidate Generation → 10-Axis Evaluation (confidence &lt; 0.70 regeneration).</li>
                    <li>Human-in-the-Loop Gating: PII, payment, and appointment requests require explicit confirmation (15 rejection tags).</li>
                    <li>Desktop Ingestion Without APIs: Windows OCR, speech-bubble RGB heuristics, and difflib idempotency table.</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold text-neutral-300 uppercase tracking-wider mb-2">
              {lang === 'en' ? 'Experience & Security Activities' : '보안 활동 및 실무 경험'}
            </h2>
            <div className="space-y-3 pl-2">
              {data.experience.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-neutral-100">
                    <span>{exp.title}</span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-[11px] text-neutral-400 font-medium">
                    {exp.role} · {exp.organization}
                  </div>
                  <ul className="space-y-0.5 pl-3 text-[11px] text-neutral-400 list-disc">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
