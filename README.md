# Euiseok Jeong (정의석) — Portfolio Website

> **Security Engineer in Training · Offensive-Security Fundamentals & AI Systems**  
> B.S. in Smart Convergence Security, Busan University of Foreign Studies (GPA 4.48)

A sleek, dark-mode portfolio inspired by modern Framer developer portfolios, engineered with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## Features

- **Minimalist Framer Layout**: 700px single-column layout with dark aesthetics, refined borders, and typography (`JetBrains Mono` & `Plus Jakarta Sans`).
- **Bilingual (English / Korean)**: Instant toggle between English and Korean for international recruiters and Korean academic/military evaluations.
- **Detailed Flagship Project Showcase**: Deep dive into the **Persona-Based AI Auto-Reply Assistant (~7,500 lines)**:
  - 3-tier decoupled architecture (Streamlit UI, FastAPI service, SQLite database)
  - 3-stage LLM evaluation pipeline with 10-axis scoring and confidence < 0.70 regeneration
  - Human-in-the-Loop safety gating blocking PII and payment requests (15 rejection tags)
  - Desktop message ingestion without APIs using Windows OCR and RGB speech-bubble heuristics
  - Word2Vec conversation benchmark (281,424 sentences trained in 3.4 seconds)
- **Security Activities & Experience**: S-BIT Academic Club (Cyber Intrusion Analysis with IDA Pro & Wireshark) and ICT Convergence Security Crew.
- **Education & Honors**: Busan University of Foreign Studies (GPA 4.48 / Oesung Hope Scholarship) & BUFS AI Bootcamp.
- **Interactive Stack & Tools**: High-contrast cards showcasing Python, C, IDA Pro, Wireshark, FastAPI, Ollama/OpenAI, Linux/tmux, and Win32 OCR.
- **Technical Articles & Publications**: In-depth case studies with an interactive reader modal.
- **Live Local Time**: Dynamic Busan/KST (UTC+9) time clock.
- **Print-Ready Resume (CV)**: Modal with formatted CV view, one-click PDF printing, and Markdown export for ATS.
- **Vercel & GitHub Optimized**: Zero-config static output in `dist/` with `vercel.json` rewrites.

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Deploy to GitHub

```bash
# Initialize git repository
git init

# Add all files and commit
git add .
git commit -m "feat: portfolio website for Euiseok Jeong"

# Connect your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

---

## Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and log in with GitHub.
2. Click **Add New...** → **Project**.
3. Import your GitHub repository.
4. Framework Preset will automatically be detected as **Vite**.
5. Click **Deploy**.

### Method 2: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```
