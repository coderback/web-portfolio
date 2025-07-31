'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutExperience() {
  return (
    <section id="about-experience" className="px-6 md:px-16 py-20 bg-white">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch relative">

        {/* Vertical Divider for large screens */}
        <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-gray-200"></div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 px-6 lg:px-12"
        >
          <p className="text-lg font-light text-center lg:text-left">Learn about my</p>
          <h2 className="text-5xl font-extrabold text-center lg:text-left mb-6 font-spartan">Education</h2>

          <div className="flex items-center gap-4 mb-4">
            <Image
              src="/assets/graduate-hat.png"
              alt="Education icon"
              width={40}
              height={40}
              className="h-10 w-10 dark:invert"
            />
            <div>
              <h3 className="text-xl font-semibold">University of the West of England, Bristol</h3>
              <p className="italic">BSc (Hons) Computer Science</p>
              <p>July 2025 | 2:1 Honours</p>
            </div>
          </div>

          <p className="text-gray-700 dark:text-white text-justify mt-2">
            <span className="font-medium">Relevant Coursework:</span> Artificial Intelligence I & II, Machine Learning, Database Design & Implementation, Advanced Software Development, Autonomous Agents & Multi-Agent Systems, Advanced Algorithms, Advanced Artificial Intelligence.
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 px-6 lg:px-12"
        >
          <p className="text-lg font-light text-center lg:text-left">Look into my</p>
          <h2 className="text-5xl font-extrabold text-center lg:text-left mb-6 font-spartan">Experience</h2>

          <div className="space-y-6">
            {/* CarbonTrac Experience */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/assets/reputation.png"
                  alt="Experience icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 dark:invert"
                />
                <div>
                  <h3 className="text-xl font-semibold">CarbonTrac</h3>
                  <p className="italic">Full-stack Engineer Intern</p>
                  <p>July 2025 – Present</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-white text-justify mt-2">
                Developing innovative solutions at CarbonTrac, a climate technology startup. 
                Building full-stack applications and training machine learning models with the goal of reducing 
                the UK's carbon emission by 5% by 2030.
              </p>
            </div>

            {/* NoMensa Experience */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/assets/reputation.png"
                  alt="Experience icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 dark:invert"
                />
                <div>
                  <h3 className="text-xl font-semibold">NoMensa</h3>
                  <p className="italic">UX & Accessibility Intern</p>
                  <p>July 2024 – August 2024</p>
                </div>
              </div>

              <p className="text-gray-700 dark:text-white text-justify mt-2">
                Conducted comprehensive research on AI applications in healthcare, facilitated stakeholder workshops,
                and developed user personas. Designed service and journey maps, prototypes, and conducted user research
                to refine solutions. Delivered actionable insights for more user-centric, efficient healthcare AI systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
