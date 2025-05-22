'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Patient Data Dashboard',
    image: '/assets/Medical Dashboard 05_03_2025 17_52_30.png',
    github: 'https://github.com/DinaMetwalli/Patient-Data-Dashboard',
    live: 'https://github.com/DinaMetwalli/Patient-Data-Dashboard',
  },
  {
    title: 'Restaurant Management System',
    image: '/assets/Horizon Restaurants RMS 07_03_2025 13_33_37.png',
    github: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
    live: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
  },
  {
    title: 'Colon Cancer Classification with Explainable AI',
    image: '/assets/prediction.png',
    github: 'https://github.com/coderback/colonscan',
    live: 'https://github.com/coderback/colonscan',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-20 bg-white">
      <p className="text-lg text-center font-light">Browse My Recent</p>
      <h2 className="text-5xl text-center font-extrabold mb-12 font-spartan">Projects</h2>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-4 w-full max-w-sm shadow-sm"
          >
            <div className="aspect-video overflow-hidden rounded-xl mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-center font-spartan">{project.title}</h3>
            <div className="flex justify-center gap-4">
              <Link href={project.github} target="_blank" aria-label={`View ${project.title} on GitHub`}>
                <button className="btn btn-outline">GitHub</button>
              </Link>
              <Link href={project.live} target="_blank" aria-label={`Live demo of ${project.title}`}>
                <button className="btn btn-outline">Live Demo</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
