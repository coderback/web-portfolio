// All site content lives here so the section components only handle layout.

export const LINKS = {
  email: 'tobiojebiyi@gmail.com',
  github: 'https://github.com/coderback',
  linkedin: 'https://www.linkedin.com/in/timothy-oluwatobi-ojebiyi/',
  orcid: 'https://orcid.org/0009-0009-7786-8549',
  cv: '/documents/TIMOTHY_OJEBIYI_CV.pdf',
};

export const PROOF = [
  { value: '20', label: 'Projects · 6 featured', tone: 'ink' },
  { value: '2', label: 'Pre-registered papers', tone: 'cobalt' },
  { value: '#82', label: 'Of 485+ teams · Chessathon', tone: 'yellow' },
  { value: '1.95m', label: 'Tubesense median, no GPS', tone: 'tint' },
];

// Months counted from September 2022; the timeline runs to the end of 2026.
export const TIMELINE_SPAN = 52;
export const TIMELINE = [
  { label: 'UWE Bristol', dates: 'Sep 22 – Nov 25', from: 0, to: 38, tone: 'cobalt' },
  { label: 'Nomensa', dates: 'Jul – Aug 24', from: 22, to: 23, tone: 'coral' },
  { label: 'CarbonTrac', dates: 'Jul – Sep 25', from: 34, to: 36, tone: 'coral' },
  { label: 'RootLayer Ltd', dates: 'May 26 – now', from: 44, to: 50, tone: 'coral' },
];

