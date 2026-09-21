import {
  MetricItem,
  ProjectDetail,
  ExperienceItem,
  EducationItem,
  SkillCategory,
  StackCard,
  CertificationItem,
  ArticleItem,
  TimelineItem,
} from '../types';

export const portfolioContent = {
  en: {
    profile: {
      name: 'Uiseok Jeong',
      koreanName: '정의석',
      title: 'Security Engineer in Training',
      tagline: 'Offensive-security fundamentals meet safety-first AI engineering',
      location: 'Busan, Republic of Korea',
      status: 'Open to Security Opportunities · ROKAF InfoSec Candidate',
      email: 'curitydato@gmail.com',
      phone: '(+82) 010-7922-7641',
      github: 'https://github.com/sbit-uiseok',
      blog: 'https://blog.naver.com',
      linkedin: 'https://linkedin.com',
      quote:
        "I study security from the attacker's side — and in the systems I build, safety gating, personal-data handling, and secret management are first-class requirements, not afterthoughts.",
      about:
        "I'm an undergraduate in Smart Convergence Security at Busan University of Foreign Studies, focused on offensive-security fundamentals: system hacking, binary analysis, and penetration testing.\n\nAlongside that, I designed, built, and tested a 7,500-line LLM automation system on my own — from planning through QA — treating security as part of the design from day one rather than something bolted on later. My goal is to turn these skills into hands-on, real-world cyber defense capability.",
    },
    metrics: [
      { label: 'GPA', value: '4.48', subtext: 'Oesung Hope Scholarship Recipient' },
      { label: 'Project Code', value: '~7,500', subtext: 'Lines of clean Python', highlight: true },
      { label: 'LLM Pipeline', value: '3-Stage', subtext: '10-axis automated scoring' },
      { label: 'Build Iterations', value: '85', subtext: 'Claude Code prompt cycles' },
    ] as MetricItem[],
    skillsList: [
      {
        category: 'Offensive Security',
        iconName: 'ShieldAlert',
        skills: [
          { name: 'System Hacking', featured: true },
          { name: 'Binary Analysis', featured: true },
          { name: 'Reverse Engineering (IDA Pro)', featured: true },
          { name: 'Penetration Testing' },
          { name: 'Wargame / CTF Problem Solving' },
        ],
      },
      {
        category: 'Network & Incident Analysis',
        iconName: 'Network',
        skills: [
          { name: 'Wireshark & Packet Inspection', featured: true },
          { name: 'Traffic Analysis' },
          { name: 'Cyber Intrusion Case Analysis' },
          { name: 'OCR-based Log Reconstruction' },
        ],
      },
      {
        category: 'Systems & Infrastructure',
        iconName: 'Server',
        skills: [
          { name: 'Linux Privilege & Permission Mgmt', featured: true },
          { name: 'Windows Internals' },
          { name: 'Win32 API (pywin32) & ctypes' },
          { name: 'tmux & Shell Scripting' },
        ],
      },
      {
        category: 'AI & LLM Engineering',
        iconName: 'BrainCircuit',
        skills: [
          { name: 'OpenAI API (GPT-4o mini)', featured: true },
          { name: 'Ollama (Local LLM Hybrid)', featured: true },
          { name: 'Prompt Engineering & Few-shot' },
          { name: 'LLM-as-a-Judge Evaluation (10 axes)' },
          { name: 'Gensim Word2Vec' },
          { name: 'Claude Code AI Pair Programming' },
        ],
      },
      {
        category: 'Backend & Data',
        iconName: 'Database',
        skills: [
          { name: 'FastAPI & Uvicorn (25 REST endpoints)', featured: true },
          { name: 'Pydantic & asyncio' },
          { name: 'SQLite (10-table relational schema)' },
          { name: 'APScheduler & httpx' },
          { name: 'Streamlit UI' },
        ],
      },
      {
        category: 'Security Engineering Practice',
        iconName: 'Lock',
        skills: [
          { name: 'Human-in-the-Loop Approval Gating', featured: true },
          { name: 'PII / Payment Request Classification' },
          { name: '15 Rejection Failure Tags' },
          { name: 'Secret Separation (.env) & Reproducible Packaging' },
        ],
      },
    ] as SkillCategory[],
    stackCards: [
      {
        name: 'Python',
        category: 'Primary Language',
        description: '7,500-line desktop automation, async APIs, heuristics & ML pipelines.',
        iconName: 'Terminal',
        badge: 'Core',
      },
      {
        name: 'C',
        category: 'Systems Language',
        description: 'Low-level memory layouts, binary analysis, and system hacking fundamentals.',
        iconName: 'Code',
        badge: 'Systems',
      },
      {
        name: 'IDA Pro',
        category: 'Binary Analysis',
        description: 'Disassembly, decompilation, control flow analysis, and incident forensics.',
        iconName: 'ShieldAlert',
        badge: 'Offensive',
      },
      {
        name: 'Wireshark',
        category: 'Network Forensics',
        description: 'Packet capture, protocol dissection, cyber intrusion vector tracing.',
        iconName: 'Network',
        badge: 'Analysis',
      },
      {
        name: 'FastAPI & SQLite',
        category: 'Backend Architecture',
        description: '3-tier decoupled architecture with 25 REST endpoints and 10 normalized tables.',
        iconName: 'Server',
        badge: 'Backend',
      },
      {
        name: 'Ollama & OpenAI',
        category: 'Hybrid LLM Engine',
        description: 'Cost-optimized local inference for classification + cloud API for refinement.',
        iconName: 'BrainCircuit',
        badge: 'AI',
      },
      {
        name: 'Linux & tmux',
        category: 'Infrastructure',
        description: 'Privilege isolation, terminal session multiplexing, and shell scripting.',
        iconName: 'Cpu',
        badge: 'Infra',
      },
      {
        name: 'Windows OCR & Win32',
        category: 'Desktop Ingestion',
        description: 'Non-API message capture, pixel color detection, and idempotency tracking.',
        iconName: 'Laptop',
        badge: 'Automation',
      },
    ] as StackCard[],
    projects: [
      {
        id: 'ai-auto-reply-assistant',
        title: 'Persona-Based AI Auto-Reply Assistant',
        category: 'BUFS AI Bootcamp · Individual Project',
        period: 'Sept 2026',
        role: 'Sole Architect & Lead Developer',
        summary:
          'End-to-end design, development, and testing of an LLM desktop automation system — approximately 7,500 lines of Python with strict security gating, hybrid inference, and non-API desktop ingestion.',
        tags: [
          'Python',
          'FastAPI',
          'SQLite',
          'Streamlit',
          'OpenAI API',
          'Ollama',
          'Windows OCR',
          'Word2Vec',
          'Claude Code',
        ],
        metrics: {
          Codebase: '~7,500 lines of Python',
          'REST Endpoints': '25 endpoints',
          'Database Schema': '10 tables',
          'Scoring Axes': '10 (6 LLM-judged · 4 rule-based)',
          'Regen Threshold': 'confidence < 0.70',
          'Rejection Tags': '15 failure tags',
          'Prompt Iterations': '85 cycles',
        },
        architecture: [
          {
            title: '🏗️ Architecture Redesign (Monolith → 3-Tier Decoupled)',
            description:
              'In the original 2,261-line single-file Streamlit prototype, UI rendering blocked on LLM calls, making continuous operation impossible.',
            points: [
              'Re-architected into a clean 3-tier system: Streamlit UI / FastAPI backend / SQLite database.',
              'Delivered 25 dedicated REST endpoints and a 10-table normalized relational schema.',
              'Achieved non-blocking async execution using Uvicorn, asyncio, and APScheduler background tasks.',
            ],
          },
          {
            title: '🧠 Three-Stage LLM Pipeline & 10-Axis Evaluation',
            description:
              'Designed a classification → candidate generation → self-evaluation pipeline ensuring safety and personality fidelity.',
            points: [
              'Classification: Analyzes intent, urgency, and sensitive content.',
              'Candidate Generation: Generates contextual replies based on persona and conversation history.',
              'Self-Evaluation: Evaluates on 10 weighted axes (6 LLM-judged, 4 rule-based). Regenerates any draft below a 0.70 confidence threshold.',
            ],
          },
          {
            title: '🔐 Human-in-the-Loop Safety Approval Gate',
            description:
              'Strict defense-in-depth design preventing unintended automated outbound communication.',
            points: [
              'Messages classified as appointment, payment, personal information (PII), or uncertain are NEVER sent automatically.',
              '15 failure tags classify exactly why a draft was rejected.',
              'Outbound send action remains under explicit user confirmation and human review.',
            ],
          },
          {
            title: '💰 Hybrid LLM Cost-Optimization & Fallback Chain',
            description:
              'Calculated per-reply token costs directly and engineered a split-workload architecture.',
            points: [
              'Local LLM (Ollama) handles heavy classification, multi-candidate generation, and initial judging at $0 cost.',
              'Cloud API (OpenAI GPT-4o mini) performs final high-polish refinement only when necessary.',
              'Integrated rule-based fallback chain so the service continues running even during network outages.',
            ],
          },
          {
            title: '👁️ Message Ingestion Without a Read API',
            description:
              'Engineered desktop screen ingestion for chat applications lacking developer APIs.',
            points: [
              'Captured target chat window and extracted text using native Windows OCR.',
              'Identified message sender using speech-bubble pixel color and right-edge coordinate heuristics.',
              'Suppressed duplicate OCR frames using difflib text similarity and an idempotency tracking table.',
            ],
          },
          {
            title: '🔁 AI Pair Programming & 85 Prompt Iterations',
            description:
              'Drove the build through 85 documented prompt cycles with Claude Code.',
            points: [
              'Strict loop: define formal specification → review generated code → execute runtime verification.',
              'Authored multi-persona scenario QA suites (friend, younger sibling, supervisor) exposing subtle cross-screen state transition bugs.',
              'Secret separation (.env) with reproducible Jupyter notebook export omitting credentials.',
            ],
          },
        ],
        pipelineSteps: [
          {
            step: 'Stage 1',
            title: 'Intent & Safety Classification',
            desc: 'Detects intent, checks PII/payment risk, applies 15 security filters.',
          },
          {
            step: 'Stage 2',
            title: 'Persona Candidate Generation',
            desc: 'Generates diverse reply options conditioned on persona memory & history.',
          },
          {
            step: 'Stage 3',
            title: '10-Axis Evaluation & Gating',
            desc: 'Scores across 10 axes. If score < 0.70, triggers regeneration. Enforces Human-in-the-Loop approval.',
          },
        ],
        word2vecTable: {
          sentences: '281,815',
          tokens: '3,008,920',
          vocab: '17,464',
          time: '3.4 s',
        },
      },
    ] as ProjectDetail[],
    supportingProjects: [
      {
        id: 'cyber-intrusion-forensics',
        title: 'Cyber Intrusion Vector Forensics',
        category: 'S-BIT Academic Club',
        period: '2025 – Present',
        description:
          'Deep forensic analysis of real-world cyber intrusion incidents using IDA Pro and Wireshark. Reconstructed attack vectors, analyzed malicious binaries, and mapped threat actor kill chains.',
        tags: ['IDA Pro', 'Wireshark', 'Packet Analysis', 'Incident Response'],
      },
      {
        id: 'wargame-system-hacking',
        title: 'Whitehat CTF & Binary Exploitation Lab',
        category: 'Independent Research & Training',
        period: '2025 – Present',
        description:
          'System hacking and memory safety challenge solutions for Whitehat-class competitions. Explored buffer overflows, format string vulnerabilities, shellcode crafting, and Linux privilege escalation.',
        tags: ['Binary Exploitation', 'GDB', 'C', 'Linux Internals', 'CTF'],
      },
      {
        id: 'word2vec-corpus-engine',
        title: 'Conversation Semantic Word2Vec Engine',
        category: 'BUFS AI Bootcamp Track',
        period: 'Sept 2026',
        description:
          'Trained and validated custom Word2Vec vector space model on merged Kaggle dialogue corpora (281k sentences, 3.0M tokens in 3.4s) for semantic intent mapping in automation pipelines.',
        tags: ['Gensim', 'NLP', 'Word2Vec', 'Python', 'Evaluation'],
      },
    ],
    experience: [
      {
        id: 's-bit',
        title: 'S-BIT Academic Club',
        role: 'Cyber Intrusion Analysis & Whitehat Preparation',
        organization: 'Busan University of Foreign Studies',
        location: 'Busan, KR',
        period: '2025 – Present',
        bullets: [
          'Analyzed real cyber intrusion cases with IDA and Wireshark to trace attack vectors and identify root causes.',
          'Solved wargame challenges to build practical penetration-testing and binary-analysis capability, training for Whitehat-class competitions.',
          'Operated Linux in depth — privilege and permission management, terminal multiplexing with tmux — to control system infrastructure and support analysis workflows.',
        ],
        tags: ['IDA Pro', 'Wireshark', 'Wargames', 'Linux Privilege Management', 'tmux'],
      },
      {
        id: 'ict-crew',
        title: 'ICT Convergence Security Crew',
        role: 'Crew Member · 3rd Cohort',
        organization: 'Busan Metropolitan Area',
        location: 'Busan, KR',
        period: '2025',
        bullets: [
          'Authored a structured technical competency specification and a scoped project plan as the basis of the application.',
          'Planned, documented, and executed a security project independently, from objective definition through implementation.',
        ],
        tags: ['Security Specification', 'Threat Modeling', 'Project Planning', 'Verification'],
      },
    ] as ExperienceItem[],
    education: [
      {
        id: 'bufs-degree',
        degree: 'Bachelor of Science in Smart Convergence Security',
        institution: 'Busan University of Foreign Studies (BUFS)',
        location: 'Busan, KR',
        period: '2025 – Present',
        gpa: '4.48',
        honors: 'Oesung Hope Scholarship recipient (awarded on academic performance)',
        coursework: [
          'System Hacking',
          'Binary Analysis',
          'Network Security',
          'Penetration Testing',
          'Linux Systems',
        ],
        description:
          'Specialized academic curriculum focusing on offensive-security theory, low-level binary analysis, and robust defense engineering.',
      },
      {
        id: 'bufs-bootcamp',
        degree: 'BUFS AI Bootcamp — Applied AI Track',
        institution: 'Busan University of Foreign Studies',
        location: 'Busan, KR',
        period: '2026',
        description:
          'Intensive program focusing on LLM orchestration, prompt engineering, agentic automation, and production API deployment.',
      },
    ] as EducationItem[],
    certifications: [
      {
        title: 'Smart Convergence Security Specialization',
        issuer: 'Busan University of Foreign Studies',
        year: '2025 – Present',
        linkText: 'In Progress',
      },
      {
        title: 'Oesung Hope Scholarship for Academic Excellence (GPA 4.48)',
        issuer: 'Busan University of Foreign Studies',
        year: '2025 – 2026',
        linkText: 'Awarded',
      },
      {
        title: 'Applied AI Track Certification',
        issuer: 'BUFS AI Bootcamp',
        year: '2026',
        linkText: 'Completed',
      },
      {
        title: 'Republic of Korea Air Force Information Security Specialist',
        issuer: 'ROK Air Force',
        year: '2026',
        linkText: 'Candidate',
      },
    ] as CertificationItem[],
    articles: [
      {
        id: 'architecture-redesign',
        title:
          'Architecture Redesign: Migrating a 2,261-line Streamlit Monolith to 3-Tier FastAPI + SQLite',
        category: 'System Architecture',
        date: 'Sept 2026',
        readTime: '6 min read',
        description:
          'How decomposing an interactive Streamlit prototype into 25 REST endpoints and 10 relational tables eliminated UI freezing and enabled persistent background automation.',
        content: [
          'When building the Persona-Based AI Auto-Reply Assistant, our first prototype was a monolithic 2,261-line Streamlit script. While Streamlit is fantastic for rapid UI drafting, its execution model—re-running the entire script from top to bottom on every user interaction—became an architectural blocker.',
          'During active LLM inference and OCR scanning, the single thread blocked completely. Incoming messages were dropped, screen scraping paused, and background state became desynchronized.',
          'To solve this, I migrated the application to a clean 3-tier architecture: 1) A responsive Streamlit UI acting purely as a presentation client; 2) A high-concurrency FastAPI service handling async jobs, token budgeting, and LLM scoring; 3) SQLite with 10 normalized tables serving as the transactional state engine with foreign keys and idempotency constraints.',
          'Result: 25 cleanly documented REST endpoints, zero dropped OCR frames, and true non-blocking background queue execution.',
        ],
        tags: ['FastAPI', 'Architecture', 'SQLite', 'Async Python'],
      },
      {
        id: 'safety-first-llm',
        title:
          'Designing a Safety-First 10-Axis LLM Evaluation Pipeline with Human-in-the-Loop Gating',
        category: 'AI Security & Safety',
        date: 'Sept 2026',
        readTime: '5 min read',
        description:
          'A multi-tier defense preventing rogue outbound automated messages through 15 failure tags, weighted scoring axes, and forced user approval.',
        content: [
          'Automated AI agents that interact directly with human communication channels introduce severe operational and privacy hazards. A single hallucinated promise, leaked phone number, or misclassified payment request can compromise trust.',
          'To enforce safety as a first-class citizen, I architected a 3-stage pipeline: Classification -> Candidate Generation -> Self-Evaluation.',
          'The self-evaluator scores every generated draft on 10 explicit axes: 6 evaluated via LLM-as-a-Judge (persona consistency, tone fidelity, hallucination check, politeness, context relevance, brevity) and 4 rule-based deterministic checks (PII regex match, financial keyword detection, length constraints, character diversity).',
          'Any draft scoring below a 0.70 confidence threshold is regenerated or flagged. Furthermore, messages categorized as appointments, monetary transactions, or sensitive personal data trigger a strict Human-in-the-Loop gate—never sending without manual user confirmation.',
        ],
        tags: ['LLM Safety', 'Human-in-the-Loop', 'Prompt Engineering', 'Security'],
      },
      {
        id: 'windows-ocr-ingestion',
        title:
          'Automating Desktop Ingestion Without APIs: Windows OCR, Pixel Color Heuristics & Idempotency',
        category: 'Systems & Engineering',
        date: 'Sept 2026',
        readTime: '5 min read',
        description:
          'Reverse-engineering message ingestion on Windows: speech bubble pixel color analysis, coordinate boundaries, and difflib frame deduplication.',
        content: [
          'Many legacy messaging applications and proprietary corporate tools do not provide webhooks or REST read APIs. To build an automated assistant, we had to capture chat dialogue directly from the desktop screen.',
          'Using the Win32 API and native Windows OCR, the pipeline captures the specified window coordinates. But raw OCR text lacks metadata: Who said what? Is this an incoming message or a reply sent by me?',
          'I solved this by sampling the RGB pixel color of the speech-bubble container and calculating horizontal bounding coordinates. Right-aligned bubbles of a specific hue are registered as self-sent; left-aligned bubbles are incoming sender messages.',
          'To prevent processing the same message repeatedly during screen refreshes, I built an idempotency engine combining normalized difflib text similarity with a recent-message hash table. Duplicate frames are discarded in under 2ms.',
        ],
        tags: ['Windows OCR', 'Win32', 'Image Processing', 'Idempotency'],
      },
    ] as ArticleItem[],
    timeline: [
      {
        year: '2025',
        event: 'Enrolled in Smart Convergence Security, BUFS',
        subtext: 'B.S. in Smart Convergence Security · 4.48 GPA · Oesung Hope Scholarship',
        highlight: true,
      },
      {
        year: '2025',
        event: 'S-BIT Academic Club · ICT Convergence Security Crew (3rd Cohort)',
        subtext: 'Cyber intrusion case analysis, IDA Pro & Wireshark wargame training, security project planning',
      },
      {
        year: '2026',
        event: 'BUFS AI Bootcamp — Applied AI Track',
        subtext: 'Intensive LLM pipeline design, prompt engineering, agentic architecture',
      },
      {
        year: 'Sept 2026',
        event: 'Built the Persona-Based AI Auto-Reply Assistant',
        subtext: '7,500-line Python system, 3-tier FastAPI + SQLite, 10-axis LLM pipeline, 85 Claude Code iterations',
        highlight: true,
      },
      {
        year: '2026',
        event: 'Applied as ROKAF Information Security Specialist',
        subtext: 'Candidate for Republic of Korea Air Force Information Security Specialist',
      },
    ] as TimelineItem[],
  },
  ko: {
    profile: {
      name: 'Uiseok Jeong',
      koreanName: '정의석',
      title: '보안 엔지니어 / AI 자동화 엔지니어',
      tagline: '공격자 관점의 보안 기초와 안전 우선 AI 엔지니어링의 융합',
      location: '대한민국 부산광역시',
      status: '보안 및 AI 엔지니어링 포지션 탐색 중 · 공군 정보보호병 지원',
      email: 'curitydato@gmail.com',
      phone: '(+82) 010-7922-7641',
      github: 'https://github.com/sbit-uiseok',
      blog: 'https://blog.naver.com',
      linkedin: 'https://linkedin.com',
      quote:
        '공격자의 관점에서 보안을 탐구하며, 시스템 구축 시 안전 검증(Safety Gating), 개인정보 처리, 시크릿 격리를 사후 대책이 아닌 설계 1순위 요구사항으로 다룹니다.',
      about:
        '부산외국어대학교 스마트융합보안학과에서 시스템 해킹, 바이너리 분석, 모의해킹 등 공격 중심의 보안 기초를 집중적으로 연구하고 있습니다.\n\n이와 더불어 기획부터 QA까지 전 과정을 주도하여 약 7,500라인 규모의 LLM 데스크톱 자동화 시스템을 1인 개발했습니다. 보안을 사후에 덧붙이지 않고 기획 첫날부터 내재화하며, 실질적인 사이버 방어 역량으로 확장해 나가고 있습니다.',
    },
    metrics: [
      { label: '학점 (GPA)', value: '4.48', subtext: '외성희망장학금 수혜' },
      { label: '프로젝트 코드', value: '~7,500줄', subtext: '단독 설계 Python 코드베이스', highlight: true },
      { label: 'LLM 파이프라인', value: '3단계', subtext: '10개 축 자동 평가 및 필터링' },
      { label: '프롬프트 반복', value: '85회', subtext: 'Claude Code 페어 프로그래밍' },
    ] as MetricItem[],
    skillsList: [
      {
        category: '공격 보안 (Offensive Security)',
        iconName: 'ShieldAlert',
        skills: [
          { name: '시스템 해킹 (System Hacking)', featured: true },
          { name: '바이너리 분석 (Binary Analysis)', featured: true },
          { name: '리버스 엔지니어링 (IDA Pro)', featured: true },
          { name: '모의해킹 (Penetration Testing)' },
          { name: '워게임 / CTF 문제 풀이' },
        ],
      },
      {
        category: '네트워크 및 침해 사고 분석',
        iconName: 'Network',
        skills: [
          { name: 'Wireshark 패킷 분석', featured: true },
          { name: '네트워크 트래픽 분석' },
          { name: '사이버 침해 사고 사례 분석' },
          { name: 'OCR 기반 로그 복원' },
        ],
      },
      {
        category: '시스템 및 인프라',
        iconName: 'Server',
        skills: [
          { name: 'Linux 권한 및 퍼미션 관리', featured: true },
          { name: 'Windows Internals' },
          { name: 'Win32 API (pywin32) & ctypes' },
          { name: 'tmux 및 쉘 스크립팅' },
        ],
      },
      {
        category: 'AI & LLM 엔지니어링',
        iconName: 'BrainCircuit',
        skills: [
          { name: 'OpenAI API (GPT-4o mini)', featured: true },
          { name: 'Ollama (로컬 LLM 하이브리드)', featured: true },
          { name: '프롬프트 엔지니어링 & Few-shot' },
          { name: 'LLM-as-a-Judge 평가 (10개 축)' },
          { name: 'Gensim Word2Vec' },
          { name: 'Claude Code AI 페어 프로그래밍' },
        ],
      },
      {
        category: '백엔드 및 데이터',
        iconName: 'Database',
        skills: [
          { name: 'FastAPI & Uvicorn (25개 엔드포인트)', featured: true },
          { name: 'Pydantic & asyncio 비동기 제어' },
          { name: 'SQLite (10개 정규화 테이블)' },
          { name: 'APScheduler & httpx' },
          { name: 'Streamlit UI' },
        ],
      },
      {
        category: '보안 엔지니어링 실무',
        iconName: 'Lock',
        skills: [
          { name: '휴먼 인 더 루프 (Human-in-the-Loop) 승인 게이트', featured: true },
          { name: '개인정보 (PII) / 결제 요청 자동 분류' },
          { name: '15가지 반려 실패 태그' },
          { name: '시크릿 분리 (.env) & 재현 가능한 패키징' },
        ],
      },
    ] as SkillCategory[],
    stackCards: [
      {
        name: 'Python',
        category: '주 언어 & 자동화',
        description: '7,500라인 데스크톱 자동화, 비동기 백엔드 API, 휴리스틱 알고리즘.',
        iconName: 'Terminal',
        badge: 'Core',
      },
      {
        name: 'C',
        category: '시스템 언어',
        description: '메모리 구조 분석, 시스템 해킹 기초 및 취약점 원리 규명.',
        iconName: 'Code',
        badge: 'Systems',
      },
      {
        name: 'IDA Pro',
        category: '바이너리 역공학',
        description: '디스어셈블, 디컴파일, 제어 흐름 분석 및 침해 사고 포렌식.',
        iconName: 'ShieldAlert',
        badge: 'Offensive',
      },
      {
        name: 'Wireshark',
        category: '네트워크 패킷 분석',
        description: '패킷 캡처, 프로토콜 세부 분석, 공격 벡터 역추적.',
        iconName: 'Network',
        badge: 'Analysis',
      },
      {
        name: 'FastAPI & SQLite',
        category: '3계층 백엔드',
        description: '25개 REST 엔드포인트와 10개 정규화 테이블을 갖춘 비동기 아키텍처.',
        iconName: 'Server',
        badge: 'Backend',
      },
      {
        name: 'Ollama & OpenAI',
        category: '하이브리드 LLM',
        description: '로컬 LLM 분류/평가로 토큰 비용 절감 + 클라우드 API 정제 파이프라인.',
        iconName: 'BrainCircuit',
        badge: 'AI',
      },
      {
        name: 'Linux & tmux',
        category: '인프라 환경',
        description: '권한 격리, 터미널 멀티플렉싱, 쉘 스크립트 기반 자동화 워크플로우.',
        iconName: 'Cpu',
        badge: 'Infra',
      },
      {
        name: 'Windows OCR & Win32',
        category: '데스크톱 인제스천',
        description: 'API 없는 환경에서 화면 캡처, 픽셀 색상/좌표 판별 및 멱등성 처리.',
        iconName: 'Laptop',
        badge: 'Automation',
      },
    ] as StackCard[],
    projects: [
      {
        id: 'ai-auto-reply-assistant',
        title: '페르소나 기반 AI 자동 답장 어시스턴트',
        category: 'BUFS AI 부트캠프 · 개인 프로젝트',
        period: '2026.09',
        role: '단독 기획, 아키텍처 설계 및 개발',
        summary:
          '기획부터 QA까지 전 과정을 주도한 약 7,500라인 규모의 LLM 데스크톱 자동화 시스템. 철저한 안전 검증 게이트와 하이브리드 파이프라인 탑재.',
        tags: [
          'Python',
          'FastAPI',
          'SQLite',
          'Streamlit',
          'OpenAI API',
          'Ollama',
          'Windows OCR',
          'Word2Vec',
          'Claude Code',
        ],
        metrics: {
          '코드베이스 규모': '약 7,500 라인 (Python)',
          'REST 엔드포인트': '25개 제공',
          '데이터베이스 스키마': '10개 정규화 테이블',
          '답장 평가 축': '10개 축 (LLM 6축 · 규칙 4축)',
          '재생성 신뢰도 임계값': '신뢰도 < 0.70 시 재생성',
          '반려 실패 태그': '15개 태그로 사유 세분화',
          '프롬프트 반복 검증': '85회 Claude Code 반복',
        },
        architecture: [
          {
            title: '🏗️ 아키텍처 재설계 (단일 파일 모놀리스 → 3계층 분리)',
            description:
              '기존 2,261라인 단일 파일 Streamlit 프로토타입은 LLM 호출 시 UI 렌더링이 블로킹되어 연속 동작이 불가능했습니다.',
            points: [
              'Streamlit UI / FastAPI 백엔드 / SQLite 데이터베이스의 3계층 분리 아키텍처로 전면 재설계.',
              '25개 REST 엔드포인트와 10개 테이블 스키마를 신규 구축하여 안전한 영속성 확보.',
              'FastAPI + asyncio + APScheduler 기반의 비동기 백그라운드 태스크로 블로킹 현상 원천 해결.',
            ],
          },
          {
            title: '🧠 3단계 LLM 파이프라인 및 10개 축 자체 평가',
            description:
              '분류 → 후보 생성 → 자체 평가의 체계적인 3단계 파이프라인으로 안전성과 완성도를 극대화했습니다.',
            points: [
              '1단계 (분류): 메시지 의도, 긴급도, 민감 정보 유무 사전 판별.',
              '2단계 (생성): 페르소나 및 대화 맥락에 기반한 맞춤형 후보 답장 생성.',
              '3단계 (평가): 가중치 부여된 10개 축(LLM 6축, 규칙 4축)으로 점수화, 신뢰도 0.70 미만 시 자동 재생성.',
            ],
          },
          {
            title: '🔐 휴먼 인 더 루프 (Human-in-the-Loop) 승인 게이트',
            description:
              '원치 않는 오발송이나 정보 유출 사고를 방지하기 위한 능동형 안전 방어 설계.',
            points: [
              '약속, 결제, 개인정보(PII), 불확실한 메시지로 판정된 경우 절대로 자동 발송하지 않음.',
              '15가지 실패 태그를 통해 초안이 반려된 명확한 원인을 분류 기록.',
              '최종 발송 액션은 반드시 사용자의 명시적 승인을 거치도록 통제권 유지.',
            ],
          },
          {
            title: '💰 비용 절감을 위한 로컬-클라우드 하이브리드 설계',
            description:
              '답장 건당 토큰 비용을 직접 산출한 뒤 워크로드를 분할하여 경제성과 속도를 동시에 확보했습니다.',
            points: [
              '로컬 LLM (Ollama)이 대량의 분류, 복수 후보 생성, 사전 심사를 전담하여 API 비용 $0 달성.',
              '클라우드 API (OpenAI)는 최종 미세 정제 단계에만 선별 투입.',
              'API 장애 시에도 서비스가 중단되지 않는 규칙 기반 폴백(Fallback) 체인 탑재.',
            ],
          },
          {
            title: '👁️ 읽기 API 부재 환경에서의 메시지 인제스천',
            description:
              '공식 API가 지원되지 않는 데스크톱 메신저 화면에서 안정적으로 대화를 캡처하고 해석하는 시스템 구현.',
            points: [
              '메신저 윈도우 캡처 후 Windows native OCR로 텍스트 추출.',
              '말풍선 픽셀 색상 및 우측 경계 좌표 판별 휴리스틱으로 발신자(본인/상대방) 구분.',
              'difflib 텍스트 유사도 검사와 멱등성(Idempotency) 테이블로 중복 OCR 프레임 완벽 필터링.',
            ],
          },
          {
            title: '🔁 AI 페어 프로그래밍 및 85회 프롬프트 반복 검증',
            description:
              'Claude Code와 함께 85회의 체계적인 프롬프트 반복을 통해 기획, 개발, QA를 완성했습니다.',
            points: [
              '요구사항 정의 → 생성 코드 리뷰 → 실제 실행 및 검증의 엄격한 루프 반복.',
              '친구, 동생, 상사 등 다중 페르소나 시나리오 QA를 직접 작성하여 화면 간 호환성 및 상태 전이 결함 해결.',
              'API 키를 .env로 분리하고 인증 정보가 배제된 재현 가능한 노트북으로 패키징.',
            ],
          },
        ],
        pipelineSteps: [
          {
            step: '1단계',
            title: '의도 및 위험성 분류',
            desc: '대화 의도 파악, PII/결제 위험성 검사, 15개 안전 필터 적용',
          },
          {
            step: '2단계',
            title: '페르소나 후보 생성',
            desc: '설정된 페르소나 및 이전 대화 맥락을 기반으로 다각도 후보군 작성',
          },
          {
            step: '3단계',
            title: '10개 축 채점 및 승인 게이트',
            desc: '10개 축 종합 평가(0.70 미만 시 재생성), 위험 항목 사용자 직접 승인',
          },
        ],
        word2vecTable: {
          sentences: '281,815 문장',
          tokens: '3,008,920 토큰',
          vocab: '17,464 어휘',
          time: '3.4초 완료',
        },
      },
    ] as ProjectDetail[],
    supportingProjects: [
      {
        id: 'cyber-intrusion-forensics',
        title: '사이버 침해 사고 분석 및 공격 벡터 추적',
        category: 'S-BIT 학술동아리',
        period: '2025 – 현재',
        description:
          'IDA Pro 및 Wireshark를 활용한 실제 사이버 침해 사고 역추적 분석. 공격 벡터 재구성, 악성 바이너리 제어 흐름 분석, 공격 체인 규명.',
        tags: ['IDA Pro', 'Wireshark', '패킷 분석', '침해 사고 대응'],
      },
      {
        id: 'wargame-system-hacking',
        title: '화이트햇 CTF 및 바이너리 익스플로잇 연구',
        category: '개인 연구 및 훈련',
        period: '2025 – 현재',
        description:
          '화이트햇 대회 대비 시스템 해킹 및 메모리 취약점 워게임 문제 해결. 버퍼 오버플로우, 포맷 스트링 취약점, 셸코드 작성, 리눅스 권한 상승 실습.',
        tags: ['바이너리 분석', 'GDB', 'C언어', '리눅스 시스템', 'CTF'],
      },
      {
        id: 'word2vec-corpus-engine',
        title: '대화 특화 Word2Vec 의미 분석 엔진',
        category: 'BUFS AI 부트캠프',
        period: '2026.09',
        description:
          'Kaggle 대화 코퍼스를 병합하여 단 3.4초 만에 28만 문장/300만 토큰을 학습한 커스텀 Word2Vec 모델 구축 및 유추/유사도 검증.',
        tags: ['Gensim', 'NLP', 'Word2Vec', 'Python', '성능 평가'],
      },
    ],
    experience: [
      {
        id: 's-bit',
        title: 'S-BIT 학술동아리',
        role: '사이버 침해 분석 및 화이트햇 대회 대비',
        organization: '부산외국어대학교',
        location: '부산광역시',
        period: '2025 – 현재',
        bullets: [
          'IDA, Wireshark를 활용한 실제 사이버 침해 사례 분석을 통해 공격 경로 추적 및 원인 규명.',
          '워게임 문제 풀이를 통한 실무형 모의해킹 및 바이너리 분석 역량 배양 (화이트햇 대회 대비).',
          '리눅스 권한 관리, 퍼미션 체계, tmux를 활용한 세션 관리 등 분석 환경 인프라 운용.',
        ],
        tags: ['IDA Pro', 'Wireshark', '워게임', '리눅스 권한 관리', 'tmux'],
      },
      {
        id: 'ict-crew',
        title: 'ICT 융합보안 크루 (3기)',
        role: '크루원 활동',
        organization: '부산 지역 융합보안 연합',
        location: '부산광역시',
        period: '2025',
        bullets: [
          '지원서 기반 기술 역량 명세서 및 프로젝트 기획서 작성.',
          '보안 프로젝트 목표 수립부터 구현까지 전 과정을 주도적으로 기획 및 실행.',
        ],
        tags: ['보안 명세서', '위협 모델링', '프로젝트 기획', '검증'],
      },
    ] as ExperienceItem[],
    education: [
      {
        id: 'bufs-degree',
        degree: '스마트융합보안학과 학사과정',
        institution: '부산외국어대학교 (BUFS)',
        location: '부산광역시',
        period: '2025 – 현재',
        gpa: '4.48',
        honors: '성적 우수 외성희망장학금 수혜',
        coursework: [
          '시스템 해킹',
          '바이너리 분석',
          '네트워크 보안',
          '모의해킹',
          '리눅스 시스템',
        ],
        description:
          '공격자 중심의 보안 원리와 저수준 바이너리 분석, 견고한 시스템 방어 설계를 배우는 전문 학사 과정.',
      },
      {
        id: 'bufs-bootcamp',
        degree: 'BUFS AI 부트캠프 — 응용 AI 트랙',
        institution: '부산외국어대학교',
        location: '부산광역시',
        period: '2026',
        description:
          'LLM 파이프라인 오케스트레이션, 프롬프트 엔지니어링, 에이전트 자동화 및 실무 배포 집중 훈련.',
      },
    ] as EducationItem[],
    certifications: [
      {
        title: '스마트융합보안 전공 학사과정 이수 중 (GPA 4.48)',
        issuer: '부산외국어대학교',
        year: '2025 – 현재',
        linkText: '이수 중',
      },
      {
        title: '외성희망장학금 (성적 우수 전액 장학)',
        issuer: '부산외국어대학교',
        year: '2025 – 2026',
        linkText: '선발 완료',
      },
      {
        title: '응용 AI 트랙 부트캠프 수료',
        issuer: '부산외국어대학교 AI 부트캠프',
        year: '2026',
        linkText: '수료',
      },
      {
        title: '대한민국 공군 정보보호병 지원',
        issuer: '대한민국 공군',
        year: '2026',
        linkText: '지원 완료',
      },
    ] as CertificationItem[],
    articles: [
      {
        id: 'architecture-redesign',
        title:
          '아키텍처 재설계: 2,261줄 Streamlit 모놀리스에서 3계층 FastAPI + SQLite로의 전환',
        category: '시스템 아키텍처',
        date: '2026.09',
        readTime: '6분 소요',
        description:
          '단일 파일 Streamlit 프로토타입을 25개 REST 엔드포인트와 10개 정규화 테이블로 분리하여 UI 프리징을 해결하고 지속 가능한 자동화를 달성한 과정.',
        content: [
          '페르소나 기반 AI 자동 답장 어시스턴트의 초기 프로토타입은 2,261라인의 단일 Streamlit 파일이었습니다. Streamlit은 빠른 UI 검증에는 탁월하지만, 사용자 입력 시 스크립트 전체가 재실행되는 구조적 특성상 장기 동작에는 치명적인 병목이 발생했습니다.',
          '특히 LLM 추론과 OCR 화면 인식이 진행되는 동안 단일 스레드가 완전히 점유되어, 새로운 수신 메시지 누락 및 화면 캡처 중단 사태가 일어났습니다.',
          '이를 해결하기 위해 3계층 아키텍처로 완전히 분리했습니다: 1) 단순 화면 렌더링만 담당하는 가벼운 Streamlit 클라이언트, 2) 비동기 큐, 토큰 관리, LLM 평가를 전담하는 고성능 FastAPI 백엔드, 3) 멱등성 및 대화 상태를 원자적으로 보장하는 10개 정규화 테이블의 SQLite 데이터베이스.',
          '그 결과 25개의 REST 엔드포인트를 구축하고, 단 한 건의 OCR 프레임 누락도 없는 비동기 백그라운드 자동화 환경을 완성했습니다.',
        ],
        tags: ['FastAPI', '아키텍처', 'SQLite', '비동기 Python'],
      },
      {
        id: 'safety-first-llm',
        title:
          '10개 축 LLM 자체 평가 파이프라인 및 휴먼 인 더 루프(Human-in-the-Loop) 승인 게이트',
        category: 'AI 보안 및 신뢰성',
        date: '2026.09',
        readTime: '5분 소요',
        description:
          '15가지 실패 태그, 가중치 기반 다축 평가, 그리고 사용자 강제 승인 게이트를 통한 실시간 오발송 및 정보 유출 방지 기법.',
        content: [
          '인간의 실시간 커뮤니케이션 채널에 AI 에이전트가 직접 개입하는 것은 심각한 보안 및 프라이버시 위험을 동반합니다. 사소한 할루시네이션 발언이나 개인 연락처 유출, 결제 승낙 오발송은 신뢰를 한순간에 무너뜨릴 수 있습니다.',
          '안전을 최우선으로 두기 위해 [분류 → 후보 생성 → 자체 평가]의 3단계 파이프라인을 설계했습니다.',
          '자체 평가기는 10개의 독립적인 축으로 초안을 채점합니다. LLM-as-a-Judge 6축(페르소나 일관성, 어조 충실도, 할루시네이션 방지, 정중성, 문맥 적합성, 간결성)과 4가지 결정론적 규칙 검사(PII 정규식, 금융 키워드 탐지, 길이 제한, 문자 다양성)를 결합합니다.',
          '종합 신뢰도가 0.70 미만이면 즉시 재생성되며, 약속, 금전 거래, 민감 개인정보로 분류된 건은 휴먼 인 더 루프(Human-in-the-Loop) 게이트가 작동하여 사용자의 명시적 승인 없이는 결코 발송되지 않습니다.',
        ],
        tags: ['LLM 안전성', 'Human-in-the-Loop', '프롬프트 엔지니어링', '보안'],
      },
      {
        id: 'windows-ocr-ingestion',
        title:
          'API 없는 메신저 자동화: Windows native OCR, 픽셀 색상 휴리스틱과 멱등성 보장',
        category: '시스템 및 엔지니어링',
        date: '2026.09',
        readTime: '5분 소요',
        description:
          '데스크톱 메신저 화면에서 읽기 API 없이 대화를 캡처하고, 말풍선 픽셀 색상과 difflib 유사도 검사로 중복 없이 완벽히 복원한 엔지니어링 기록.',
        content: [
          '레거시 데스크톱 메신저나 사내 전용 메신저는 웹훅이나 읽기 전용 REST API를 제공하지 않는 경우가 많습니다. 자동 답장 어시스턴트를 실현하기 위해서는 데스크톱 화면에서 실시간으로 대화를 읽어 들여야 했습니다.',
          'Win32 API와 Windows native OCR을 활용하여 지정된 창의 화면을 캡처했습니다. 그러나 순수 OCR 텍스트만으로는 "누가 발언했는가?"에 대한 메타데이터가 존재하지 않았습니다.',
          '이를 말풍선 영역의 RGB 픽셀 색상 샘플링과 가로 좌표 경계값 휴리스틱을 통해 해결했습니다. 우측에 배치된 특정 색상의 말풍선은 본인 발신으로, 좌측 말풍선은 상대방 발신으로 즉각 분류합니다.',
          '또한 화면 주사율에 따른 동일 텍스트 중복 캡처를 막기 위해 difflib 유사도 판별과 최근 메시지 해시 테이블을 연동한 멱등성(Idempotency) 엔진을 구축하여 2ms 이내에 중복 프레임을 제거했습니다.',
        ],
        tags: ['Windows OCR', 'Win32', '이미지 처리', '멱등성'],
      },
    ] as ArticleItem[],
    timeline: [
      {
        year: '2025',
        event: '부산외국어대학교 스마트융합보안학과 입학',
        subtext: '학점 4.48 유지 · 성적 우수 외성희망장학금 수혜',
        highlight: true,
      },
      {
        year: '2025',
        event: 'S-BIT 학술동아리 및 ICT 융합보안 크루 3기 활동',
        subtext: '사이버 침해 사고 분석, IDA Pro / Wireshark 워게임 분석, 보안 프로젝트 기획',
      },
      {
        year: '2026',
        event: 'BUFS AI 부트캠프 (응용 AI 트랙) 수료',
        subtext: 'LLM 파이프라인, 프롬프트 엔지니어링, 에이전트 시스템 집중 훈련',
      },
      {
        year: '2026.09',
        event: '페르소나 기반 AI 자동 답장 어시스턴트 단독 개발',
        subtext: '7,500라인 Python 시스템, 3계층 FastAPI + SQLite 아키텍처, 10개 축 LLM 파이프라인 구축',
        highlight: true,
      },
      {
        year: '2026',
        event: '대한민국 공군 정보보호병 지원',
        subtext: '공군 정보보호 전문 특기병 지원',
      },
    ] as TimelineItem[],
  },
};
