'use client';
import { useRef } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

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
  const splideRef = useRef();

  return (
    <section id="projects" className="px-6 md:px-16 py-20 bg-white dark:bg-neutral-900">
      <p className="text-lg text-center font-light">Browse My Recent</p>
      <h2 className="text-5xl text-center font-extrabold mb-12 font-spartan">Projects</h2>

      <div className="relative">
        <Splide
          hasTrack={false}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          ref={splideRef}
          aria-label="Project Showcase"
        >
          {/* Custom Arrows */}
          <div className="absolute top-1/2 -left-6 z-10 -translate-y-1/2 hidden md:block">
            <button
              onClick={() => splideRef.current?.splide?.go('<')}
              className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-forest dark:hover:bg-forest transition"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-6 w-6 text-black dark:text-white" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-6 z-10 -translate-y-1/2 hidden md:block">
            <button
              onClick={() => splideRef.current?.splide?.go('>')}
              className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 hover:bg-forest dark:hover:bg-forest transition"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-6 w-6 text-black dark:text-white" />
            </button>
          </div>

          <SplideTrack className="pb-2">
            {projects.map((project, index) => (
              <SplideSlide key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-4 w-full h-full shadow-sm"
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
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
      </div>
    </section>
  );
}
