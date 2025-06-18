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
    title: 'Algorender - Data structure & Algorithms Visualiser',
    image: '/assets/Algorender.png',
    github: 'https://github.com/coderback/Algorender',
    live: 'https://algorender.vercel.app/',
    description: 'Interactive visualization tool for data structures and algorithms',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS']
  },
  {
    title: 'ColonScan - Colon Cancer Segmentation & Classification',
    image: '/assets/prediction.png',
    github: 'https://github.com/coderback/colonscan',
    live: 'https://github.com/coderback/colonscan',
    description: 'AI-powered medical imaging analysis for colon cancer detection',
    tech: ['React', 'Python', 'Django', 'Tailwind CSS', 'OpenCV', 'Flask']
  },
  {
    title: 'Patient Data Dashboard',
    image: '/assets/Medical Dashboard 05_03_2025 17_52_30.png',
    github: 'https://github.com/DinaMetwalli/Patient-Data-Dashboard',
    live: 'https://github.com/DinaMetwalli/Patient-Data-Dashboard',
    description: 'Comprehensive healthcare data visualization and management system',
    tech: ['Electron.js', 'Python', 'Bootstrap', 'SQLite']
  },
  {
    title: 'Restaurant Management System',
    image: '/assets/Horizon Restaurants RMS 07_03_2025 13_33_37.png',
    github: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
    live: 'https://github.com/coderback/Horizon-Restaurant-Management-System',
    description: 'Full-featured restaurant operations and management platform',
    tech: ['Custom Tkinter', 'Python', 'MySQL']
  },
];

export default function Projects() {
  const splideRef = useRef();

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-16 py-16 sm:py-20 bg-white dark:bg-neutral-900">
      <p className="text-lg text-center font-light">Browse My Recent</p>
      <h2 className="text-4xl sm:text-5xl text-center font-extrabold mb-8 sm:mb-12 font-spartan">Projects</h2>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <Splide
          hasTrack={false}
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            pagination: true,
            arrows: false,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            pauseOnFocus: true,
            padding: { left: '1rem', right: '1rem' },
            breakpoints: {
              1280: { 
                perPage: 2,
                gap: '1.5rem',
                padding: { left: '1rem', right: '1rem' }
              },
              768: { 
                perPage: 1,
                gap: '1rem',
                padding: { left: '0.5rem', right: '0.5rem' }
              },
            },
          }}
          ref={splideRef}
          aria-label="Project Showcase"
        >
          {/* Custom Arrows - Hidden on mobile */}
          <div className="absolute top-1/2 -left-4 sm:-left-6 z-10 -translate-y-1/2 hidden md:block">
            <button
              onClick={() => splideRef.current?.splide?.go('<')}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 hover:bg-forest hover:border-forest dark:hover:bg-forest transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Previous slide"
            >
              <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white group-hover:text-white" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 sm:-right-6 z-10 -translate-y-1/2 hidden md:block">
            <button
              onClick={() => splideRef.current?.splide?.go('>')}
              className="p-2 sm:p-3 rounded-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 hover:bg-forest hover:border-forest dark:hover:bg-forest transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Next slide"
            >
              <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white group-hover:text-white" />
            </button>
          </div>

          <SplideTrack className="pb-8 sm:pb-12">
            {projects.map((project, index) => (
              <SplideSlide key={project.title}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 w-full h-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden rounded-xl mb-4 sm:mb-6 relative group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center font-spartan line-clamp-2">{project.title}</h3>
                  
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center mb-3 sm:mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-neutral-700 rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 sm:gap-4">
                    <Link href={project.github} target="_blank" aria-label={`View ${project.title} on GitHub`}>
                      <button className="btn btn-outline group text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap">
                        <span className="flex items-center gap-1.5 sm:gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          GitHub
                        </span>
                      </button>
                    </Link>
                    <Link href={project.live} target="_blank" aria-label={`Live demo of ${project.title}`}>
                      <button className="btn btn-primary group text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap">
                        <span className="flex items-center gap-1.5 sm:gap-2">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </SplideSlide>
            ))}
          </SplideTrack>

          {/* Custom Pagination */}
          <div className="splide__pagination splide__pagination--ltr mt-6 sm:mt-8" />
        </Splide>
      </div>
    </section>
  );
}
