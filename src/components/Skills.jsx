import { CAPABILITIES } from '../content/portfolio';

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="nb-card bg-paper p-6 sm:p-7">
      <h2 id="skills-heading" className="nb-heading mb-1.5 text-4xl sm:text-[44px]">
        Capabilities
      </h2>
      <p className="mb-5 text-[15px] text-muted">Grouped by area, each linked to a project that uses it.</p>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
        {CAPABILITIES.map((group) => (
          <div key={group.name} className="min-w-0 border-t-[3px] border-line pt-3">
            <h3 className="text-[22px] font-bold">{group.name}</h3>
            <a href={`#p-${group.proof.id}`} className="nb-btn nb-btn-primary stk mb-3 mt-2 !min-h-0 !py-1 uppercase">
              See it in {group.proof.label} →
            </a>
            <ul>
              {group.items.map(([skill, note]) => (
                <li key={skill} className="border-t border-tint py-2 text-[15px] leading-snug">
                  <span className="font-bold">{skill}</span>
                  <br />
                  <span className="text-sm text-muted">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
