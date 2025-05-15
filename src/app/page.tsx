"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

export default function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen px-6 sm:px-20 py-16 flex flex-col justify-between font-sans bg-green-50 text-gray-900 dark:bg-green-900 dark:text-white transition-colors duration-300">

      {/* Avatar with Tailwind grow animation */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center mb-8 animate-grow"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 dark:border-green-300 shadow-lg relative">
          <Image
            src="/kim.jpg"
            alt="Your Avatar"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="flex flex-col items-center text-center gap-8 sm:gap-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m Kimote Zoko</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          Full Stack Web Developer | JavaScript | Next.js | TailwindCSS
        </p>

        <div className="flex gap-4 flex-col sm:flex-row mt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white dark:bg-green-300 dark:text-black px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
          >
            View Resume
          </a>

          {/* Contact Me Button */}
          <button
            onClick={() => setShowContact(true)}
            className="border border-green-700 dark:border-green-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-green-100 dark:hover:bg-green-800 transition"
          >
            Contact Me
          </button>
        </div>
      </motion.main>

      {/* Contact Modal */}
      {showContact && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-blue-200/20 via-green-200/20 to-blue-300/20 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-white/80 dark:bg-green-900/70 rounded-xl p-6 max-w-sm mx-4 text-center shadow-2xl backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">
              Contact Information
            </h3>
            <div className="mb-6 text-gray-800 dark:text-gray-200 text-lg flex flex-col gap-4 items-center">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-green-700 dark:text-green-300" />
                <a href="tel:+260773697564" className="underline hover:text-green-600">
                  +260 77 369 7564
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-700 dark:text-green-300" />
                <a
                  href="https://wa.me/260773697564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-600"
                >
                  WhatsApp Me
                </a>
              </div>
            </div>
            <button
              onClick={() => setShowContact(false)}
              className="px-6 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Motivated Software Engineer with a strong background in designing and developing innovative software
          solutions. Seeking a challenging software engineering role that offers opportunities for growth.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          {[
            "JavaScript", "TypeScript", "React", "React Native", "Flutter", 
            "Next.js", "Node.js", "PostgreSQL"
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-green-100 dark:bg-green-800 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              title: "Ubuntu Lab",
              href: "https://ubuntulab-kimotes-projects.vercel.app/",
              description: `Ubuntu Lab is an innovative e-learning platform 
              that integrates AI-powered tools to personalize learning experiences. 
              It offers interactive courses, smart quizzes, and real-time feedback to 
              help students learn efficiently. The platform supports collaborative learning 
              and provides insightful analytics to track progress and optimize study paths. 
              Built with Next.js, React, and TailwindCSS for a seamless user experience.`,
            },
            {
              title: "FairWorld Assessor",
              href: "https://www.fairworld-assessor.com/",
              description: "Delivering accurate and reliable property assessments in just 1, 2, 3 minutes to empower your investment and decision-making process. Developed in collaboration with Imuks.",
            }
          ].map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 border rounded-lg dark:border-green-300 border-green-700 shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-green-600 dark:text-green-300 hover:underline"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-sm flex justify-center gap-6 flex-wrap text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/kimote"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kimote-zoko-66273820b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:underline-offset-4"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
