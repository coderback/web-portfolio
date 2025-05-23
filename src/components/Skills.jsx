'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const skillsData = [
  {
    category: 'Software Engineering',
    items: [
      ['Python', 'Experienced'],
      ['MySQL', 'Experienced'],
      ['PostgreSql', 'Intermediate'],
      ['CI/CD Pipelines', 'Intermediate'],
      ['Version Control', 'Intermediate'],
      ['Agile Methodologies', 'Intermediate'],
      ['Containerization', 'Experienced'],
      ['Data Structures and Algorithms', 'Experienced'],
    ],
  },
  {
    category: 'Artificial Intelligence',
    items: [
      ['Machine Learning', 'Experienced'],
      ['Deep Learning', 'Intermediate'],
      ['Natural Language Processing', 'Intermediate'],
      ['Computer Vision', 'Experienced'],
      ['Explainable AI (XAI)', 'Basic'],
    ],
  },
  {
    category: 'Data Science',
    items: [
      ['Data Analysis', 'Basic'],
      ['Data Visualization', 'Experienced'],
      ['Statistical Analysis', 'Intermediate'],
      ['Time Series Analysis', 'Intermediate'],
      ['Data Storytelling', 'Intermediate'],
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen justify-center px-6 md:px-16 py-20">
      <p className="text-lg text-center font-light">Explore My</p>
      <h2 className="text-5xl text-center font-extrabold mb-12">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {skillsData.map(({ category, items }, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 p-6 rounded-2xl flex flex-col items-center text-center w-full sm:w-[90%] md:w-[45%] lg:w-[30%] shadow-sm"
          >
            <h3 className="text-2xl font-extrabold mb-6">{category}</h3>
            <div className="flex flex-col gap-4 items-start w-fit mx-auto">
              {items.map(([skill, level]) => (
                <div key={skill} className="flex items-center gap-4">
                  <Image
                    src="/assets/checkmark.png"
                    alt="checkmark"
                    width={24}
                    height={24}
                    className="h-10 w-10 dark:invert"
                  />
                  <div className="text-left">
                    <p className="text-xl font-semibold">{skill}</p>
                    <p className="text-sm text-gray-600 dark:text-white dark:text-opacity-60">{level}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
