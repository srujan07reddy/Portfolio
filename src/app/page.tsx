"use client";

import { useEffect, useState } from "react";
import siteData from "../content/profile.json";
import ResearcherTemplate from "../templates/ResearcherTemplate";
import MinimalistTemplate from "../templates/MinimalistTemplate";
import CorporateTemplate from "../templates/CorporateTemplate";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  // Theme Engine Color Mapping
  const themeMap: any = {
    Cyan: { text: "text-cyan-400", accent: "bg-cyan-500", border: "border-cyan-500/30", glow: "shadow-[0_0_20px_rgba(6,182,212,0.2)]" },
    Violet: { text: "text-purple-400", accent: "bg-purple-500", border: "border-purple-500/30", glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]" },
    Emerald: { text: "text-emerald-400", accent: "bg-emerald-500", border: "border-emerald-500/30", glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]" },
    Ruby: { text: "text-red-400", accent: "bg-red-500", border: "border-red-500/30", glow: "shadow-[0_0_20px_rgba(239,68,68,0.2)]" }
  };

  const activeTheme = themeMap[siteData.engine.theme_color] || themeMap.Cyan;

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      {/* Logic to switch between templates based on CMS selection */}
      {siteData.engine.template === "Researcher" ? (
        <ResearcherTemplate siteData={siteData} activeTheme={activeTheme} />
      ) : (
        <MinimalistTemplate siteData={siteData} activeTheme={activeTheme} />
      )}
    </>
  );
}