"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Importing the dynamic JSON payload from your CMS
import siteData from "../content/profile.json";

// Animation Variants with the [0, 0, 0.2, 1] as any fix to satisfy TypeScript
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

  // Parse comma-separated strings from CMS into Arrays
  const rolesArray = siteData.hero.roles.split(',').map(role => role.trim());
  const tagsArray = siteData.hero.tags.split(',').map(tag => tag.trim());
  const labTagsArray = siteData.lab.tags.split(',').map(tag => tag.trim());

  // Theme Engine Color Mapping
  const themeMap: any = {
    Cyan: {
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      accent: "bg-cyan-500",
      glow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]",
      hover: "hover:border-cyan-400"
    },
    Violet: {
      text: "text-purple-400",
      border: "border-purple-500/30",
      accent: "bg-purple-500",
      glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]",
      hover: "hover:border-purple-400"
    },
    Emerald: {
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      accent: "bg-emerald-500",
      glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]",
      hover: "hover:border-emerald-400"
    },
    Ruby: {
      text: "text-red-400",
      border: "border-red-500/30",
      accent: "bg-red-500",
      glow: "shadow-[0_0_20px_rgba(239,68,68,0.2)]",
      hover: "hover:border-red-400"
    }
  };

  const activeTheme = themeMap[siteData.engine.theme_color] || themeMap.Cyan;

  useEffect(() => {
    setMounted(true);
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % rolesArray.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [rolesArray.length]);

  if (!mounted) return null;

  return (
    <main className={`min-h-screen bg-[#050505] text-gray-300 font-sans overflow-x-hidden selection:${activeTheme.accent} selection:text-black`}>
      
      {/* --- TOP NAVIGATION --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800/50 px-8 py-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${activeTheme.accent} animate-pulse`}></div>
          <h1 className="text-sm font-mono font-bold tracking-widest text-gray-100">
            SRUJAN<span className={activeTheme.text}>_REDDY</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
          <span>System: {siteData.engine.template}</span>
          <span className={activeTheme.text}>Node: {siteData.engine.theme_color}</span>
        </div>
      </motion.nav>

      <div className="pt-32 p-8 md:p-24 max-w-6xl mx-auto space-y-32">
        
        {/* --- 01. HERO SECTION (Sub-Template Aware) --- */}
        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="relative border-l border-gray-800 pl-8 md:pl-12 flex flex-col-reverse md:flex-row gap-12 items-center">
          <div className="flex-1">
            <motion.div variants={fadeInUp} className={`flex items-center gap-2 mb-6 font-mono text-xs ${activeTheme.text}`}>
              <span>&gt; {siteData.engine.hero_style === "Animated Typing" ? "Initializing secure stream..." : "System ready"}</span>
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className={`w-2 h-4 ${activeTheme.accent} inline-block`}></motion.span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="text-5xl md:text-8xl font-black mb-4 text-white tracking-tighter">
              {siteData.hero.name}
            </motion.h2>
            
            {/* Conditional Sub-Template: Animated Typing vs Static */}
            <motion.div variants={fadeInUp} className="h-10 mb-4 flex items-center relative w-full">
              <span className={`text-xl md:text-2xl font-mono ${activeTheme.text} mr-2`}>&gt;</span>
              {siteData.engine.hero_style === "Animated Typing" ? (
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className={`text-xl md:text-2xl font-mono text-white absolute left-6 whitespace-nowrap`}
                  >
                    {rolesArray[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              ) : (
                <span className="text-xl md:text-2xl font-mono text-white">{rolesArray[0]}</span>
              )}
            </motion.div>

            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8 mt-6">
              {siteData.hero.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
              <a href={`mailto:${siteData.links.email}`} className={`px-8 py-4 bg-transparent border ${activeTheme.border} ${activeTheme.text} rounded-md font-mono text-xs uppercase tracking-widest hover:${activeTheme.accent} hover:text-black transition-all ${activeTheme.glow}`}>
                Establish Comms
              </a>
              <a href={siteData.links.github} target="_blank" rel="noreferrer" className="px-8 py-4 border border-gray-800 text-gray-500 rounded-md font-mono text-xs uppercase tracking-widest hover:border-gray-600 transition-all">
                Access Repos
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="font-mono text-[10px] text-gray-600 flex flex-wrap gap-3 uppercase tracking-[0.2em]">
              {tagsArray.map((tag, i) => (
                <span key={i}> {tag} {i !== tagsArray.length - 1 && <span className="opacity-30">/</span>} </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative group">
             <div className={`absolute -inset-4 ${activeTheme.accent} opacity-5 blur-3xl rounded-full group-hover:opacity-10 transition-opacity`}></div>
             {siteData.hero.avatar ? (
                <img src={siteData.hero.avatar} alt="Researcher" className="w-full h-full object-cover rounded-full border border-gray-800 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700" />
             ) : (
                <div className="w-full h-full rounded-full border border-dashed border-gray-800 flex items-center justify-center bg-gray-900/20">
                  <span className="font-mono text-[10px] uppercase text-gray-600 tracking-tighter">No Media Found</span>
                </div>
             )}
          </motion.div>
        </motion.section>

        {/* --- 02. IDENTITY / ABOUT --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeInUp}>
            <h3 className={`font-mono text-xs uppercase tracking-widest ${activeTheme.text} mb-6`}>{siteData.identity.title}</h3>
            <p className="text-gray-400 leading-relaxed text-xl font-light">
              {siteData.identity.bio}
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
             <div className="p-8 bg-gray-900/30 border border-gray-800 rounded-2xl">
               <h4 className="text-4xl font-black text-white mb-1">{siteData.identity.stat_projects}</h4>
               <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Active Builds</p>
             </div>
             <div className="p-8 bg-gray-900/30 border border-gray-800 rounded-2xl">
               <h4 className="text-lg font-bold text-white mb-1 truncate">{siteData.identity.stat_leadership}</h4>
               <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Leadership</p>
             </div>
          </motion.div>
        </motion.section>

        {/* --- 03. CORE DOMAINS --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className={`font-mono text-xs uppercase tracking-widest ${activeTheme.text} mb-12`}>{siteData.domains.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-800 border border-gray-800">
            {siteData.domains.list.map((domain, index) => (
              <motion.div key={index} variants={fadeInUp} className="p-12 bg-[#050505] hover:bg-gray-900/20 transition-colors group">
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-2 transition-transform">{domain.name}</h4>
                <p className="text-gray-500 leading-relaxed text-sm">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* --- 04. FEATURED PROJECTS (SWIPER) --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className={`font-mono text-xs uppercase tracking-widest ${activeTheme.text} mb-12`}>03 // FEATURED OPERATIONS</h3>
          <Swiper
            effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
            autoplay={{ delay: 4000 }}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2, slideShadows: false }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-full pb-12"
          >
            {/* Example Project 1 */}
            <SwiperSlide className="max-w-md">
              <div className={`bg-[#0a0a0a] border border-gray-800 ${activeTheme.hover} rounded-3xl p-10 h-[450px] flex flex-col justify-between transition-all shadow-2xl`}>
                <div className="space-y-6">
                  <span className={`text-[10px] font-mono px-3 py-1 border ${activeTheme.border} ${activeTheme.text} rounded-full`}>Cybersecurity</span>
                  <h4 className="text-3xl font-bold text-white tracking-tight">BIOS Theft Tracking</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Developing persistent hardware-level security tracking utilizing network card APIs for unauthorized fencing prevention.</p>
                </div>
                <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Status: Deployment Ready</div>
              </div>
            </SwiperSlide>
            {/* Example Project 2 */}
            <SwiperSlide className="max-w-md">
              <div className={`bg-[#0a0a0a] border border-gray-800 ${activeTheme.hover} rounded-3xl p-10 h-[450px] flex flex-col justify-between transition-all shadow-2xl`}>
                <div className="space-y-6">
                  <span className={`text-[10px] font-mono px-3 py-1 border ${activeTheme.border} ${activeTheme.text} rounded-full`}>AI/Automation</span>
                  <h4 className="text-3xl font-bold text-white tracking-tight">AI-Powered ERP</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Scaling content validation and academic workflows through integrated Gemini AI and GitHub Copilot automation.</p>
                </div>
                <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">Status: Scale Testing</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.section>

        {/* --- 05. AUTOMATION LAB --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className={`font-mono text-xs uppercase tracking-widest ${activeTheme.text} mb-8`}>{siteData.lab.title}</h3>
          <p className="text-gray-400 mb-10 text-xl font-light max-w-2xl leading-relaxed">{siteData.lab.description}</p>
          <div className="flex flex-wrap gap-3">
            {labTagsArray.map((tag, i) => (
               <span key={i} className="px-5 py-2 bg-gray-900/50 border border-gray-800 text-[11px] font-mono rounded-md text-gray-400 hover:text-white transition-colors tracking-tighter">{tag}</span>
            ))}
          </div>
        </motion.section>

        {/* --- 06. CONSULTING & CRACK DEVS --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="bg-white/5 border border-gray-800 p-10 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className={`absolute -top-24 -right-24 w-96 h-96 ${activeTheme.accent} opacity-[0.03] blur-[120px] rounded-full`}></div>
          <h3 className={`font-mono text-xs uppercase tracking-widest ${activeTheme.text} mb-6`}>{siteData.consulting.title}</h3>
          <h4 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">{siteData.consulting.headline}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <p className="text-gray-400 leading-relaxed text-lg">{siteData.consulting.body}</p>
            <div className="space-y-8">
              <p className="text-gray-500 text-sm italic border-l-2 border-gray-800 pl-6">{siteData.consulting.sub_body}</p>
              <a href={siteData.links.linkedin} target="_blank" rel="noreferrer" className={`inline-block px-10 py-5 bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-transform`}>
                {siteData.consulting.cta_text}
              </a>
            </div>
          </div>
        </motion.section>

        {/* --- 07. FOOTER --- */}
        <footer className="text-center pt-20 pb-10">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] mb-4">Transmission End // Secure Session</p>
          <a href={`mailto:${siteData.links.email}`} className={`text-[10px] font-mono ${activeTheme.text} hover:opacity-50 transition-opacity`}>
            [ DISCONNECT / SEND_MESSAGE ]
          </a>
        </footer>

      </div>
    </main>
  );
}