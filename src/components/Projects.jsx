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
    live: 'https://rootlayer.app',
    description: 'AI-powered web compliance SaaS I founded and built solo. Delivers WCAG 2.2 AA accessibility audits and GDPR/CCPA privacy assessments by combining deterministic axe-core and Playwright scanning with LLM adjudication, plus full-site crawling, scheduled monitoring, multi-tenant workspaces and Stripe billing.',
    tech: ['Next.js', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Playwright', 'axe-core', 'Stripe', 'Docker']
  },
  {
    title: 'Thespis - NPC Minds for Game Developers',
    featured: true,
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/thespis.jpg',
    github: 'https://github.com/coderback/Thespis',
    live: 'https://thespis-production.up.railway.app',
    description: 'AI toolkit that gives NPCs minds of their own: they remember, hold beliefs that can be false, and act when the player isn\'t looking. Code decides every action and a language model only voices it, with each line checked against the events and beliefs it cites. In measured runs, 87% of NPC turns needed no model call and the validator blocked 0 of 91 model replies.',
    tech: ['Python', 'JavaScript', 'Vite', 'Docker', 'Railway', 'LLM Validation']
  },
  {
    title: 'Tubesense - GPS-Free London Underground Noise Mapping',
    featured: true,
    tags: ['AI & ML', 'Data Science'],
    image: '/assets/tubesense.jpg',
    github: 'https://github.com/coderback/Tubesense',
    live: 'https://tubesense-production.up.railway.app',
    description: 'Built for Encode London 2026. Turns Tube rides recorded on a phone into measurements placed between stations without GPS, reaching a median of 1.95 m against 8.2 m for a timetable in a pre-registered test on new rides. A Gemini agent drafts a cited evidence pack from TfL records, a deterministic verifier checks every quote and number, and a human approves it.',
    tech: ['Python', 'Gemini', 'MongoDB Atlas', 'Dynamic Time Warping', 'Signal Processing', 'Railway']
  },
  {
    title: 'ColonoScan - Colon Cancer Detection Platform',
    featured: true,
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/prediction.png',
    github: 'https://github.com/coderback/colonscan',
    live: 'https://colonoscan-demo.vercel.app',
    description: 'Final-year dissertation: a containerised medical AI platform combining histopathology and colonoscopy video analysis. Pairs an EfficientNet-B4 UNet++ model for real-time polyp segmentation with explainable AI (Grad-CAM, saliency maps), served through FastAPI/PyTorch microservices.',
    tech: ['Next.js', 'React', 'Django REST Framework', 'FastAPI', 'PyTorch', 'Celery', 'Redis', 'OpenCV', 'PostgreSQL', 'Docker']
  },
  {
    title: 'Olimpia - High-Performance AI Chess Engine (AI Chessathon)',
    featured: true,
    tags: ['Systems', 'AI & ML'],
    image: '/assets/olimpia-chess.png',
    github: 'https://github.com/coderback/olimpia-aichessathon',
    description: 'Chess engine for the Optiver-sponsored AI Chessathon 2026. Joined on Day 3 and climbed from #241 to #82 of 485+ teams in under 48 hours. Compiling the search with Numba lifted throughput from 13,000 to ~2 million nodes/sec, and changes shipped only on statistically significant results, including a time-management fix worth +61 Elo (95% CI [+35, +88], 513 games).',
    tech: ['Python', 'Numba', 'Bitboards', 'Alpha-Beta Search', 'PVS', 'Transposition Tables', 'python-chess']
  },
  {
    title: 'WC2026 - Probabilistic FIFA World Cup Forecasting Engine',
    featured: true,
    tags: ['Data Science'],
    image: '/assets/fifa-wc2026.png',
    github: 'https://github.com/coderback/fifa-wc2026-prediction-model',
    live: 'https://wc2026-forecast-ashy.vercel.app',
    description: 'Elo-parameterised Dixon-Coles model fit on ~49,000 international matches since 1872, wrapped in a 50,000-run Monte Carlo bracket simulation. Validated with a leak-free walk-forward backtest against de-vigged bookmaker odds, it ranked the eventual four semifinalists as its top four by champion probability.',
    tech: ['Python', 'Dixon-Coles', 'Monte Carlo Simulation', 'LightGBM', 'XGBoost', 'Pandas', 'NumPy', 'Jupyter']
  },
  {
    title: 'ControlNet from Scratch - Parity-Verified Diffusion',
    tags: ['AI & ML'],
    image: '/assets/controlnet.png',
    github: 'https://github.com/coderback/ControlNet-Implementation',
    live: 'https://controlnet-canny-gallery.vercel.app',
    description: 'From-scratch, mathematical parity-verified ControlNet for Stable Diffusion v1.5 with end-to-end training pipeline, zero-convolution growth validation, and COCO Canny conditioning.',
    tech: ['Python', 'PyTorch', 'HuggingFace Diffusers', 'Stable Diffusion', 'OpenCV', 'Jupyter', 'CUDA']
  },
  {
    title: 'Unsaid - AI 10-K Disclosure Diffing & Removal Detector',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/unsaid.png',
    github: 'https://github.com/coderback/Unsaid',
    live: 'https://unsaid-10k-demo.vercel.app',
    description: 'AI-powered 10-K risk disclosure analysis engine comparing SEC Item 1A/7A filings across years to surface removed, softened, and new risk language using semantic alignment and LLM judgment.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Tailwind CSS', 'LLM', 'SEC EDGAR']
  },
  {
    title: 'Fair on Paper - Pricing a Prop-Firm Challenge',
    tags: ['Data Science'],
    image: '/assets/fair-on-paper.png',
    github: 'https://github.com/coderback/prop-challenge-pricing',
    live: 'https://fair-on-paper.vercel.app',
    description: 'Working paper and full reproduction package pricing a retail prop firm\'s published evaluation contract on twenty years of intraday index prices at measured broker costs, with every hypothesis fixed and committed before its run.',
    tech: ['Python', 'NumPy', 'Pandas', 'SciPy', 'Backward Induction', 'Pre-registration', 'LaTeX']
  },
  {
    title: 'Zhang (2025) Replication - Macro Alpha from News Sentiment',
    tags: ['Data Science'],
    image: '/assets/zhang-replication.png',
    github: 'https://github.com/coderback/zhang2025-replication',
    live: 'https://zhang2025-replication.vercel.app',
    description: 'Pre-registered replication of a paper reporting Sharpe ratios of 4.65 to 5.87 from FinBERT sentiment on GDELT headlines. Result: not replicated. All 18 asset, timing and model combinations fall between -1.00 and +0.02, and none beats random-sign trading at the same costs.',
    tech: ['Python', 'FinBERT', 'XGBoost', 'GDELT', 'scikit-learn', 'Pandas', 'Pre-registration']
  },
  {
    title: 'Windrush - AI Career Advisor',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/windrush-ai.png',
    github: 'https://github.com/coderback/Windrush',
    live: 'https://windrush-career-demo.vercel.app',
    description: 'Agentic career advisor that parses CVs, scores each skill against O*NET AI automation exposure data, ranks matched jobs by a fit-vs-risk composite score, generates tailored cover letters, and autonomously submits applications via browser automation with a live CDP screencast feed.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Docker', 'Nginx', 'Playwright', 'Claude Opus (Anthropic)', 'Groq', 'OpenAI', 'Scikit-learn']
  },
  {
    title: 'Canopy - Multi-Entity Command Centre for Xero',
    tags: ['Full-Stack'],
    image: '/assets/canopy.jpg',
    github: 'https://github.com/coderback/Canopy',
    live: 'https://canopy-xero-demo.vercel.app',
    description: 'Multi-entity financial operations command center where AI proposes structured cross-organization chart of accounts mappings with human approval, deterministic execution, and drift-aware health monitoring.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Xero API']
  },
  {
    title: 'cambium - Structure-Conditioned Graph-ML Core',
    tags: ['AI & ML'],
    image: '/assets/cambium.png',
    github: 'https://github.com/coderback/cambium',
    live: 'https://cambium-gates.vercel.app',
    description: 'Shared graph machine learning core for structure-conditioned models featuring temporal-holdout evaluation harnesses, GNN encoders, and specialized adapters for fraud detection, risk, and discovery.',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'GNN', 'NetworkX', 'Scikit-learn', 'NumPy']
  },
  {
    title: 'Black Hole Simulation - Real-time Relativistic Ray Tracer',
    tags: ['Systems'],
    image: '/assets/blackhole-simulation.png',
    github: 'https://github.com/coderback/blackhole',
    description: 'GPU-accelerated black hole visualization ray tracing light along geodesics through curved spacetime in real time. Features Kerr & Schwarzschild metrics, gravitational lensing, accretion disks, and relativistic jets. Builds on kavan010/black_hole.',
    tech: ['C++17', 'OpenGL 4.3', 'GLSL Compute Shaders', 'CMake', 'GLFW',
  'GLEW', 'GLM']
  },
  {
    title: 'GRIT - Mobile Fitness & AI Nutrition Coach',
    tags: ['Full-Stack'],
    image: '/assets/grit.png',
    github: 'https://github.com/coderback/Grit',
    live: 'https://grit-demo-pink.vercel.app',
    description: 'Full-stack mobile fitness platform combining macro tracking, habit building, activity logging, social challenges, and Claude-powered AI coaching in an opinionated dark-mode mobile experience.',
    tech: ['React Native', 'Expo', 'NestJS', 'Supabase', 'TypeScript', 'Claude AI', 'Tailwind CSS']
  },
  {
    title: 'DRW Crypto Market Prediction - Competition Solution',
    tags: ['Data Science'],
    image: '/assets/Market Features Analysis.png',
    github: 'https://github.com/coderback/drw-crypto-market-prediction',
    live: 'https://drw-crypto-signal-lab.vercel.app',
    description: 'Cryptocurrency market prediction competition solution comparing three ML approaches: EDA-led feature analysis, Ridge regression (0.1175 validation correlation), and a neural architecture with AutoEncoder synthesis.',
    tech: ['Python', 'PyTorch', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Jupyter', 'Matplotlib', 'Seaborn', 'Plotly']
  },
  {
    title: 'Credit Card Fraud Detection - End-to-End ML Analysis',
    tags: ['Data Science'],
    image: '/assets/fraud-detection.png',
    github: 'https://github.com/coderback/Credit-Card-Fraud-Detection',
    live: 'https://fraud-detection-explorer.vercel.app',
    description: 'Comprehensive machine learning analysis for credit card fraud detection achieving 86.61% AUC-PR with $9,811 net benefit per test period. Features advanced class imbalance handling and business impact analysis.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Imbalanced-learn', 'Jupyter']
  },
  {
    title: 'Mountain Rescue Simulation - Graph Neural Network for Multi-Agent Reinforcement Learning (GNN-MARL)',
    tags: ['AI & ML'],
    image: '/assets/mountain_rescue_simulation.png',
    github: 'https://github.com/coderback/GNN-MARL-Rescue-Robot-Operations',
    live: 'https://mountain-rescue-replay.vercel.app',
    description: 'Multi-agent mountain rescue simulation comparing rule-based coordination with a Graph Neural Network reinforcement learning mode. The replay shows recorded runs of each mode and reports the training results as they are: the learned policy did not beat the rule-based coordination.',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'Mesa', 'Solara', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    title: 'Premier League Forecasting System',
    tags: ['Data Science'],
    image: '/assets/pl-forecast.png',
    github: 'https://github.com/coderback/premier-league-forcast-system',
    live: 'https://pl-forecast-ledger.vercel.app',
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
    live: 'https://uweacs.co.uk',
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
    live: 'https://patient-dashboard-demo.vercel.app',
    description: 'Group project: healthcare data visualization and management system',
    tech: ['Electron.js', 'Python', 'Scikit-learn', 'SQLite']
  },
  {
    title: 'Restaurant Management System',
    tags: ['Full-Stack'],
    image: '/assets/Horizon Restaurants RMS 07_03_2025 13_33_37.png',
    github: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
    live: 'https://horizon-restaurant-demo.vercel.app',
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
