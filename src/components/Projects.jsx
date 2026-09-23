'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'RootLayer - Autonomous Web Compliance & Accessibility Platform',
    featured: true,
    tags: ['Full-Stack', 'AI & ML'],
    image: '/assets/rootlayer.jpg',
    github: 'https://github.com/coderback/RootLayer',
    description: 'AI-powered web compliance platform delivering automated WCAG 2.2 AA accessibility audits and GDPR/CCPA privacy assessments. Features multi-page Playwright sitemap crawling, axe-core analysis, multi-agent LLM adjudication, scheduled monitoring, and Stripe billing.',
    tech: ['Next.js', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Playwright', 'axe-core', 'Stripe', 'Docker']
  },
  {
    title: 'Olimpia - High-Performance AI Chess Engine (AI Chessathon)',
    featured: true,
    tags: ['Systems', 'AI & ML'],
    image: '/assets/olimpia-chess.png',
    github: 'https://github.com/coderback/olimpia-aichessathon',
    description: 'High-performance autonomous chess engine built for the AI Chessathon tournament. Features custom bitboards with magic attack lookups, JIT-compiled Numba search achieving 1.4-2.0M nodes/sec, negamax alpha-beta with PVS, 2M-entry transposition tables, aspiration windows, null-move pruning, and tapered evaluation.',
    tech: ['Python', 'Numba', 'Bitboards', 'Alpha-Beta Search', 'PVS', 'Transposition Tables', 'python-chess']
  },
  {
    title: 'ControlNet from Scratch - Parity-Verified Diffusion',
    featured: true,
    tags: ['AI & ML'],
    image: '/assets/controlnet.png',
    github: 'https://github.com/coderback/ControlNet-Implementation',
    description: 'From-scratch, mathematical parity-verified ControlNet for Stable Diffusion v1.5 with end-to-end training pipeline, zero-convolution growth validation, and COCO Canny conditioning.',
    tech: ['Python', 'PyTorch', 'HuggingFace Diffusers', 'Stable Diffusion', 'OpenCV', 'Jupyter', 'CUDA']
  },
  {
    title: 'Unsaid - AI 10-K Disclosure Diffing & Removal Detector',
    featured: true,
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/unsaid.png',
    github: 'https://github.com/coderback/Unsaid',
    description: 'AI-powered 10-K risk disclosure analysis engine comparing SEC Item 1A/7A filings across years to surface removed, softened, and new risk language using semantic alignment and LLM judgment.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Tailwind CSS', 'LLM', 'SEC EDGAR']
  },
  {
    title: 'Windrush - AI Career Advisor',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/windrush-ai.png',
    github: 'https://github.com/coderback/Windrush',
    description: 'Agentic career advisor that parses CVs, scores each skill against O*NET AI automation exposure data, ranks matched jobs by a fit-vs-risk composite score, generates tailored cover letters, and autonomously submits applications via browser automation with a live CDP screencast feed.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Docker', 'Nginx', 'Playwright', 'Claude Opus (Anthropic)', 'Groq', 'OpenAI', 'Scikit-learn']
  },
  {
    title: 'Canopy - Multi-Entity Command Centre for Xero',
    tags: ['Full-Stack'],
    image: '/assets/canopy.jpg',
    github: 'https://github.com/coderback/Canopy',
    description: 'Multi-entity financial operations command center where AI proposes structured cross-organization chart of accounts mappings with human approval, deterministic execution, and drift-aware health monitoring.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Xero API']
  },
  {
    title: 'cambium - Structure-Conditioned Graph-ML Core',
    tags: ['AI & ML'],
    image: '/assets/cambium.png',
    github: 'https://github.com/coderback/cambium',
    description: 'Shared graph machine learning core for structure-conditioned models featuring temporal-holdout evaluation harnesses, GNN encoders, and specialized adapters for fraud detection, risk, and discovery.',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'GNN', 'NetworkX', 'Scikit-learn', 'NumPy']
  },
  {
    title: 'WC2026 - Probabilistic FIFA World Cup Forecasting Engine',
    tags: ['Data Science'],
    image: '/assets/fifa-wc2026.png',
    github: 'https://github.com/coderback/fifa-wc2026-prediction-model',
    description: 'Goal-based probabilistic forecasting system for the 2026 FIFA World Cup using Elo-parameterized Dixon-Coles models, gradient-boosted ensemble blending, and 50,000-run Monte Carlo simulations with backtesting against de-vigged bookmaker odds.',
    tech: ['Python', 'Dixon-Coles', 'Monte Carlo Simulation', 'LightGBM', 'XGBoost', 'Pandas', 'NumPy', 'Jupyter']
  },
  {
    title: 'AirHop Bristol - Break scheduling and Kitchen management system',
    tags: ['Full-Stack'],
    image: '/assets/park-dashboard.png',
    live: 'https://airhop-shift.vercel.app/',
    description: 'Venue management platform with intelligent break scheduling and kitchen order management',
    tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'Python', 'FastAPI', 'PostgreSQL',
  'Redis', 'Docker', 'Tailwind CSS', 'Selenium', 'JWT', 'Scikit-learn']
  },
  {
    title: 'Black Hole Simulation - Real-time Relativistic Ray Tracer',
    tags: ['Systems'],
    image: '/assets/blackhole-simulation.png',
    github: 'https://github.com/coderback/space_simulation',
    description: 'GPU-accelerated black hole visualization implementing Einstein\'s field equations with real-time ray tracing through curved spacetime. Features Kerr & Schwarzschild metrics, gravitational lensing, accretion disks, and relativistic jets.',
    tech: ['C++17', 'OpenGL 4.3', 'GLSL Compute Shaders', 'CMake', 'GLFW',
  'GLEW', 'GLM', 'CUDA']
  },
  {
    title: 'ColonScan - Colon Cancer Segmentation & Classification',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/prediction.png',
    github: 'https://github.com/coderback/colonscan',
    description: 'AI-powered medical imaging analysis for colon cancer detection',
    tech: ['React', 'Next.js', 'Django', 'PostgreSQL', 'Python', 'Pytorch', 'Tailwind CSS', 'OpenCV', 'Flask', 'Nginx', 'Redis', 'Docker']
  },
  {
    title: 'GRIT - Mobile Fitness & AI Nutrition Coach',
    tags: ['Full-Stack'],
    image: '/assets/grit.png',
    github: 'https://github.com/coderback/Grit',
    description: 'Full-stack mobile fitness platform combining macro tracking, habit building, activity logging, social challenges, and Claude-powered AI coaching in an opinionated dark-mode mobile experience.',
    tech: ['React Native', 'Expo', 'NestJS', 'Supabase', 'TypeScript', 'Claude AI', 'Tailwind CSS']
  },
  {
    title: 'DRW Crypto Market Prediction - Competition Solution',
    tags: ['Data Science'],
    image: '/assets/Market Features Analysis.png',
    github: 'https://github.com/coderback/drw-crypto-market-prediction',
    description: 'Comprehensive cryptocurrency market prediction solution achieving 89.7% of competition winner performance. Features three distinct ML approaches: EDA analysis, Ridge regression (0.1175 correlation), and a neural architecture with AutoEncoder synthesis.',
    tech: ['Python', 'PyTorch', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Jupyter', 'Matplotlib', 'Seaborn', 'Plotly']
  },
  {
    title: 'Credit Card Fraud Detection - End-to-End ML Analysis',
    tags: ['Data Science'],
    image: '/assets/fraud-detection.png',
    github: 'https://github.com/coderback/Credit-Card-Fraud-Detection',
    description: 'Comprehensive machine learning analysis for credit card fraud detection achieving 86.61% AUC-PR with $9,811 net benefit per test period. Features advanced class imbalance handling and business impact analysis.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Imbalanced-learn', 'Jupyter']
  },
  {
    title: 'Mountain Rescue Simulation - Graph Neural Network for Multi-Agent Reinforcement Learning (GNN-MARL)',
    tags: ['AI & ML'],
    image: '/assets/mountain_rescue_simulation.png',
    github: 'https://github.com/coderback/AMAS-resit-portfolio',
    description: 'Multi-agent reinforcement learning system for mountain rescue using Graph Neural Networks',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'Mesa', 'Solara', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    title: 'Premier League Forecasting System',
    tags: ['Data Science'],
    image: '/assets/pl-forecast.png',
    github: 'https://github.com/coderback/premier-league-forcast-system',
    description: 'Walk-forward Premier League match-outcome and season simulation engine featuring production Dixon-Coles goal expectation models, Monte Carlo table projections, and betting market benchmark validation.',
    tech: ['Python', 'Dixon-Coles', 'Monte Carlo Simulation', 'Pandas', 'NumPy', 'Scikit-learn']
  },
  {
    title: 'Algorender - Data structure & Algorithms Visualiser',
    tags: ['Full-Stack'],
    image: '/assets/algorender.png',
    github: 'https://github.com/coderback/Algorender',
    live: 'https://algorender.vercel.app/',
    description: 'Interactive visualization tool for data structures and algorithms',
    tech: ['React', 'Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS']
  },
  {
    title: 'UWE African Caribbean Society - Community Website',
    tags: ['Full-Stack'],
    image: '/assets/uwe-acs.png',
    github: 'https://github.com/coderback/uwe-acs-webapp',
    live: 'https://uwe-acs.vercel.app/',
    description: 'Community website built for UWE Bristol ACS society celebrating African and Caribbean culture at UWE Bristol with interactive features and smooth animations',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'TobiOS - Operating System Simulation',
    tags: ['Systems'],
    image: '/assets/TobiOS.png',
    github: 'https://github.com/coderback/TobiOS',
    description: 'Operating system simulation that demonstrates core OS concepts.',
    tech: ['C++'],
  },
  {
    title: 'Patient Data Dashboard',
    tags: ['Full-Stack'],
    image: '/assets/Medical Dashboard 05_03_2025 17_52_30.png',
    github: 'https://github.com/DinaMetwalli/Patient-Data-Dashboard',
    description: 'Healthcare data visualization and management system',
    tech: ['Electron.js', 'Python', 'Scikit-learn', 'SQLite']
  },
  {
    title: 'Restaurant Management System',
    tags: ['Full-Stack'],
    image: '/assets/Horizon Restaurants RMS 07_03_2025 13_33_37.png',
    github: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
    description: 'Full-featured restaurant operations and management platform',
    tech: ['Custom Tkinter', 'Python', 'MySQL']
  },
];

