import React, { useState } from 'react';
import { Language } from '../types';
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Globe,
  Download,
  Copy,
  Check,
  Shield,
  ArrowUpRight,
  ExternalLink,
} from 'lucide-react';

interface HeaderProps {
  profile: {
    name: string;
    koreanName: string;
    title: string;
    tagline: string;
    location: string;
    status: string;
    email: string;
    phone: string;
    github: string;
    blog: string;
    linkedin: string;
    quote: string;
  };
  lang: Language;
  onOpenResume: () => void;
  onScrollToContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  lang,
  onOpenResume,
  onScrollToContact,
}) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="profile" className="pt-8 sm:pt-12 pb-8 border-b border-neutral-800/60">
      {/* Top subtle badge icon matching the '+' in the reference image */}
      <div className="flex justify-center mb-8">
        <div className="w-8 h-8 rounded-lg border border-neutral-800 bg-neutral-900/60 flex items-center justify-center text-neutral-500 hover:text-neutral-300 transition-colors">
          <Shield className="w-4 h-4 text-emerald-400/80" />
        </div>
      </div>

      {/* Main Profile Info Row */}
      <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
        {/* Left: Avatar & Identity */}
        <div className="flex items-start gap-4 sm:gap-5">
          {/* Avatar Box with high-tech security silhouette & terminal aesthetic */}
          <div className="relative group shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 p-[1px] shadow-2xl">
              <div className="w-full h-full rounded-[15px] bg-[#111114] flex flex-col items-center justify-center relative overflow-hidden border border-neutral-800/80">
                {/* Circuit / Terminal Grid Background */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:8px_8px]" />
                
                {/* Stylized Security Avatar Graphic */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-neutral-200 font-mono font-bold text-sm shadow-inner group-hover:scale-105 transition-transform">
                    <span className="text-emerald-400">UJ</span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 mt-1.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    SEC_ENG
                  </span>
                </div>

                {/* Subtle corner tech markings */}
                <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-neutral-700" />
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-neutral-700" />
              </div>
            </div>
          </div>

          {/* Titles & Meta */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-neutral-100 tracking-tight">
                {lang === 'en' ? profile.name : `${profile.koreanName} (${profile.name})`}
              </h1>
            </div>
            
            <p className="text-sm font-medium text-neutral-400">
              {profile.title}
            </p>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-0.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>{profile.location}</span>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-emerald-400/90 font-medium">
                {profile.status}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions matching the top-right links in the reference image */}
        <div className="flex sm:flex-col items-center sm:items-end gap-2.5 w-full sm:w-auto pt-2 sm:pt-0">
          <button
            id="header-contact-link"
            onClick={onScrollToContact}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-lg transition-colors group"
          >
            <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            <span>{lang === 'en' ? 'Get in Touch' : '연락하기'}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            id="header-cv-link"
            onClick={onOpenResume}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-xs text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 px-3 py-1.5 rounded-lg transition-colors group"
          >
            <Download className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
            <span>{lang === 'en' ? 'Download CV' : '이력서 보기 / 인쇄'}</span>
          </button>
        </div>
      </div>

      {/* Quick Contact & Socials Row (matching the image's row under header) */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 pt-5 border-t border-neutral-900/80 text-xs text-neutral-400">
        {/* Email with copy button */}
        <div className="flex items-center gap-1.5 group">
          <Mail className="w-3.5 h-3.5 text-neutral-500" />
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-neutral-200 transition-colors font-mono"
          >
            {profile.email}
          </a>
          <button
            onClick={() => handleCopy(profile.email, 'email')}
            className="p-1 text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800 transition-colors"
            title="Copy email"
          >
            {copiedField === 'email' ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>

        {/* Phone with copy button */}
        <div className="flex items-center gap-1.5 group">
          <Phone className="w-3.5 h-3.5 text-neutral-500" />
          <a
            href={`tel:${profile.phone}`}
            className="hover:text-neutral-200 transition-colors font-mono"
          >
            {profile.phone}
          </a>
          <button
            onClick={() => handleCopy(profile.phone, 'phone')}
            className="p-1 text-neutral-500 hover:text-neutral-300 rounded hover:bg-neutral-800 transition-colors"
            title="Copy phone"
          >
            {copiedField === 'phone' ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>

        {/* GitHub link */}
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-neutral-200 transition-colors"
        >
          <Github className="w-3.5 h-3.5 text-neutral-500" />
          <span>GitHub</span>
          <ExternalLink className="w-2.5 h-2.5 text-neutral-600" />
        </a>

        {/* Blog link */}
        <a
          href={profile.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-neutral-200 transition-colors"
        >
          <Globe className="w-3.5 h-3.5 text-neutral-500" />
          <span>Blog</span>
          <ExternalLink className="w-2.5 h-2.5 text-neutral-600" />
        </a>

        {/* LinkedIn */}
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-neutral-200 transition-colors"
        >
          <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
          <span>LinkedIn</span>
          <ExternalLink className="w-2.5 h-2.5 text-neutral-600" />
        </a>
      </div>
    </section>
  );
};
