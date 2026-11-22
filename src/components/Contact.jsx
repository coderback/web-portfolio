'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-20 bg-white">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-lg font-light">Get in Touch</p>
        <h2 className="text-5xl font-extrabold">Contact Me</h2>
      </motion.div>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 justify-items-center sm:justify-items-start gap-6 md:gap-x-12 max-w-3xl w-full shadow-sm">

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/email.png"
              alt="Email icon"
              width={40}
              height={40}
              className="h-12 w-12 dark:invert"
            />
            <a
              href="mailto:tobiojebiyi@gmail.com"
              className="text-lg font-medium hover:text-forest-dark hover:underline underline-offset-8"
              aria-label="Send an email to tobiojebiyi@gmail.com"
            >
              tobiojebiyi@gmail.com
            </a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/linkedin.png"
              alt="LinkedIn icon"
              width={40}
              height={40}
              className="h-10 w-10 dark:invert"
            />
            <Link
              href="https://www.linkedin.com/in/timothy-oluwatobi-ojebiyi/"
              target="_blank"
              className="text-lg font-medium hover:text-forest hover:underline underline-offset-8"
              aria-label="Visit LinkedIn profile"
            >
              LinkedIn
            </Link>
          </motion.div>

          {/* GitHub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <a
              href="https://github.com/coderback"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-forest hover:underline underline-offset-8"
              aria-label="Visit GitHub profile"
            >
              GitHub
            </a>
          </motion.div>

          {/* ORCID */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3"
          >
            <svg className="h-10 w-10" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="11" fill="currentColor" />
              <text
                x="12"
                y="16.2"
                textAnchor="middle"
                fontSize="11"
                fontWeight="700"
                fontFamily="Arial, Helvetica, sans-serif"
                className="fill-white dark:fill-neutral-800"
              >
                iD
              </text>
            </svg>
            <a
              href="https://orcid.org/0009-0009-7786-8549"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:text-forest hover:underline underline-offset-8"
              aria-label="Visit ORCID profile"
            >
              ORCID
            </a>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
