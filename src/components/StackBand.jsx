import { STACK } from '../content/portfolio';

// A full-width dark break between Capabilities and the project list.
export default function StackBand() {
  return (
    <section aria-labelledby="stack-heading" className="my-12 border-y-[3px] border-line bg-band px-4 py-8 text-on-band sm:px-6">
      <div className="mx-auto max-w-[1232px]">
        <h2 id="stack-heading" className="nb-heading mb-4 text-4xl text-[#ffe14d] sm:text-[44px]">
          Stack
        </h2>
        <ul>
          {STACK.map((group) => (
            <li key={group.name} className="flex flex-wrap gap-x-6 gap-y-1.5 border-t border-[#3a3a3a] py-3">
              <span className="w-60 shrink-0 font-mono text-[13px] font-bold uppercase text-[#ffe14d]">{group.name} →</span>
              <span className="min-w-0 flex-[1_1_420px] text-base leading-relaxed">{group.items.join(' · ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
