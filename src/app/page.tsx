"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Pulling your strictly sectioned data
import siteData from "../content/profile.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as any } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Parse the comma-separated roles from the CMS
  const rolesArray = siteData.hero.roles.split(',').map(role => role.trim());
  const tagsArray = siteData.hero.tags.split(',').map(tag => tag.trim());

  // Logic for the changing animated roles
  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % rolesArray.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(intervalId);
  }, [rolesArray.length]);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#050505] text-gray-300 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* TOP NAV */}
      <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800/50 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <h1 className="text-sm font-mono font-bold tracking-widest text-gray-100">
            SRUJAN<span className="text-cyan-400">_REDDY</span>
          </h1>
        </div>
      </motion.nav>

      <div className="pt-32 p-8 md:p-24 max-w-6xl mx-auto space-y-32">
        
        {/* --- HERO SECTION --- */}
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="relative border-l border-cyan-500/20 pl-8 md:pl-12 flex flex-col-reverse md:flex-row gap-12 items-center">
          
          <div className="flex-1">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6 font-mono text-xs text-cyan-400">
              <span>&gt; System loaded</span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-cyan-400 inline-block"></motion.span>
            </motion.div>

            {/* DYNAMIC CMS NAME */}
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tight">
              {siteData.hero.name}
            </motion.h2>
            
            {/* ANIMATED ROLES FROM CMS */}
            <motion.div variants={fadeInUp} className="h-10 mb-4 overflow-hidden flex items-center">
              <span className="text-xl md:text-2xl font-mono text-purple-400 mr-2">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-mono text-purple-400 absolute"
                >
                  {rolesArray[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* DYNAMIC SUBTITLE */}
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 mt-6">
              {siteData.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <a href={`mailto:${siteData.links.email}`} className="px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md font-mono text-sm hover:bg-cyan-500 hover:text-black transition-all">
                Initiate Contact
              </a>
              <a href={siteData.links.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-transparent text-gray-300 border border-gray-700 rounded-md font-mono text-sm hover:border-gray-400 transition-all">
                GitHub Files
              </a>
            </motion.div>

            {/* DYNAMIC TAGS */}
            <motion.div variants={fadeInUp} className="font-mono text-xs text-gray-600 flex flex-wrap gap-3 uppercase tracking-wider">
              {tagsArray.map((tag, i) => (
                <span key={i}> {tag} <span className="text-cyan-400/50 mx-1">{i !== tagsArray.length - 1 ? "•" : ""}</span> </span>
              ))}
            </motion.div>
          </div>

          {/* DYNAMIC PROFILE IMAGE HANDLING */}
          <motion.div variants={fadeInUp} className="w-48 h-48 md:w-72 md:h-72 shrink-0">
             {siteData.hero.avatar ? (
                <img src={siteData.hero.avatar} alt="Profile" className="w-full h-full object-cover rounded-full border border-gray-800 shadow-[0_0_30px_rgba(6,182,212,0.1)] grayscale hover:grayscale-0 transition-all duration-500" />
             ) : (
                <div className="w-full h-full rounded-full border border-dashed border-gray-800 flex items-center justify-center bg-gray-900/50">
                  <span className="font-mono text-xs text-gray-500 text-center">Awaiting<br/>Image Upload</span>
                </div>
             )}
          </motion.div>

        </motion.section>

        {/* --- IDENTITY SECTION --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp}>
            <h3 className="font-mono text-sm text-cyan-400 mb-4 border-b border-gray-800 pb-2">{siteData.identity.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {siteData.identity.bio}
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1">{siteData.identity.stat_projects}</h4><p className="text-xs font-mono text-gray-500 uppercase">Projects Built</p></div>
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1 text-center truncate">{siteData.identity.stat_leadership}</h4><p className="text-xs font-mono text-gray-500 uppercase text-center mt-2">Leadership</p></div>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}