"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  GitBranch,
  Inbox,
  Mail,
  Sparkles,
  Zap,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  problem: string[];
  solution: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  link: string;
};

const profile = {
  name: "Hasana Zahid",
  title: "AI Engineer | Generative AI & Agentic AI",
  bio: "Building intelligent systems that transform ideas into practical AI solutions. Third-year AI student focused on machine learning, deep learning, computer vision, RAG pipelines, and agentic workflows.",
  email: "hasanazahid842@gmail.com",
  location: "Islamabad, Pakistan",
  github: "https://github.com/hasana157",
  linkedin: "https://linkedin.com/in/hasana-zahid-605543310",
};

const projects: Project[] = [
  {
    id: "smart-traffic-ai",
    title: "Smart Traffic AI — Helmet Detection & License Plate Reader",
    category: "Computer Vision",
    subtitle: "Dual YOLOv8 pipeline for real-time helmet detection and automated traffic compliance analysis.",
    problem: [
      "Manual monitoring was slow, inconsistent, and unable to scale across busy traffic environments.",
      "Safety enforcement lacked a low-latency system for identifying helmet violations and vehicle identifiers.",
    ],
    solution: [
      "Built a dual YOLOv8 detection pipeline for helmet recognition and license plate extraction in parallel.",
      "Integrated OCR-based reading and optimized the system for CPU-friendly deployment with real-time inference.",
    ],
    stack: ["YOLOv8", "EasyOCR", "OpenCV", "Streamlit", "Python"],
    metrics: [
      { label: "mAP50", value: "0.961" },
      { label: "FPS", value: "30+" },
      { label: "Deployment", value: "CPU" },
    ],
    link: profile.github,
  },
  {
    id: "rag-opposing-argument-simulator",
    title: "RAG Opposing-Argument Simulator",
    category: "Generative AI",
    subtitle: "Real-time legal and debate simulation powered by retrieval-based evidence and LLM generation.",
    problem: [
      "Static chat responses lacked grounded evidence and struggled to maintain a realistic opposing-view dynamic.",
      "Debate systems needed structured context retrieval for policy and legal-style argument generation.",
    ],
    solution: [
      "Designed a retrieval-augmented workflow using Groq and FastAPI to generate grounded debate responses.",
      "Created a simulator that surfaces opposing arguments with contextual evidence rather than generic generated text.",
    ],
    stack: ["FastAPI", "Groq", "RAG", "LangGraph", "Qdrant"],
    metrics: [
      { label: "Latency", value: "< 1s" },
      { label: "Search", value: "Hybrid" },
      { label: "Quality", value: "Grounded" },
    ],
    link: profile.github,
  },
  {
    id: "bci-eeg-denoising",
    title: "BCI EEG Denoising",
    category: "ML Systems",
    subtitle: "Distilled diffusion and CNN-based denoising for low-latency brain signal cleanup.",
    problem: [
      "EEG signals are noisy and fragmented, making them difficult to use reliably in real-time decision systems.",
      "The latency and quality tradeoff constrained practical deployment in brain-computer interfaces.",
    ],
    solution: [
      "Combined distilled diffusion-based denoising with a compact CNN architecture to recover signal quality faster.",
      "Balanced inference latency and denoising performance for more deployable BCI-oriented pipelines.",
    ],
    stack: ["PyTorch", "Diffusion", "CNN", "Signal Processing", "Python"],
    metrics: [
      { label: "Latency", value: "0.40ms" },
      { label: "Model", value: "Distilled" },
      { label: "Accuracy", value: "+12%" },
    ],
    link: profile.github,
  },
  {
    id: "knowledge-base-mcp-server",
    title: "Knowledge-Base MCP Server",
    category: "Agentic AI",
    subtitle: "Multi-tenant semantic knowledge retrieval for agentic systems and enterprise-style search workflows.",
    problem: [
      "Large knowledge bases were difficult to query contextually with basic keyword matching alone.",
      "Shared environments needed modular retrieval APIs for multi-tenant or multi-domain applications.",
    ],
    solution: [
      "Built a semantic retrieval server using FastMCP and Qdrant with tenant-aware indexing and search workflows.",
      "Created reusable API patterns so agentic systems can retrieve precise information without brittle prompt-based dependency.",
    ],
    stack: ["FastMCP", "Qdrant", "Python", "Semantic Search", "RAG"],
    metrics: [
      { label: "Agents", value: "Multi" },
      { label: "Retrieval", value: "Semantic" },
      { label: "Scale", value: "Tenant" },
    ],
    link: profile.github,
  },
  {
    id: "ai-hiring-automation",
    title: "Hiring Automation AI System",
    category: "Backend AI",
    subtitle: "Automated document and candidate intelligence workflow for screening and hiring support.",
    problem: [
      "Hiring pipelines required structured analysis across large candidate and document volumes.",
      "Manual triage slowed turnaround and limited the consistency of early-stage screening decisions.",
    ],
    solution: [
      "Designed backend AI service components to synthesize candidate signals and streamline decision support.",
      "Connected retrieval and orchestration layers into a practical workflow for document and hiring intelligence.",
    ],
    stack: ["Python", "FastAPI", "RAG", "SQL", "Automation"],
    metrics: [
      { label: "Workflow", value: "End-to-end" },
      { label: "Speed", value: "Faster" },
      { label: "Output", value: "Actionable" },
    ],
    link: profile.github,
  },
];

