"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import profileData from "../content/profile.json";

// Animation Variants for "Staggered" entry
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white selection:bg-blue-500 selection:text-white">
      
      {/* 1. ANIMATED NAVBAR */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800 px-8 py-4 flex justify-between items-center"
      >
        <motion.h1 whileHover={{ scale: 1.1 }} className="text-xl font-black tracking-tighter cursor-pointer">
          SRUJAN_REDDY <span className="text-blue-600">.</span>
        </motion.h1>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:rotate-12 transition-transform">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </motion.nav>

      <div className="pt-32 p-8 md:p-24 max-w-6xl mx-auto">
        
        {/* 2. HERO SECTION WITH DEEP RESEARCHER VIBE */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-32 flex flex-col md:flex-row items-center gap-12"
        >
          <motion.div variants={fadeInUp} className="flex-1">
            <h2 className="text-5xl md:text-8xl font-black mb-8 leading-none tracking-tight">
              DEEP <br/> <span className="text-blue-600">RESEARCHER.</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed mb-10">
              {profileData.bio}
            </p>
            <div className="flex gap-6">
              <motion.a whileHover={{ y: -5 }} href={`mailto:${profileData.email}`} className="px-8 py-4 bg-blue-600 rounded-full font-bold shadow-lg shadow-blue-500/20">Contact</motion.a>
              <motion.a whileHover={{ y: -5 }} href={profileData.github_url} className="px-8 py-4 border border-gray-700 rounded-full font-bold">GitHub</motion.a>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img src={profileData.avatar} className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border-2 border-white/10" alt="Srujan Reddy" />
          </motion.div>
        </motion.section>

        {/* 3. SKILLS GRID WITH HOVER ANIMATIONS */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mb-32"
        >
          <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {profileData.skills.map((skill, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl"
              >
                <h4 className="font-bold text-lg mb-2 text-blue-500">{skill.category}</h4>
                <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">{skill.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 4. PREMIUM COVERFLOW SLIDER FOR PROJECTS */}
        <motion.section 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           className="mb-32"
        >
          <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-12">Featured Initiatives</h3>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 3000 }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="w-full py-10"
          >
            {/* Example Slide - You can map these from your dynamic projects later */}
            <SwiperSlide className="max-w-md">
              <div className="bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 p-8 h-[400px] flex flex-col justify-end">
                <h4 className="text-2xl font-bold mb-2">BIOS Tracking System</h4>
                <p className="text-gray-400 mb-6">Deep research into hardware-level security and real-time location tracking.</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full border border-blue-500/20">CyberSecurity</span>
                  <span className="text-xs bg-cyan-500/10 text-cyan-500 px-3 py-1 rounded-full border border-cyan-500/20">Firmware</span>
                </div>
              </div>
            </SwiperSlide>
            {/* Add more SwiperSlides here */}
          </Swiper>
        </motion.section>

      </div>
    </main>
  );
}