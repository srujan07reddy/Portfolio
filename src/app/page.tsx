"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 1. IMPORT YOUR DYNAMIC PROFILE DATA
import profileData from "../content/profile.json";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

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

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-24 flex flex-col-reverse md:flex-row gap-8 items-center md:items-start"
      >
        <div className="flex-1">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            The Researcher's Vision.
          </h2>
          {/* 2. DYNAMIC BIO */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {profileData.bio}
          </p>
          <div className="flex gap-4 flex-wrap">
            {/* 3. DYNAMIC URLS */}
            <a href={`mailto:${profileData.email}`} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
              Contact Me
            </a>
            <a href={profileData.linkedin_url} target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium">
              LinkedIn
            </a>
            <a href={profileData.github_url} target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition font-medium">
              GitHub
            </a>
          </div>
        </div>
        
        {/* 4. DYNAMIC AVATAR */}
        {profileData.avatar && (
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src={profileData.avatar} 
              alt="Profile" 
              className="w-full h-full object-cover rounded-full border-4 border-gray-200 dark:border-gray-800 shadow-lg"
            />
          </div>
        )}
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
          {/* 5. DYNAMIC SKILLS MAPPING */}
          {profileData.skills.map((skillGroup, index) => (
            <li key={index}>
              <span className="font-bold text-blue-500">{skillGroup.category}:</span> {skillGroup.items}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Placeholder for Dynamic Swiper.js Project Carousel (We will wire this up next!) */}
      <section className="mb-24">
        <h3 className="text-2xl font-bold border-b border-gray-300 dark:border-gray-700 pb-2 mb-6">
          Open-Source & AI Initiatives
        </h3>
        <div className="p-12 bg-gray-100 dark:bg-gray-900 rounded-xl text-center border border-dashed border-gray-400 dark:border-gray-600">
          <p className="text-gray-500">We will connect the Markdown project files to the Swiper carousel next!</p>
        </div>
      </section>

    </main>
  );
}