const FILTERS = ['All', 'AI & ML', 'Data Science', 'Full-Stack', 'Systems'];
const INITIAL_VISIBLE = 6;
const MAX_CARD_PILLS = 5;

const featuredProjects = projects.filter((p) => p.featured);
const otherProjects = projects.filter((p) => !p.featured);

// Titles are written as "Name - Tagline"; split them so the name can lead.
function splitTitle(title) {
  const [name, ...rest] = title.split(' - ');
  return { name, tagline: rest.join(' - ') };
}

function GitHubIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function ExternalIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function TechPill({ children }) {
  return (
    <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700 dark:bg-neutral-700 dark:text-gray-200">
      {children}
    </span>
  );
}

function ProjectLinks({ project, size = 'md' }) {
  const sizing = size === 'sm' ? 'text-sm px-4 py-1.5' : 'text-sm sm:text-base px-5 py-2';
  return (
    <div className="flex flex-wrap gap-3">
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} on GitHub`}
          className={`btn btn-outline ${sizing} whitespace-nowrap`}
        >
          <span className="flex items-center gap-2">
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </span>
        </Link>
      )}
      {project.live && (
        <Link
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Live demo of ${project.title}`}
          className={`btn btn-primary ${sizing} whitespace-nowrap`}
        >
          <span className="flex items-center gap-2">
            <ExternalIcon className="w-4 h-4" />
            Live Demo
          </span>
        </Link>
      )}
    </div>
  );
}