const experience = [
  {
    title: "Backend AI Engineer Intern",
    company: "FlyRank AI",
    period: "Jul 2026 — Present",
    location: "Islamabad, Pakistan",
    description:
      "Developing backend AI pipelines for hiring automation, retrieval systems, and production-grade reasoning workflows.",
    highlights: [
      "Designed modular AI service components for real-time candidate insights and document intelligence.",
      "Integrated retrieval and orchestration layers to improve decision support across interviews and workflows.",
    ],
    stack: ["Python", "FastAPI", "RAG", "SQL"],
  },
  {
    title: "AI Engineer Intern",
    company: "R&D / Research Labs",
    period: "2025 — 2026",
    location: "Remote / Hybrid",
    description:
      "Worked on signal processing, retrieval systems, and applied ML projects aimed at solving high-impact real-world problems.",
    highlights: [
      "Built and benchmarked denoising and CV systems to improve model quality and deployment efficiency.",
      "Created prototype pipelines for agentic workflows, semantic search, and domain-specific assistants.",
    ],
    stack: ["PyTorch", "OpenCV", "Qdrant", "LangGraph"],
  },
  {
    title: "AI & ML Student Engineer",
    company: "COMSATS University",
    period: "2024 — 2028",
    location: "Islamabad, Pakistan",
    description:
      "Focused on computer vision, deep learning, data science, and applied AI research within a strong academic setting.",
    highlights: [
      "Explored MLOps-oriented experimentation, model evaluation, and deployment-minded AI design.",
      "Built coursework and project work around vision systems, LLM-backed assistants, and applied scientific computing.",
    ],
    stack: ["Python", "TensorFlow", "Pandas", "Research"],
  },
];

const skills = [
  {
    title: "Machine Learning & CV",
    items: ["Python", "PyTorch", "TensorFlow", "YOLOv8", "OpenCV", "CNNs"],
    accent: "from-cyan-500/30 to-violet-500/20",
  },
  {
    title: "Generative AI & LLMs",
    items: ["RAG", "LangGraph", "Prompt Design", "LoRA", "Groq", "Qwen"],
    accent: "from-violet-500/30 to-pink-500/20",
  },
  {
    title: "Data Science",
    items: ["Pandas", "NumPy", "Matplotlib", "Plotly", "Statistics", "Model Eval"],
    accent: "from-emerald-500/30 to-cyan-500/20",
  },
  {
    title: "Backend & Web",
    items: ["FastAPI", "Next.js", "React", "REST APIs", "SQL", "Vercel"],
    accent: "from-pink-500/30 to-violet-500/20",
  },
  {
    title: "Core Technologies",
    items: ["C++", "Java", "GitHub", "Linux", "Problem Solving", "Debugging"],
    accent: "from-cyan-500/30 to-emerald-500/20",
  },
];

