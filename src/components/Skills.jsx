'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsData = [
  {
    category: 'Software Engineering',
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
    category: 'Artificial Intelligence',
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
    category: 'Data Science & Modeling',
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

const techStackCategories = [
  {
    name: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Rust', 'SQL'],
  },
  {
    name: 'AI & Machine Learning',
    skills: [
      'PyTorch',
      'PyTorch Geometric',
      'Hugging Face',
      'CUDA',
      'TensorFlow',
      'OpenCV',
      'Numba',
      'scikit-learn',
      'Monte Carlo Methods',
      'Pandas',
      'NumPy',
    ],
  },
  {
    name: 'Backend & Systems',
    skills: [
      'FastAPI',
      'Celery',
      'Redis',
      'Next.js',
      'NestJS',
      'Django',
      'Node.js',
      'PostgreSQL',
      'MySQL',
      'Supabase',
      'Nginx',
    ],
  },
  {
    name: 'Frontend & Mobile',
    skills: ['React.js', 'React Native', 'Expo', 'Tailwind CSS', 'D3.js'],
  },
  {
    name: 'Cloud, DevOps & Tools',
    skills: ['Docker', 'Kubernetes', 'Playwright', 'Git', 'Azure', 'Jupyter'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen justify-center px-6 md:px-16 py-20">
      <p className="text-lg text-center font-light">Explore My</p>
      <h2 className="text-5xl text-center font-extrabold mb-12">Skills</h2>

      {/* Skill Cards */}
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {skillsData.map(({ category, items }, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 p-6 sm:p-8 rounded-2xl flex flex-col items-center w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-sm"
          >
            <h3 className="text-2xl font-extrabold mb-6 text-center">{category}</h3>
            <div className="flex flex-col gap-4 items-start w-full">
              {items.map(([skill, highlight]) => (
                <div key={skill} className="flex items-start gap-3.5 text-left w-full">
                  <Image
                    src="/assets/checkmark.png"
                    alt="checkmark"
                    width={24}
                    height={24}
                    className="h-6 w-6 dark:invert flex-shrink-0 mt-0.5"
                  />
                  <div className="flex-1">
                    <p className="text-base sm:text-lg font-semibold leading-tight">{skill}</p>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Stack Section */}
      <div className="mt-20 text-center">
        <h3 className="text-4xl font-extrabold mb-4 font-spartan">Tech Stack</h3>
        <p className="text-lg font-light mb-10 text-gray-600 dark:text-gray-300">
          Specialized Technologies, Frameworks & Tooling
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          {techStackCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIndex * 0.08 }}
              className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm flex flex-col"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest dark:text-forest-light mb-4">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-neutral-700 text-black dark:text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium hover:scale-105 transition-transform duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
