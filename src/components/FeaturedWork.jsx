import Image from 'next/image';
import { FEATURED } from '../content/portfolio';

export default function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="flex flex-col gap-7 pt-5">
      <div className="flex flex-wrap items-end justify-between gap-x-5 gap-y-3">
        <h2 id="work-heading" className="nb-heading flex flex-wrap items-center gap-4 text-4xl sm:text-6xl">
          Featured work
          <span className="stk bg-yellow !text-[13px] normal-case tracking-normal text-on-yellow">6 OF 20</span>
        </h2>
        <a href="#research" className="nb-btn nb-btn-primary stk !min-h-0 !py-1 text-xs">
          SKIP TO RESEARCH ↓
        </a>
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED.map((project, index) => (
          <article key={project.id} id={`p-${project.id}`} className="nb-card flex min-w-0 flex-col bg-tint">
            <div className="relative h-40 border-b-[3px] border-line bg-white">
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                className="object-cover object-top"
              />
              <span className="stk absolute left-2.5 top-2.5 bg-yellow !text-[13px] text-on-yellow">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="stk absolute right-2.5 top-2.5 bg-cobalt text-on-cobalt">LIVE</span>
            </div>

            <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
              <p className="font-mono text-[11px] font-bold uppercase text-muted">{project.tags.join(' · ')}</p>
              <h3 className="text-[26px] font-bold leading-tight">{project.title}</h3>
              <p className="text-sm font-bold leading-snug">{project.subtitle}</p>
              <p className="mt-0.5 border-2 border-line bg-yellow px-2.5 py-2 font-mono text-xs font-bold leading-snug text-on-yellow">
                → {project.result}
              </p>
              <p className="text-[15px] leading-relaxed">{project.blurb}</p>

              <details className="nb-details border-t-2 border-line pt-2">
                <summary className="flex min-h-[32px] items-center justify-between font-mono text-xs font-bold text-cobalt">
                  FULL WRITE-UP &amp; STACK
                  <span className="nb-details-plus inline-block text-lg leading-none transition-transform" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-[15px] leading-relaxed">{project.description}</p>
                <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">{project.tech.join(' · ')}</p>
              </details>

              <p className="mt-auto flex flex-wrap gap-3 pt-1.5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo of ${project.title}`}
                  className="nb-btn nb-btn-primary !min-h-[40px] text-xs"
                >
                  LIVE DEMO ↗
                </a>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} source code on GitHub`}
                    className="nb-btn nb-btn-plain !min-h-[40px] text-xs"
                  >
                    CODE ↗
                  </a>
                )}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