export const FEATURED = [
  {
    id: 'rootlayer',
    title: 'RootLayer',
    subtitle: 'Autonomous web compliance and accessibility platform',
    tags: ['Full-Stack', 'AI & ML'],
    image: '/assets/rootlayer.jpg',
    live: 'https://rootlayer.app',
    result: 'WCAG 2.2 AA + GDPR/CCPA audits, built solo',
    blurb: 'Deterministic axe-core and Playwright scans, adjudicated by an LLM, with crawling, monitoring and billing.',
    description:
      'AI-powered web compliance SaaS I founded and built solo. Delivers WCAG 2.2 AA accessibility audits and GDPR/CCPA privacy assessments by combining deterministic axe-core and Playwright scanning with LLM adjudication, plus full-site crawling, scheduled monitoring, multi-tenant workspaces and Stripe billing.',
    tech: ['Next.js', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Playwright', 'axe-core', 'Stripe', 'Docker'],
  },
  {
    id: 'algorender',
    title: 'Algorender',
    subtitle: 'Data structure & algorithms visualiser',
    tags: ['Full-Stack'],
    image: '/assets/algorender-home.jpg',
    github: 'https://github.com/coderback/Algorender',
    live: 'https://algorender.vercel.app/',
    result: 'Sorting, graphs, trees, DP and ML, step by step',
    blurb: 'Step through algorithms forwards and backwards, with the code and the reason for every move, then predict the next step.',
    description: 'Interactive visualization tool for data structures and algorithms.',
    tech: ['React', 'Next.js', 'TypeScript', 'D3.js', 'Tailwind CSS'],
  },
  {
    id: 'thespis',
    title: 'Thespis',
    subtitle: 'NPC minds for game developers',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/thespis.jpg',
    github: 'https://github.com/coderback/Thespis',
    live: 'https://thespis-production.up.railway.app',
    result: '87% of NPC turns need no model call',
    blurb: 'NPCs that remember and hold beliefs. Code decides every action; a language model only voices it.',
    description:
      "AI toolkit that gives NPCs minds of their own: they remember, hold beliefs that can be false, and act when the player isn't looking. Code decides every action and a language model only voices it, with each line checked against the events and beliefs it cites. In measured runs, 87% of NPC turns needed no model call and the validator blocked 0 of 91 model replies.",
    tech: ['Python', 'JavaScript', 'Vite', 'Docker', 'Railway', 'LLM Validation'],
  },
  {
    id: 'olimpia',
    title: 'Olimpia',
    subtitle: 'High-performance AI chess engine (AI Chessathon)',
    tags: ['Systems', 'AI & ML'],
    image: '/assets/olimpia-board.jpg',
    github: 'https://github.com/coderback/olimpia-aichessathon',
    live: 'https://olimpia-chess.vercel.app',
    result: '#241 → #82 of 485+ teams in under 48 h',
    blurb: 'Numba took the search from 13,000 to ~2 million nodes a second; changes shipped only on significant results.',
    description:
      'Chess engine for the Optiver-sponsored AI Chessathon 2026. Joined on Day 3 and climbed from #241 to #82 of 485+ teams in under 48 hours. Compiling the search with Numba lifted throughput from 13,000 to ~2 million nodes/sec, and changes shipped only on statistically significant results, including a time-management fix worth +61 Elo (95% CI [+35, +88], 513 games).',
    tech: ['Python', 'Numba', 'Bitboards', 'Alpha-Beta Search', 'PVS', 'Transposition Tables', 'python-chess'],
  },
  {
    id: 'wc2026',
    title: 'WC2026 Forecast',
    subtitle: 'Probabilistic FIFA World Cup forecasting engine',
    tags: ['Data Science'],
    image: '/assets/wc2026-knockout-bracket.jpg',
    github: 'https://github.com/coderback/fifa-wc2026-prediction-model',
    live: 'https://wc2026-forecast-ashy.vercel.app',
    result: 'Its top 4 were the actual 4 semifinalists',
    blurb: 'Elo-parameterised Dixon-Coles on ~49,000 matches, run through 50,000 simulated brackets.',
    description:
      'Elo-parameterised Dixon-Coles model fit on ~49,000 international matches since 1872, wrapped in a 50,000-run Monte Carlo bracket simulation. Validated with a leak-free walk-forward backtest against de-vigged bookmaker odds, it ranked the eventual four semifinalists as its top four by champion probability.',
    tech: ['Python', 'Dixon-Coles', 'Monte Carlo Simulation', 'LightGBM', 'XGBoost', 'Pandas', 'NumPy', 'Jupyter'],
  },
  {
    id: 'controlnet',
    title: 'ControlNet from Scratch',
    subtitle: 'Parity-verified diffusion',
    tags: ['AI & ML'],
    image: '/assets/controlnet.png',
    github: 'https://github.com/coderback/ControlNet-Implementation',
    live: 'https://controlnet-canny-gallery.vercel.app',
    result: 'Parity-verified ControlNet for Stable Diffusion v1.5',
    blurb: 'Built from scratch, with an end-to-end training pipeline, zero-convolution growth validation and COCO Canny conditioning.',
    description:
      'From-scratch, mathematical parity-verified ControlNet for Stable Diffusion v1.5 with end-to-end training pipeline, zero-convolution growth validation, and COCO Canny conditioning.',
    tech: ['Python', 'PyTorch', 'HuggingFace Diffusers', 'Stable Diffusion', 'OpenCV', 'Jupyter', 'CUDA'],
  },
];

export const PROJECT_FILTERS = ['All', 'AI & ML', 'Data Science', 'Full-Stack', 'Systems'];

export const OTHER_PROJECTS = [
  {
    title: 'Tubesense',
    tags: ['AI & ML', 'Data Science'],
    image: '/assets/tubesense.jpg',
    github: 'https://github.com/coderback/Tubesense',
    live: 'https://tubesense-production.up.railway.app',
    description:
      'Built for Encode London 2026. Turns Tube rides recorded on a phone into measurements placed between stations without GPS, reaching a median of 1.95 m against 8.2 m for a timetable in a pre-registered test on new rides. A Gemini agent drafts a cited evidence pack from TfL records, a deterministic verifier checks every quote and number, and a human approves it.',
    tech: ['Python', 'Gemini', 'MongoDB Atlas', 'Dynamic Time Warping', 'Signal Processing', 'Railway'],
  },
  {
    title: 'ColonoScan',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/prediction.png',
    github: 'https://github.com/coderback/colonscan',
    live: 'https://colonoscan-demo.vercel.app',
    description:
      'Final-year dissertation: a containerised medical AI platform combining histopathology and colonoscopy video analysis. Pairs an EfficientNet-B4 UNet++ model for real-time polyp segmentation with explainable AI (Grad-CAM, saliency maps), served through FastAPI/PyTorch microservices.',
    tech: ['Next.js', 'React', 'Django REST Framework', 'FastAPI', 'PyTorch', 'Celery', 'Redis', 'OpenCV', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Black Hole Simulation',
    tags: ['Systems'],
    image: '/assets/blackhole-simulation.png',
    github: 'https://github.com/coderback/blackhole',
    live: 'https://blackhole-webgl.vercel.app',
    description:
      'GPU-accelerated black hole visualization ray tracing light along Schwarzschild geodesics in real time, with a Kerr-inspired spin correction, gravitational lensing, accretion disks and relativistic jets. C++/OpenGL compute shaders with a WebGL2 port you can orbit in the browser. Builds on kavan010/black_hole.',
    tech: ['C++17', 'OpenGL 4.3', 'GLSL Compute Shaders', 'CMake', 'GLFW', 'GLEW', 'GLM'],
  },
  {
    title: 'Windrush',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/windrush-ai.png',
    github: 'https://github.com/coderback/Windrush',
    live: 'https://windrush-career-demo.vercel.app',
    description:
      'Agentic career advisor that parses CVs, scores each skill against O*NET AI automation exposure data, ranks matched jobs by a fit-vs-risk composite score, generates tailored cover letters, and autonomously submits applications via browser automation with a live CDP screencast feed.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'Python', 'Docker', 'Nginx', 'Playwright', 'Claude Opus (Anthropic)', 'Groq', 'OpenAI', 'Scikit-learn'],
  },
  {
    title: 'Unsaid',
    tags: ['AI & ML', 'Full-Stack'],
    image: '/assets/unsaid.png',
    github: 'https://github.com/coderback/Unsaid',
    live: 'https://unsaid-10k-demo.vercel.app',
    description:
      'AI-powered 10-K risk disclosure analysis engine comparing SEC Item 1A/7A filings across years to surface removed, softened, and new risk language using semantic alignment and LLM judgment.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'Tailwind CSS', 'LLM', 'SEC EDGAR'],
  },
  {
    title: 'Premier League Forecasting System',
    tags: ['Data Science'],
    image: '/assets/pl-season-table.jpg',
    github: 'https://github.com/coderback/premier-league-forcast-system',
    live: 'https://pl-forecast-ledger.vercel.app',
    description:
      'Walk-forward Premier League match-outcome and season simulation engine featuring production Dixon-Coles goal expectation models, Monte Carlo table projections, and betting market benchmark validation.',
    tech: ['Python', 'Dixon-Coles', 'Monte Carlo Simulation', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    title: 'cambium',
    tags: ['AI & ML'],
    image: '/assets/cambium-signed-gates.jpg',
    github: 'https://github.com/coderback/cambium',
    live: 'https://cambium-gates.vercel.app',
    description:
      'Shared graph machine learning core for structure-conditioned models featuring temporal-holdout evaluation harnesses, GNN encoders, and specialized adapters for fraud detection, risk, and discovery.',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'GNN', 'NetworkX', 'Scikit-learn', 'NumPy'],
  },
  {
    title: 'Canopy',
    tags: ['Full-Stack'],
    image: '/assets/canopy-gaps-grid.jpg',
    github: 'https://github.com/coderback/Canopy',
    live: 'https://canopy-xero-demo.vercel.app',
    description:
      'Multi-entity financial operations command center where AI proposes structured cross-organization chart of accounts mappings with human approval, deterministic execution, and drift-aware health monitoring.',
    tech: ['Next.js', 'FastAPI', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'Xero API'],
  },
  {
    title: 'Mountain Rescue Simulation (GNN-MARL)',
    tags: ['AI & ML'],
    image: '/assets/mountain-rescue-replay.jpg',
    github: 'https://github.com/coderback/GNN-MARL-Rescue-Robot-Operations',
    live: 'https://mountain-rescue-replay.vercel.app',
    description:
      'Multi-agent mountain rescue simulation comparing rule-based coordination with a Graph Neural Network reinforcement learning mode. The replay shows recorded runs of each mode and reports the training results as they are: the learned policy did not beat the rule-based coordination.',
    tech: ['Python', 'PyTorch', 'PyTorch Geometric', 'Mesa', 'Solara', 'NumPy', 'Matplotlib', 'Jupyter'],
  },
  {
    title: 'GRIT',
    tags: ['Full-Stack'],
    image: '/assets/grit.png',
    github: 'https://github.com/coderback/Grit',
    live: 'https://grit-demo-pink.vercel.app',
    description:
      'Full-stack mobile fitness platform combining macro tracking, habit building, activity logging, social challenges, and Claude-powered AI coaching in an opinionated dark-mode mobile experience.',
    tech: ['React Native', 'Expo', 'NestJS', 'Supabase', 'TypeScript', 'Claude AI', 'Tailwind CSS'],
  },
  {
    title: 'DRW Crypto Market Prediction',
    tags: ['Data Science'],
    image: '/assets/Market Features Analysis.png',
    github: 'https://github.com/coderback/drw-crypto-market-prediction',
    live: 'https://drw-crypto-signal-lab.vercel.app',
    description:
      'Cryptocurrency market prediction competition solution comparing three ML approaches: EDA-led feature analysis, Ridge regression (0.1175 validation correlation), and a neural architecture with AutoEncoder synthesis.',
    tech: ['Python', 'PyTorch', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'SHAP', 'Jupyter', 'Matplotlib', 'Seaborn', 'Plotly'],
  },
  {
    title: 'Credit Card Fraud Detection',
    tags: ['Data Science'],
    image: '/assets/fraud-detection.png',
    github: 'https://github.com/coderback/Credit-Card-Fraud-Detection',
    live: 'https://fraud-detection-explorer.vercel.app',
    description:
      'Comprehensive machine learning analysis for credit card fraud detection achieving 86.61% AUC-PR with $9,811 net benefit per test period. Features advanced class imbalance handling and business impact analysis.',
    tech: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Imbalanced-learn', 'Jupyter'],
  },
  {
    title: 'TobiOS',
    tags: ['Systems'],
    image: '/assets/TobiOS.png',
    github: 'https://github.com/coderback/TobiOS',
    live: 'https://tobios-wasm.vercel.app',
    description:
      'Operating system simulation in C++ that demonstrates core OS concepts. The real shell runs in your browser, compiled to WebAssembly.',
    tech: ['C++', 'CMake', 'WebAssembly', 'Emscripten'],
  },
  {
    title: 'UWE African Caribbean Society',
    tags: ['Full-Stack'],
    image: '/assets/uwe-acs.png',
    github: 'https://github.com/coderback/uwe-acs-webapp',
    live: 'https://uweacs.co.uk',
    description:
      'Community website built for UWE Bristol ACS society celebrating African and Caribbean culture at UWE Bristol with interactive features and smooth animations.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
];

export const PAPERS = [
  {
    title: 'Fair on Paper: What a Prop-Firm Challenge Is Worth, and Who Pays for It',
    venue: 'Working paper',
    year: '2026',
    labels: ['Pre-registered', 'Fully reproducible'],
    figure: '/assets/fair-on-paper.png',
    figureAlt:
      'Two charts from the paper: the probability of passing both evaluation steps, and expected payouts per $10,000 account, against risk per trade for buyers of different skill.',
    summary:
      "Prices a named UK prop firm's published evaluation contract on twenty years of intraday index prices at measured broker costs, with every hypothesis fixed and time-stamped before its run. The written rules are close to a fair bet for a disciplined buyer with no skill, and the price list does not follow contract value: one plan sells the same targets and limits as another at half the price. The seller's margin comes from how buyers size and trade, not from the rules.",
    stats: [
      { value: '20 years', label: 'of intraday index prices' },
      { value: '9', label: 'contracts on the price list priced' },
      { value: '24', label: 'hypotheses registered before running' },
    ],
    links: [
      { label: 'Read the paper', href: 'https://github.com/coderback/prop-challenge-pricing/blob/main/paper/prop_contract/main.pdf' },
      { label: 'Reproduction package (DOI)', href: 'https://doi.org/10.5281/zenodo.23374897' },
      { label: 'Code', href: 'https://github.com/coderback/prop-challenge-pricing' },
      { label: 'Interactive summary', href: 'https://fair-on-paper.vercel.app' },
    ],
  },
  {
    title:
      'News Timing Cannot Explain It: A Pre-registered Replication of Zhang (2025), "Interpretable Machine Learning for Macro Alpha"',
    venue: 'SSRN Working Paper 7683159',
    year: '2026',
    labels: ['Pre-registered', 'Replication', 'Not replicated'],
    figure: '/assets/zhang-replication.png',
    figureAlt:
      'Chart comparing the Sharpe ratios reported by Zhang (2025) with the replication: every pre-registered news timing variant sits near zero, inside the band of random-sign strategies.',
    summary:
      "Zhang (2025) reported cost-adjusted Sharpe ratios of 4.65 to 5.87 from FinBERT sentiment on GDELT headlines. Following the paper's filter, assets, features, models, validation and costs, none of 18 asset, timing and model combinations beats random-sign trading at the same costs, and a variant given the next day's news earns nothing either. A post hoc one-row shift in a lagged price feature gives Sharpe ratios of 15 to 18, a candidate explanation for the original result.",
    stats: [
      { value: '4.65 to 5.87', label: 'Sharpe ratios reported' },
      { value: '−1.00 to +0.02', label: 'Sharpe ratios on replication' },
      { value: '237,618', label: 'headlines scored with FinBERT' },
    ],
    links: [
      { label: 'Read on SSRN', href: 'https://doi.org/10.2139/ssrn.7683159' },
      { label: 'Replication package (DOI)', href: 'https://doi.org/10.5281/zenodo.24087562' },
      { label: 'Code', href: 'https://github.com/coderback/zhang2025-replication' },
      { label: 'Interactive summary', href: 'https://zhang2025-replication.vercel.app' },
    ],
  },
];

export const ESSAYS = [
  {
    title: 'The Silence of the Signals',
    subtitle: 'On the Upstream Migration of Edge in the Age of Agentic Finance',
    venue: 'Move 37 · Essay track',
    date: 'June 2026',
    length: '≈ 870 words',
    summary:
      'When every market participant reads the same filings with the same models, faster processing stops being an edge. The essay argues that edge moves upstream, to asking the question nobody else asks, and uses the Lazy Prices anomaly as the example: the signal is in what a company decides to stop telling you.',
    postscript:
      'I have since tested a version of this idea with Unsaid. Its return signal did not hold up: it failed a multiplicity correction, reversed sign on a held-out year, and plain word-frequency similarity beat the LLM classifier on every cut. The central mechanism remains a hypothesis I have not been able to confirm.',
    stats: [
      { value: '321', label: 'consecutive 10-K filing pairs tested' },
      { value: '57', label: 'US banks, FY2019–2025' },
      { value: 'Not confirmed', label: 'the essay’s central mechanism' },
    ],
    links: [
      { label: 'Read the essay (PDF)', href: '/documents/the-silence-of-the-signals.pdf' },
      { label: 'Unsaid demo', href: 'https://unsaid-10k-demo.vercel.app' },
      { label: 'Unsaid code', href: 'https://github.com/coderback/Unsaid' },
    ],
  },
];

export const EXPERIENCE = [
  {
    org: 'RootLayer Ltd',
    role: 'Founder',
    dates: 'May 2026 – Present',
    description:
      'Built and shipped an AI-powered web compliance SaaS solo, covering WCAG 2.2 AA accessibility and GDPR/EAA privacy auditing. Combines an LLM agent driving a real browser with a deterministic axe-core baseline, on full product infrastructure: async job processing, multi-tenancy, white-label reporting, SSRF protection and rate limiting.',
  },
  {
    org: 'CarbonTrac',
    role: 'Full-stack Engineer Intern',
    dates: 'Jul – Sep 2025',
    description:
      'Developed a PostgreSQL database with a 10-table star schema storing product emissions, supplier and shopping-history data. Built an ML model analysing 46 nutritional parameters and a recommendation engine that detects nutrient gaps from shopping history.',
  },
  {
    org: 'Nomensa',
    role: 'UX & Accessibility Intern',
    dates: 'Jul – Aug 2024',
    description:
      'Conducted comprehensive research on AI applications in healthcare, facilitated stakeholder workshops, and developed user personas. Designed service and journey maps, prototypes, and conducted user research to refine solutions. Delivered actionable insights for more user-centric, efficient healthcare AI systems.',
  },
];

export const EDUCATION = {
  school: 'University of the West of England, Bristol',
  degree: 'BSc (Hons) Computer Science',
  grade: '2:1 Honours',
  dates: 'Sep 2022 – Nov 2025',
  coursework:
    'Artificial Intelligence I & II, Machine Learning, Database Design & Implementation, Advanced Software Development, Autonomous Agents & Multi-Agent Systems, Advanced Algorithms, Advanced Artificial Intelligence.',
};

export const CAPABILITIES = [
  {
    name: 'Software engineering',
    proof: { label: 'RootLayer', id: 'rootlayer' },
    items: [
      ['Python & TypeScript', 'Full-stack & systems architecture'],
      ['Backend & API Design', 'FastAPI, NestJS & REST services'],
      ['Distributed Systems', 'Celery, Redis & async worker queues'],
      ['Relational Databases', 'PostgreSQL, MySQL & JSONB schemas'],
      ['High-Performance Systems', 'JIT compilation, bitboards & algorithmic optimization'],
      ['Containerization & DevOps', 'Docker Compose, multi-stage builds & Nginx'],
      ['Automated Testing & QA', 'Playwright E2E, integration & unit suites'],
      ['Version Control & CI/CD', 'Git workflows, GitHub Actions & release automation'],
    ],
  },
  {
    name: 'Artificial intelligence',
    proof: { label: 'Thespis', id: 'thespis' },
    items: [
      ['Generative AI & Diffusion', 'Stable Diffusion, ControlNet & zero-conv pipelines'],
      ['Multi-Agent Systems', 'LLM orchestration, tool use & multi-pass adjudication'],
      ['Deep Learning & PyTorch', 'Custom training loops, diffusers & CUDA acceleration'],
      ['Graph Neural Networks (GNN)', 'PyTorch Geometric, temporal holdouts & embeddings'],
      ['Computer Vision', 'Medical segmentation, OpenCV & Canny edge detection'],
      ['Natural Language Processing', 'Semantic diffing, filings analysis & embeddings'],
      ['Autonomous Game AI & Search', 'Alpha-Beta, PVS, transposition tables & quiescence'],
      ['Explainable AI (XAI)', 'Feature attribution, zero-shot validation & interpretability'],
    ],
  },
  {
    name: 'Data science & modelling',
    proof: { label: 'WC2026 Forecast', id: 'wc2026' },
    items: [
      ['Probabilistic Modeling', 'Dixon-Coles & Poisson goal expectation engines'],
      ['Monte Carlo Simulation', '50,000+ run tournament & league distributions'],
      ['Statistical Machine Learning', 'LightGBM, XGBoost, scikit-learn & ensemble blending'],
      ['Walk-Forward Backtesting', 'Out-of-sample validation & betting market benchmark checks'],
      ['Data Engineering & ETL', 'NumPy, Pandas & high-throughput data manipulation'],
      ['Scientific Visualization', 'Statistical distributions, interactive metrics & reporting'],
    ],
  },
];

export const STACK = [
  { name: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'SQL'] },
  {
    name: 'AI & Machine Learning',
    items: ['PyTorch', 'PyTorch Geometric', 'Hugging Face', 'CUDA', 'OpenCV', 'Numba', 'scikit-learn', 'LightGBM', 'Monte Carlo Methods', 'Pandas', 'NumPy'],
  },
  {
    name: 'Backend & Systems',
    items: ['FastAPI', 'Celery', 'Redis', 'Next.js', 'NestJS', 'Django', 'Node.js', 'PostgreSQL', 'MySQL', 'Supabase', 'Nginx'],
  },
  { name: 'Frontend & Mobile', items: ['React.js', 'React Native', 'Expo', 'Tailwind CSS', 'D3.js'] },
  { name: 'Cloud, DevOps & Tools', items: ['Docker', 'Playwright', 'Git', 'AWS', 'Azure', 'Figma', 'Jupyter'] },
];
