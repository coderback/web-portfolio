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
        <div className="bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 max-w-3xl w-full shadow-sm">

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

        </div>
      </motion.div>
    </section>
  );
}
