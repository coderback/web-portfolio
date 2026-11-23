import Image from 'next/image';
import { LINKS, PAPERS } from '../content/portfolio';

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
    </section>
  );
}
