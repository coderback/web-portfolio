'use client';
import { useState } from 'react';
import Image from 'next/image';
import { OTHER_PROJECTS, PROJECT_FILTERS } from '../content/portfolio';

// Numbering continues after the six featured projects.
const NUMBERED = OTHER_PROJECTS.map((project, index) => ({ ...project, number: String(index + 7).padStart(2, '0') }));

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? NUMBERED : NUMBERED.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" aria-labelledby="projects-heading" className="nb-card bg-paper p-6 sm:p-7">
      <div className="mb-3.5 flex flex-wrap items-center justify-between gap-3.5">
        <h2 id="projects-heading" className="nb-heading flex flex-wrap items-center gap-3.5 text-4xl sm:text-[44px]">
          The other {OTHER_PROJECTS.length}
          <span className="stk bg-tint !text-xs normal-case tracking-normal text-ink" aria-live="polite">
            showing {shown.length}
          </span>
        </h2>
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2.5">
          {PROJECT_FILTERS.map((name) => {
            const count = name === 'All' ? NUMBERED.length : NUMBERED.filter((p) => p.tags.includes(name)).length;
            const active = name === filter;
            return (
              <button
                key={name}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(name)}
                className={`nb-btn !px-3 text-xs ${active ? 'nb-btn-primary' : 'nb-btn-plain'}`}
              >
                {name} [{count}]
              </button>
            );
          })}
        </div>
      </div>

      <ul>
        {shown.map((project) => (
          <li key={project.title} className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t-2 border-line py-3.5">
            <span className="w-8 shrink-0 font-mono text-[13px] font-bold text-muted">{project.number}</span>
            <div className="relative h-[68px] w-[104px] shrink-0 border-2 border-line bg-white shadow-[3px_3px_0_var(--line)]">
              <Image src={project.image} alt="" fill sizes="104px" className="object-cover object-top" />
            </div>
            <div className="min-w-0 flex-[1_1_400px]">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="mt-0.5 text-base leading-relaxed">{project.description}</p>
              <p className="mt-1.5 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="stk bg-tint uppercase text-ink">
                    {tag}
                  </span>
                ))}
                <span className="font-mono text-[11px] text-muted">{project.tech.join(' · ')}</span>
              </p>
            </div>
            <p className="flex gap-2.5">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo of ${project.title}`}
                className="nb-btn nb-btn-primary !min-h-[40px] !border-2 !px-3 text-xs"
              >
                LIVE
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code on GitHub`}
                className="nb-btn nb-btn-plain !min-h-[40px] !border-2 !px-3 text-xs"
              >
                CODE
              </a>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
