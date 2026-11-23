import Image from 'next/image';
import { LINKS, PROOF, TIMELINE, TIMELINE_SPAN } from '../content/portfolio';

const PROOF_TONES = {
  // Fixed dark in both themes so the yellow number keeps its contrast.
  ink: { card: 'bg-[#121212] text-[#f5f2ea]', value: 'text-yellow' },
  cobalt: { card: 'bg-cobalt text-on-cobalt', value: '' },
  yellow: { card: 'bg-yellow text-on-yellow', value: '' },
  tint: { card: 'bg-tint text-ink', value: '' },
};

const BAR_TONES = { cobalt: 'bg-cobalt', coral: 'bg-coral' };

const FIND_ME = [
  { label: 'GITHUB ↗', href: LINKS.github },
  { label: 'LINKEDIN ↗', href: LINKS.linkedin },
  { label: 'ORCID ↗', href: LINKS.orcid },
];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="flex flex-col gap-7">
      <div className="flex flex-wrap gap-7">
        <div className="nb-card min-w-0 flex-[2_1_560px] bg-paper p-6 sm:p-9">
          <span className="stk bg-cobalt !text-[13px] text-on-cobalt">HEY, I&apos;M TIMOTHY</span>
          <h1 className="nb-heading mt-5 text-5xl sm:text-6xl lg:text-7xl">AI/ML + Full-Stack Engineer</h1>
          <p className="mt-5 max-w-[600px] text-lg leading-relaxed sm:text-[19px]">
            Computer Science graduate. I ship production systems end to end, and measure them out of sample before
            I call them done.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#work" className="nb-btn nb-btn-primary min-h-[48px] text-sm">
              SEE THE WORK ↓
            </a>
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="nb-btn nb-btn-plain min-h-[48px] text-sm">
              CV.PDF ↓
            </a>
          </div>
        </div>

        <div className="nb-card flex min-h-[340px] flex-[1_1_260px] bg-coral p-[18px]">
          <div className="relative min-h-[300px] w-full border-[3px] border-[#121212]">
            <Image
              src="/assets/pfp.jpeg"
              alt="Portrait of Timothy Ojebiyi"
              fill
              sizes="(min-width: 1024px) 300px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div id="contact" className="nb-card flex flex-[1_1_260px] flex-col gap-3 bg-tint p-6">
          <h2 className="nb-heading mb-1 text-3xl">Find me</h2>
          <a href={`mailto:${LINKS.email}`} className="nb-btn nb-btn-primary !border-2 text-xs">
            {LINKS.email}
          </a>
          {FIND_ME.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn nb-btn-plain !border-2 text-xs"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <ul aria-label="Highlights" className="flex flex-wrap gap-7">
        {PROOF.map((item) => (
          <li key={item.label} className={`nb-card flex-[1_1_220px] px-5 py-5 ${PROOF_TONES[item.tone].card}`}>
            <p className={`font-mono text-5xl font-bold leading-none ${PROOF_TONES[item.tone].value}`}>{item.value}</p>
            <p className="mt-2 font-mono text-xs font-bold uppercase">{item.label}</p>
          </li>
        ))}
      </ul>

      <div className="nb-card bg-paper px-5 pb-5 pt-4" aria-label="Timeline, September 2022 to now" role="group">
        <div className="flex justify-between pl-32 font-mono text-xs text-muted sm:pl-52" aria-hidden="true">
          <span>2022</span>
          <span>2023</span>
          <span>2024</span>
          <span>2025</span>
          <span>2026</span>
        </div>
        <ul>
          {TIMELINE.map((bar) => (
            <li key={bar.label} className="flex min-h-[40px] items-center border-t-2 border-line">
              <p className="w-32 shrink-0 text-sm font-bold leading-tight sm:w-52 sm:text-[15px]">
                {bar.label}{' '}
                <span className="block font-mono text-[11px] font-normal text-muted sm:inline">{bar.dates}</span>
              </p>
              <div className="relative h-4 flex-1">
                <span
                  className={`absolute top-0 h-4 border-2 border-line ${BAR_TONES[bar.tone]}`}
                  style={{
                    left: `${(bar.from / TIMELINE_SPAN) * 100}%`,
                    width: `${((bar.to - bar.from + 1) / TIMELINE_SPAN) * 100}%`,
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
