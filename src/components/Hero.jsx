'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero() {
  return (
    <section
      id="profile"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 pt-32 pb-20 gap-12"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden flex-shrink-0"
      >
        <Image
          src="/assets/pfp.jpeg"
          alt="profile picture"
          width={400}
          height={400}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center lg:text-left max-w-xl"
      >
        <p className="text-lg font-light mb-2">Hello, I&apos;m</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 font-spartan text-forest">
          Timothy Ojebiyi
        </h1>

        {/* Typing Effect */}
        <div className="text-xl font-medium text-gray-700 dark:text-white mb-6 min-h-[2rem]">
          <Typewriter
            words={[
              'Computer Science Graduate',
              'Full-Stack Engineer',
              'AI/ML Engineer',
              'Data Scientist'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </div>

        <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
          Final-year Computer Science student specializing in Artificial Intelligence, with a strong foundation in
          machine learning, data analysis, and software development. Passionate about developing innovative AI solutions
          to solve real-world problems.
        </p>

        {/* Social Links */}
        <div className="flex justify-center lg:justify-start gap-6">
          <Link 
            href="https://github.com/coderback" 
            target="_blank" 
            aria-label="GitHub Profile"
            className="text-gray-600 hover:text-forest dark:text-gray-400 dark:hover:text-forest transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/timothy-oluwatobi-ojebiyi/" 
            target="_blank" 
            aria-label="LinkedIn Profile"
            className="text-gray-600 hover:text-forest dark:text-gray-400 dark:hover:text-forest transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
