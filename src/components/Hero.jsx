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
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-60 h-60 lg:w-96 lg:h-96 rounded-full overflow-hidden flex-shrink-0"
      >
        <Image
          src="/assets/pfp.jpeg"
          alt="profile picture"
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center lg:text-left max-w-xl"
      >
        <p className="text-lg font-light">Hello, I'm</p>
        <h1 className="text-5xl lg:text-5xl font-extrabold my-2 font-spartan text-forest">Timothy Ojebiyi</h1>

        {/* Typing Effect */}
        <p className="text-xl font-medium text-gray-700 dark:text-white">
          <Typewriter
            words={[
              'Computer Science Student',
              'AI/ML Engineer',
              'Full-Stack Developer',
              'Data Scientist'
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </p>

        <p className="text-base text-gray-600 dark:text-white mt-4">
          Final-year Computer Science student specializing in Artificial Intelligence, with a strong foundation in
          machine learning, data analysis, and software development. Passionate about developing innovative AI solutions
          to solve real-world problems and eager to contribute to dynamic tech teams.
        </p>

        {/* Buttons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-6">
          <a
            href="/documents/2025 GRADUATE CV.pdf"
            download
            className="btn btn-outline"
            aria-label="Download CV"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Contact Info
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start gap-4 mt-4">
          <Link href="https://www.linkedin.com/in/timothy-oluwatobi-ojebiyi/" aria-label="LinkedIn profile">
            <Image src="/assets/linkedin.png" alt="LinkedIn" width={40} height={40} className="cursor-pointer dark:invert" />
          </Link>
          <Link href="https://github.com/coderback" aria-label="GitHub profile">
            <Image src="/assets/github.png" alt="GitHub" width={40} height={40} className="cursor-pointer dark:invert" />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
