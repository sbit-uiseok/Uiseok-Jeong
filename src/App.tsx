/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { portfolioContent } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSection } from './components/EducationSection';
import { CertificationsSection } from './components/CertificationsSection';
import { StackSection } from './components/StackSection';
import { ArticlesSection } from './components/ArticlesSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { QuickNav } from './components/QuickNav';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('uj_theme') || localStorage.getItem('ej_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark';
  });
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('uj_theme', theme);
  }, [theme]);

  const content = portfolioContent[lang];

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'ko' : 'en'));
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen bg-[#08080a] text-neutral-200 antialiased selection:bg-emerald-500/30 selection:text-emerald-200 flex flex-col font-sans transition-colors duration-200"
    >
      {/* Top Sticky Navigation */}
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
        onScrollToContact={handleScrollToContact}
      />

      {/* Floating Left Quick Navigation Dock */}
      <QuickNav
        lang={lang}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Single-Column Framer Layout matching reference image */}
      <main className="flex-1 max-w-[700px] w-full mx-auto px-4 sm:px-6">
        {/* Profile / Hero */}
        <Header
          profile={content.profile}
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToContact={handleScrollToContact}
        />

        {/* About me & At a Glance */}
        <AboutSection
          quote={content.profile.quote}
          about={content.profile.about}
          metrics={content.metrics}
          lang={lang}
        />

        {/* Projects (Flagship + 2x2 Grid) */}
        <ProjectsSection
          projects={content.projects}
          supportingProjects={content.supportingProjects}
          lang={lang}
        />

        {/* Experience & Security Activities */}
        <ExperienceSection
          experience={content.experience}
          lang={lang}
        />

        {/* Education & Honors */}
        <EducationSection
          education={content.education}
          lang={lang}
        />

        {/* Certifications & Recognitions */}
        <CertificationsSection
          certifications={content.certifications}
          lang={lang}
        />

        {/* Stack & Engineering Tools */}
        <StackSection
          stack={content.stackCards}
          lang={lang}
        />

        {/* Articles & Technical Notes */}
        <ArticlesSection
          articles={content.articles}
          lang={lang}
        />

        {/* Timeline */}
        <TimelineSection
          timeline={content.timeline}
          lang={lang}
        />

        {/* Let's talk (Contact & Form) */}
        <ContactSection
          email={content.profile.email}
          phone={content.profile.phone}
          github={content.profile.github}
          blog={content.profile.blog}
          linkedin={content.profile.linkedin}
          lang={lang}
        />

        {/* Footer */}
        <Footer lang={lang} />
      </main>

      {/* Full Resume / CV Modal with Print & Markdown Copy */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}