function FeaturedCard({ project, index }) {
  const { name, tagline } = splitTitle(project.title);
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-bold uppercase tracking-wider text-forest dark:text-forest-light">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-spartan leading-tight">{name}</h3>
        {tagline && (
          <p className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 mt-1">{tagline}</p>
        )}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-5 mb-6">
          {project.tech.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>
        <div className="mt-auto">
          <ProjectLinks project={project} />
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project }) {
  const { name, tagline } = splitTitle(project.title);
  const hiddenTech = project.tech.length - MAX_CARD_PILLS;
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="aspect-[2/1] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={250}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold font-spartan leading-snug">{name}</h3>
        {tagline && <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mt-0.5">{tagline}</p>}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
          {project.tech.slice(0, MAX_CARD_PILLS).map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
          {hiddenTech > 0 && (
            <span
              className="px-2.5 py-1 text-xs font-medium text-gray-500 dark:text-gray-400"
              title={project.tech.slice(MAX_CARD_PILLS).join(', ')}
            >
              +{hiddenTech} more
            </span>
          )}
        </div>
        <div className="mt-auto">
          <ProjectLinks project={project} size="sm" />
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === 'All' ? otherProjects : otherProjects.filter((p) => p.tags.includes(filter));
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);

  const selectFilter = (f) => {
    setFilter(f);
    setShowAll(false);
  };

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-16 py-16 sm:py-20 bg-white dark:bg-neutral-900">
      <p className="text-lg text-center font-light">Browse My Recent</p>
      <h2 className="text-4xl sm:text-5xl text-center font-extrabold mb-10 sm:mb-14 font-spartan">Projects</h2>

      <div className="max-w-6xl mx-auto">
        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* More projects */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-spartan">More Projects</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Across AI, data science, full-stack and systems work
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {FILTERS.map((f) => {
                const count = f === 'All' ? otherProjects.length : otherProjects.filter((p) => p.tags.includes(f)).length;
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => selectFilter(f)}
                    aria-pressed={active}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                      active
                        ? 'bg-neutral-900 text-white border-neutral-900 dark:bg-white dark:text-black dark:border-white'
                        : 'border-gray-300 text-gray-700 hover:border-forest hover:text-forest dark:border-gray-600 dark:text-gray-300 dark:hover:border-forest-light dark:hover:text-forest-light'
                    }`}
                  >
                    {f} <span className={active ? 'opacity-60' : 'text-gray-400'}>{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visible.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length > INITIAL_VISIBLE && (
            <div className="flex justify-center mt-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn btn-primary px-6 py-3 text-base font-semibold"
              >
                {showAll ? 'Show Less' : `Show All ${filtered.length} Projects`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
