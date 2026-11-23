import Image from 'next/image';
import { ESSAYS, LINKS, PAPERS } from '../content/portfolio';

// Papers sit on yellow in both themes, so their colours are fixed rather than theme tokens.
export default function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="flex flex-col gap-7 pt-5">
      <h2 id="research-heading" className="nb-heading flex flex-wrap items-center gap-4 text-4xl sm:text-6xl">
        Research &amp; Writing
        <a
          href={LINKS.orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="nb-btn nb-btn-plain stk !min-h-0 !py-1 !text-[13px] normal-case tracking-normal"
        >
          ORCID ↗
        </a>
      </h2>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        {PAPERS.map((paper) => (
          <article key={paper.title} className="nb-card min-w-0 bg-[#ffe14d] p-5 text-[#121212] sm:p-6">
            <p className="mb-3 flex flex-wrap gap-2">
              <span className="stk border-[#121212] bg-[#121212] text-[#ffe14d]">PAPER</span>
              <span className="stk border-[#121212] bg-[#f5f2ea] uppercase text-[#121212] shadow-[2px_2px_0_#121212]">
                {paper.venue} · {paper.year}
              </span>
            </p>
            <h3 className="mb-1.5 text-2xl font-bold leading-tight">{paper.title}</h3>
            <p className="mb-3.5 font-mono text-[11px] font-bold uppercase">{paper.labels.join(' · ')}</p>
            <div className="relative h-52 border-[3px] border-[#121212] bg-white">
              <Image src={paper.figure} alt={paper.figureAlt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-contain p-1.5" />
            </div>
            <p className="mt-3.5 text-base leading-relaxed">{paper.summary}</p>
            <dl className="mt-3.5 flex flex-wrap gap-2.5">
              {paper.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex-[1_1_130px] border-2 border-[#121212] bg-[#f5f2ea] px-3 py-2.5 shadow-[3px_3px_0_#121212]"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-mono text-lg font-bold text-[#2540ff]">{stat.value}</span>
                    <span className="mt-0.5 block text-[13px] leading-snug">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 flex flex-wrap gap-2.5">
              {paper.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn !min-h-[40px] !border-2 !border-[#121212] bg-[#2540ff] !px-3 text-xs uppercase text-white !shadow-[4px_4px_0_#121212] hover:text-white"
                >
                  {link.label} ↗
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>

      {ESSAYS.map((essay) => (
        <article key={essay.title} className="nb-card flex flex-wrap gap-6 bg-paper p-5 sm:p-7">
          <div className="min-w-0 flex-[3_1_480px]">
            <p className="mb-3 flex flex-wrap gap-2">
              <span className="stk bg-yellow text-on-yellow">ESSAY</span>
              <span className="stk bg-tint uppercase text-ink">
                {essay.venue} · {essay.date}
              </span>
              <span className="stk bg-paper uppercase text-ink">{essay.length}</span>
            </p>
            <h3 className="text-3xl font-bold leading-tight sm:text-4xl">{essay.title}</h3>
            <p className="mt-1.5 text-lg italic text-muted">{essay.subtitle}</p>
            <p className="mt-4 text-base leading-relaxed sm:text-[17px]">{essay.summary}</p>
            <p className="mt-5 flex flex-wrap gap-2.5">
              {essay.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`nb-btn !min-h-[40px] !px-3 text-xs uppercase ${index === 0 ? 'nb-btn-primary' : 'nb-btn-plain'}`}
                >
                  {link.label} ↗
                </a>
              ))}
            </p>
          </div>

          <aside className="min-w-0 flex-[2_1_320px] border-[3px] border-line bg-tint p-5">
            <p className="font-mono text-xs font-bold uppercase">Postscript · November 2026</p>
            <p className="mt-2 text-[15px] leading-relaxed">{essay.postscript}</p>
            <dl className="mt-4 flex flex-col gap-2.5">
              {essay.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3 border-t-2 border-line pt-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="flex flex-wrap items-baseline gap-x-3">
                    <span className="font-mono text-lg font-bold text-cobalt">{stat.value}</span>
                    <span className="text-sm text-muted">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </article>
      ))}
    </section>
  );
}