const certificates = [
  "Machine Learning Specialization",
  "Deep Learning Specialization",
  "IBM AI Engineering & Machine Learning",
  "Google AI Essentials",
  "Agentic AI Bootcamp 2026",
  "BS Artificial Intelligence",
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0e17] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-bg absolute inset-0 opacity-40" />
        <div className="radial-glow absolute left-[-12rem] top-[-6rem] h-[32rem] w-[32rem] rounded-full bg-cyan-500/18 blur-3xl" />
        <div className="radial-glow absolute right-[-10rem] top-[10rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="glass-card sticky top-4 z-30 mb-12 flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-sm font-bold text-slate-950">
              HZ
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-cyan-300 uppercase">Hasana</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="link-underline">Projects</a>
            <a href="#experience" className="link-underline">Experience</a>
            <a href="#skills" className="link-underline">Skills</a>
            <a href="#contact" className="link-underline">Contact</a>
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 transition hover:border-cyan-400 hover:bg-cyan-400/20"
          >
            <Mail size={16} />
            Email
          </a>
        </header>

        <section id="hero" className="grid items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for AI Engineering & Research Roles
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">{profile.title.split("|")[0].trim()}</p>
              <h1 className="font-display text-5xl font-bold tracking-[-0.08em] text-white sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-xl text-xl text-slate-300 sm:text-2xl">
                {profile.title}
              </p>
            </div>

            <p className="max-w-xl text-base leading-7 text-slate-400">
              {profile.bio}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(0,217,255,0.25)] transition hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight size={18} />
              </a>
              <a
                href={`mailto:${profile.email}?subject=Resume%20Request`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/5"
              >
                Request Resume
              </a>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass-icon">
                <GitBranch size={18} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass-icon">
                <BriefcaseBusiness size={18} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="glass-icon">
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="glass-card relative overflow-hidden rounded-[2rem] p-5 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,217,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.22),transparent_30%)]" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-slate-400">
                  <span>System</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-cyan-200">Live</span>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <div>
                    <p className="text-sm text-slate-400">Primary focus</p>
                    <p className="mt-2 text-2xl font-semibold text-white">Agentic AI</p>
                  </div>
                  <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-3 text-violet-200">
                    <BrainCircuit size={26} />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-cyan-300">
                      <Sparkles size={16} />
                      <span className="text-xs uppercase tracking-[0.2em]">Research</span>
                    </div>
                    <p className="text-3xl font-bold">8+</p>
                    <p className="text-sm text-slate-400">AI-driven projects</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 flex items-center gap-2 text-violet-300">
                      <Zap size={16} />
                      <span className="text-xs uppercase tracking-[0.2em]">Impact</span>
                    </div>
                    <p className="text-3xl font-bold">2300x</p>
                    <p className="text-sm text-slate-400">speedup in optimization work</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-400">
                    <Code2 size={14} />
                    Core stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'PyTorch', 'FastAPI', 'LangGraph', 'RAG', 'Qdrant'].map((item) => (
                      <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="section-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Featured work</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Selected projects</h2>
            </div>
            <p className="max-w-xl text-slate-400">Selected projects showcasing expertise in GenAI, computer vision, and agentic workflows.</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="glass-card group flex h-full flex-col rounded-[1.75rem] p-6"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10"
                    aria-label={`Open details for ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </button>
                </div>

                <p className="mb-5 text-sm leading-6 text-slate-300">{project.subtitle}</p>

                <ul className="mb-5 space-y-3 text-sm text-slate-300">
                  {project.problem.map((item) => (
                    <li key={item} className="flex gap-3">
                      <BadgeCheck className="mt-0.5 shrink-0 text-cyan-300" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span key={tool} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                        <p className="text-lg font-semibold text-violet-200">{metric.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.14em] text-slate-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
                  >
                    View details
                    <ExternalLink size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Track record</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Experience & growth</h2>
          </div>

          <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-400/70 before:via-violet-400/70 before:to-transparent">
            {experience.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full border-2 border-cyan-300/70 bg-[#0a0e17] shadow-[0_0_18px_rgba(0,217,255,0.35)]" />
                <div className="glass-card rounded-[1.5rem] p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="mt-1 text-cyan-200">{job.company}</p>
                    </div>
                    <div className="text-sm text-slate-400">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">{job.description}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {job.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tool) => (
                      <span key={tool} className="rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-1 text-[11px] font-medium text-violet-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Capabilities</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Technical skills</h2>
            </div>
            <p className="max-w-xl text-slate-400">Focused on building end-to-end AI systems, from data modeling to product-ready deployment.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${skill.accent} p-[1px]`}
              >
                <div className="h-full rounded-[calc(1.5rem-1px)] bg-[#111827]/80 p-4">
                  <p className="mb-4 text-base font-semibold text-white">{skill.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certificates" className="section-shell">
          <div className="mb-8">
            <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Recognition</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Certifications & achievements</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.38, delay: index * 0.06 }}
                className="glass-card rounded-[1.4rem] p-5"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-200">
                    <BriefcaseBusiness size={18} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-300">
                    Verified
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{certificate}</h3>
                <p className="mt-3 text-sm text-slate-400">Focused on applied AI, real-world ML systems, and practical deployment thinking.</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pb-8">
          <div className="glass-card rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium tracking-[0.28em] text-cyan-300 uppercase">Let’s build</p>
                  <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Got an interesting project in mind?</h2>
                </div>

                <p className="text-base leading-7 text-slate-300">
                  I enjoy turning complex AI ideas into usable products — from research prototypes to production-aware systems.
                </p>

                <div className="space-y-3 text-sm text-slate-300">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-cyan-200">
                    <Mail size={16} className="text-cyan-300" />
                    {profile.email}
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cyan-200">
                    <BriefcaseBusiness size={16} className="text-cyan-300" />
                    LinkedIn profile
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-cyan-200">
                    <GitBranch size={16} className="text-cyan-300" />
                    github.com/hasana157
                  </a>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Full Name</span>
                    <input className="input-field" type="text" placeholder="Your name" />
                  </label>
                  <label className="block text-sm text-slate-300">
                    <span className="mb-2 block">Email</span>
                    <input className="input-field" type="email" placeholder="you@example.com" />
                  </label>
                </div>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Project type</span>
                  <select className="input-field" defaultValue="Generative AI">
                    <option>Generative AI</option>
                    <option>Computer Vision</option>
                    <option>Agentic AI</option>
                    <option>Research & Prototyping</option>
                  </select>
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block">Message</span>
                  <textarea className="input-field min-h-32 resize-none" placeholder="Tell me about your project, timeline, and goals." />
                </label>

                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-3 font-semibold text-slate-950 transition hover:scale-[1.01]">
                  Send Message
                  <Inbox size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-400 sm:flex-row">
          <p>© 2026 Hasana Zahid</p>
          <p>Building AI systems that are useful, measurable, and impactful.</p>
        </footer>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0e17]/80 px-4 py-8 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#101827] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-slate-300"
              >
                Close
              </button>

              <div className="pr-12">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">{selectedProject.category}</p>
                <h3 className="mt-2 text-3xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-300">{selectedProject.subtitle}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                    <p className="text-xl font-bold text-violet-200">{metric.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="mb-3 text-lg font-semibold text-white">Problem</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {selectedProject.problem.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-lg font-semibold text-white">Solution</h4>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {selectedProject.solution.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedProject.stack.map((tool) => (
                  <span key={tool} className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-200">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2.5 font-semibold text-slate-950"
                >
                  View project
                  <ArrowUpRight size={16} />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 font-medium text-slate-200"
                >
                  Keep exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
