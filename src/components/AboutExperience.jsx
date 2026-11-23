import { EDUCATION, EXPERIENCE } from '../content/portfolio';

export default function AboutExperience() {
  return (
    <section id="cv" aria-label="Experience and education" className="grid grid-cols-1 gap-7 pt-5 lg:grid-cols-3">
      <div className="nb-card min-w-0 bg-coral p-6 text-on-coral sm:p-7 lg:col-span-2">
        <h2 className="nb-heading mb-4 text-4xl sm:text-[44px]">Experience</h2>
        <ul>
          {EXPERIENCE.map((job) => (
            <li key={job.org} className="border-t-2 border-[#121212] py-3.5">
              <p className="flex flex-wrap items-center justify-between gap-1.5 text-[19px] font-bold">
                <span>
                  {job.role} · {job.org}
                </span>
                <span className="stk border-[#121212] bg-[#f5f2ea] uppercase text-[#121212] shadow-[2px_2px_0_#121212]">
                  {job.dates}
                </span>
              </p>
              <p className="mt-2 text-base leading-relaxed">{job.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="nb-card min-w-0 bg-cobalt p-6 text-on-cobalt sm:p-7">
        <h2 className="nb-heading mb-4 text-4xl sm:text-[44px]">Education</h2>
        <p className="text-[19px] font-bold">{EDUCATION.school}</p>
        <p className="mt-1.5 text-base">{EDUCATION.degree}</p>
        <p className="mb-3.5 mt-2.5 flex flex-wrap gap-2">
          <span className="stk bg-yellow uppercase text-on-yellow">{EDUCATION.grade}</span>
          <span className="stk bg-paper uppercase text-ink">{EDUCATION.dates}</span>
        </p>
        <p className="text-[15px] leading-relaxed">
          <span className="font-bold">Coursework:</span> {EDUCATION.coursework}
        </p>
      </div>
    </section>
  );
}
