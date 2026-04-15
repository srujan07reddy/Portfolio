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

  // Parse the comma-separated lists from the CMS
  const rolesArray = siteData.hero.roles.split(',').map(role => role.trim());
  const tagsArray = siteData.hero.tags.split(',').map(tag => tag.trim());
  const labTagsArray = siteData.lab.tags.split(',').map(tag => tag.trim());

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
    <main className="min-h-screen bg-[#050505] text-gray-300 selection:bg-cyan-500 selection:text-black font-sans overflow-hidden">
      
      {/* --- TOP NAV --- */}
      <motion.nav initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800/50 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <h1 className="text-sm font-mono font-bold tracking-widest text-gray-100">
            SRUJAN<span className="text-cyan-400">_REDDY</span>
          </h1>
        </div>
      </motion.nav>

      <div className="pt-32 p-8 md:p-24 max-w-6xl mx-auto space-y-32">
        
        {/* --- 01. HERO SECTION --- */}
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="relative border-l border-cyan-500/20 pl-8 md:pl-12 flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6 font-mono text-xs text-cyan-400">
              <span>&gt; System loaded</span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-cyan-400 inline-block"></motion.span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tight">
              {siteData.hero.name}
            </motion.h2>
            
            {/* Animated Roles */}
            <motion.div variants={fadeInUp} className="h-10 mb-4 overflow-hidden flex items-center relative w-full">
              <span className="text-xl md:text-2xl font-mono text-purple-400 mr-2">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl md:text-2xl font-mono text-purple-400 absolute left-6 whitespace-nowrap"
                >
                  {rolesArray[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

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

            <motion.div variants={fadeInUp} className="font-mono text-xs text-gray-600 flex flex-wrap gap-3 uppercase tracking-wider">
              {tagsArray.map((tag, i) => (
                <span key={i}> {tag} <span className="text-cyan-400/50 mx-1">{i !== tagsArray.length - 1 ? "•" : ""}</span> </span>
              ))}
            </motion.div>
          </div>

          {/* Profile Image Logic */}
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

        {/* --- 02. IDENTITY SECTION --- */}
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

        {/* --- 03. CORE DOMAINS --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">{siteData.domains.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteData.domains.list.map((domain, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-8 border border-gray-800 hover:border-cyan-500/30 bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl group transition-all">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{domain.name}</h4>
                <p className="text-sm text-gray-500">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 04. PROJECTS (Swiper Placeholder) --- */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">04 // FEATURED OPERATIONS</h3>
          <Swiper
            effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full py-10"
          >
            <SwiperSlide className="max-w-md">
              <div className="bg-[#0a0a0a] border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-8 h-[420px] flex flex-col justify-between transition-all mx-2">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 bg-red-500/10 text-red-400 rounded">Hardware/Sec</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">BIOS Theft Tracking</h4>
                  <p className="text-sm text-gray-400 mb-4">Developing a BIOS-based location tracker utilizing a network card API to visualize real-time device mapping.</p>
                </div>
                <div className="font-mono text-xs text-cyan-500">API • Network Defense</div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="max-w-md">
              <div className="bg-[#0a0a0a] border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-8 h-[420px] flex flex-col justify-between transition-all mx-2">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 bg-purple-500/10 text-purple-400 rounded">AI/Automation</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">AI-Powered ERP Platform</h4>
                  <p className="text-sm text-gray-400 mb-4">Integrating Gemini AI and Copilot to enhance content validation and automate workflows.</p>
                </div>
                <div className="font-mono text-xs text-cyan-500">PostgreSQL • Gemini AI</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.section>

        {/* --- 05. AUTOMATION LAB --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">{siteData.lab.title}</h3>
          <p className="text-gray-400 mb-8 max-w-2xl">{siteData.lab.description}</p>
          <div className="flex flex-wrap gap-4">
            {labTagsArray.map((tag, i) => (
               <span key={i} className="px-4 py-2 bg-gray-900 border border-gray-700 text-sm font-mono rounded-full text-gray-300 hover:border-cyan-400 transition-colors">{tag}</span>
            ))}
          </div>
        </motion.section>

        {/* --- 06. CRACK DEVELOPERS / CONSULTING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="bg-gradient-to-r from-gray-900 to-[#050505] border border-gray-800 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="font-mono text-sm text-cyan-400 mb-4">{siteData.consulting.title}</h3>
          <h4 className="text-3xl font-bold text-white mb-4">{siteData.consulting.headline}</h4>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
            {siteData.consulting.body}
          </p>
          <p className="text-gray-500 mb-8 text-sm max-w-2xl">
            {siteData.consulting.sub_body}
          </p>
          <a href={siteData.links.linkedin} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-white text-black font-bold text-sm rounded-md hover:bg-gray-200 transition-colors z-10 relative">
            {siteData.consulting.cta_text}
          </a>
        </motion.section>

        {/* --- 07. FOOTER CONTACT --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center pb-20 pt-10">
           <a href={`mailto:${siteData.links.email}`} className="text-gray-500 hover:text-cyan-400 transition-colors font-mono text-sm">
             [ Terminate Connection or Send Transmission ]
           </a>
        </motion.section>

      </div>
    </main>
  );
}