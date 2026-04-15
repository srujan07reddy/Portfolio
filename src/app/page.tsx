"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Pulling your dynamic links/avatar from the CMS
import profileData from "../content/profile.json";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0, 0, 0.2, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    // Forced Matte Black Background with Cyber Accents
    <main className="min-h-screen bg-[#050505] text-gray-300 selection:bg-cyan-500 selection:text-black font-sans">
      
      {/* --- TOP NAV: ENCRYPTED SIGNAL LINE --- */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-gray-800/50 px-8 py-5 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
          <h1 className="text-sm font-mono font-bold tracking-widest text-gray-100">
            SRUJAN<span className="text-cyan-400">_REDDY</span>
          </h1>
        </div>
        <div className="hidden md:flex gap-6 font-mono text-xs text-gray-500 uppercase">
          <span className="hover:text-cyan-400 cursor-pointer transition">Status: Secure</span>
          <span className="hover:text-cyan-400 cursor-pointer transition">Loc: Chennai</span>
        </div>
      </motion.nav>

      <div className="pt-32 p-8 md:p-24 max-w-6xl mx-auto space-y-32">
        
        {/* --- 1. HERO: COMMAND CENTER --- */}
        <motion.section 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative border-l border-cyan-500/20 pl-8 md:pl-12"
        >
          {/* Terminal Intro */}
          <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6 font-mono text-xs text-cyan-400">
            <span>&gt; Initializing secure innovation profile</span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-cyan-400 inline-block"></motion.span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black mb-4 text-white tracking-tight">
            Srujan Reddy.
          </motion.h2>
          
          <motion.h3 variants={fadeInUp} className="text-xl md:text-2xl font-mono text-purple-400 mb-6">
            Cybersecurity | Automation | Innovation Strategy
          </motion.h3>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
            Building secure systems, automating workflows, and helping startups turn ideas into scalable digital products.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="px-6 py-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md font-mono text-sm hover:bg-cyan-500 hover:text-black transition-all">
              [ View Operations ]
            </a>
            <a href={`mailto:${profileData.email}`} className="px-6 py-3 bg-transparent text-gray-300 border border-gray-700 rounded-md font-mono text-sm hover:border-gray-400 transition-all">
              Initiate Contact
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="font-mono text-xs text-gray-600 flex flex-wrap gap-3 uppercase tracking-wider">
            <span>Linux</span> • <span>Python</span> • <span className="text-purple-400/70">n8n</span> • <span>Burp Suite</span> • <span>Open Source</span> • <span className="text-cyan-400/70">Startup Consulting</span>
          </motion.div>
        </motion.section>

        {/* --- 2. ABOUT: IDENTITY & STATS --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div variants={fadeInUp}>
            <h3 className="font-mono text-sm text-cyan-400 mb-4 border-b border-gray-800 pb-2">01 // IDENTITY</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              I’m a cybersecurity-focused technologist who combines security thinking, Linux workflows, automation systems, and startup problem-solving. I work at the intersection of defense, digital transformation, and innovation, building solutions that are practical, scalable, and business-aware.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1">06+</h4><p className="text-xs font-mono text-gray-500 uppercase">Projects Built</p></div>
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1">2025</h4><p className="text-xs font-mono text-cyan-500 uppercase">Open Source Entry</p></div>
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1">IEEE</h4><p className="text-xs font-mono text-gray-500 uppercase">Secretary</p></div>
             <div className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg"><h4 className="text-3xl font-bold text-white mb-1">02</h4><p className="text-xs font-mono text-gray-500 uppercase">Hackathons</p></div>
          </motion.div>
        </motion.section>

        {/* --- 3. EXPERTISE: CAPABILITY MATRIX --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">02 // CAPABILITY MATRIX</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="p-8 border border-gray-800 hover:border-red-500/30 bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl group transition-all">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">Cybersecurity Operations</h4>
              <p className="text-sm text-gray-500">Vulnerability analysis, web security basics, network defense, Linux hardening, and reconnaissance workflows.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-gray-800 hover:border-purple-500/30 bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl group transition-all">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">Automation & AI Workflows</h4>
              <p className="text-sm text-gray-500">n8n automation, prompt engineering, AI-assisted systems, and business workflow optimization.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-gray-800 hover:border-cyan-500/30 bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl group transition-all">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">Open Source Ecosystems</h4>
              <p className="text-sm text-gray-500">GitHub collaboration, community-driven learning, and technical event participation.</p>
            </motion.div>
            <motion.div variants={fadeInUp} className="p-8 border border-gray-800 hover:border-green-500/30 bg-gradient-to-b from-gray-900/50 to-transparent rounded-xl group transition-all">
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Innovation & Consulting</h4>
              <p className="text-sm text-gray-500">Translating technical ideas into startup-ready, secure, and scalable digital solutions.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* --- 4. PROJECTS: SECURE OPERATIONS --- */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">03 // FEATURED OPERATIONS</h3>
          <Swiper
            effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}
            coverflowEffect={{ rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            modules={[EffectCoverflow, Pagination]}
            className="w-full py-10"
          >
            {/* Project Card 1 */}
            <SwiperSlide className="max-w-md">
              <div className="bg-[#0a0a0a] border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-8 h-[420px] flex flex-col justify-between transition-all">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 bg-red-500/10 text-red-400 rounded">Hardware/Sec</span>
                    <span className="text-xs font-mono text-gray-600">Active</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">BIOS Theft Tracking</h4>
                  <p className="text-sm text-gray-400 mb-4">Developing a BIOS-based location tracker utilizing a network card API to visualize real-time device mapping.</p>
                  <div className="text-xs text-gray-500"><strong className="text-gray-300">Impact:</strong> Prevents unauthorized hardware fencing via persistent tracking.</div>
                </div>
                <div className="font-mono text-xs text-cyan-500">API • Network Defense • Dashboards</div>
              </div>
            </SwiperSlide>

             {/* Project Card 2 */}
             <SwiperSlide className="max-w-md">
              <div className="bg-[#0a0a0a] border border-gray-800 hover:border-cyan-500/50 rounded-2xl p-8 h-[420px] flex flex-col justify-between transition-all">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-mono px-2 py-1 bg-purple-500/10 text-purple-400 rounded">AI/Automation</span>
                    <span className="text-xs font-mono text-gray-600">Active</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-3">AI-Powered ERP Platform</h4>
                  <p className="text-sm text-gray-400 mb-4">Integrating Gemini AI and GitHub Copilot to enhance content validation and automate academic workflows.</p>
                  <div className="text-xs text-gray-500"><strong className="text-gray-300">Impact:</strong> Scales operational efficiency for educational institutions.</div>
                </div>
                <div className="font-mono text-xs text-cyan-500">PostgreSQL • Gemini AI • JavaScript</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </motion.section>

        {/* --- 5. AUTOMATION LAB --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          <h3 className="font-mono text-sm text-cyan-400 mb-8 border-b border-gray-800 pb-2">04 // OPEN SOURCE & AUTOMATION LAB</h3>
          <p className="text-gray-400 mb-8">Exploring open ecosystems, automating repetitive workflows, and building practical AI-assisted systems.</p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 text-sm font-mono rounded-full text-gray-300 hover:border-cyan-400 transition-colors">_n8n Workflow Experiments</span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 text-sm font-mono rounded-full text-gray-300 hover:border-cyan-400 transition-colors">_Linux Scripting Practice</span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 text-sm font-mono rounded-full text-gray-300 hover:border-cyan-400 transition-colors">_Agent Prompt Engineering</span>
            <span className="px-4 py-2 bg-gray-900 border border-gray-700 text-sm font-mono rounded-full text-gray-300 hover:border-cyan-400 transition-colors">_Community Contributions</span>
          </div>
        </motion.section>

        {/* --- 6. CRACK DEVELOPERS / CONSULTING --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="bg-gradient-to-r from-gray-900 to-[#050505] border border-gray-800 p-8 md:p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          <h3 className="font-mono text-sm text-cyan-400 mb-4">05 // BUSINESS ALIGNMENT</h3>
          <h4 className="text-3xl font-bold text-white mb-4">Working with Crack Developers</h4>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
            I contribute to innovation-focused thinking around secure systems, automation-led workflows, and business-centered technology strategy in alignment with <strong className="text-gray-200">Crack Developers’</strong> mission of helping businesses build scalable digital solutions.
          </p>
          <p className="text-gray-500 mb-8 text-sm max-w-2xl">
            I help early-stage teams and businesses think through secure product design, digital operations, and innovation strategy—bridging technical execution with real business needs.
          </p>
          <a href={profileData.linkedin_url} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-white text-black font-bold text-sm rounded-md hover:bg-gray-200 transition-colors">
            Discuss a Project
          </a>
        </motion.section>

        {/* --- 7. SECURE CONTACT --- */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="text-center pb-20">
          <h3 className="font-mono text-sm text-cyan-400 mb-6">06 // INITIATE COMMS</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Open to cybersecurity projects, automation workflows, startup consulting, and innovation collaborations.
          </p>
          <div className="flex justify-center gap-6">
            <a href={`mailto:${profileData.email}`} className="px-8 py-4 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-md font-mono hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              Establish Secure Connection
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}