"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch for theme toggle
  useEffect(() => setMounted(true), []);

  return (
    <main className="min-h-screen p-8 md:p-24 max-w-5xl mx-auto">
      {/* Navigation & Theme Toggle */}
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-xl font-bold tracking-tighter">Srujan Reddy_</h1>
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md text-sm font-mono hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        )}
      </nav>

      {/* Hero Section with Framer Motion */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          The Researcher's Vision.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          Dedicated open-source contributor, deep cybersecurity professional, and AI integration specialist. 
          Specializing in vulnerability assessment, ethical hacking, network defense, and researching 
          foundational architectures like AI-centric operating systems.
        </p>
        <div className="flex gap-4">
          <a href="mailto:srujan07reddy@gmail.com" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            Contact Me
          </a>
          <a href="https://linkedin.com/in/srujan-reddy-sandupatla" target="_blank" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium">
            LinkedIn
          </a>
        </div>
      </motion.section>

      {/* Technical Arsenal Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-24"
      >
        <h3 className="text-2xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-6">
          Technical & Research Arsenal
        </h3>
        <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-mono text-sm">
          <li><span className="font-bold text-blue-500">AI & Automation:</span> Prompt Engineering, n8n, Fine-tuning agents, Building agents</li>
          <li><span className="font-bold text-blue-500">Cybersecurity:</span> Nmap, Burp Suite, Metasploit, Wireshark, Splunk, Autopsy, Hashcat</li>
          <li><span className="font-bold text-blue-500">OS & Cloud:</span> Kali Linux, Ubuntu, AWS/Azure Fundamentals</li>
        </ul>
      </motion.section>

      {/* Placeholder for Swiper.js Project Carousel */}
      {/* Swiper.js Project Carousel */}
      <section className="mb-24">
        <h3 className="text-2xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-6">
          Open-Source & AI Initiatives
        </h3>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl h-full shadow-sm hover:shadow-md transition">
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">Ongoing</span>
              <h4 className="text-xl font-bold mb-3">AI-Powered ERP Platform</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Architecting an AI-driven ERP integrating Gemini AI, Perplexity, and GitHub Copilot for optimized workflows.
              </p>
              <span className="text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">PostgreSQL / JavaScript</span>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl h-full shadow-sm hover:shadow-md transition">
              <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2 block">Completed</span>
              <h4 className="text-xl font-bold mb-3">Linux Hardening Lab</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Configured a secure Linux environment applying foundational security practices, firewall setups, and SSH hardening.
              </p>
              <span className="text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">Kali Linux / Bash</span>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="p-8 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl h-full shadow-sm hover:shadow-md transition">
              <span className="text-xs font-bold text-green-500 uppercase tracking-wider mb-2 block">Ongoing</span>
              <h4 className="text-xl font-bold mb-3">BIOS Tracking for Theft</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Developing a BIOS-based location tracker utilizing a network card API with a live visual dashboard.
              </p>
              <span className="text-xs font-mono bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded">Network API / Dashboard</span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

    </main>
  );
}