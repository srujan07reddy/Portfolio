import profileData from '../content/profile.json';
import themeData from '../content/theme.json';

import HeroSection from '../components/HeroSection';
import IdentitySection from '../components/IdentitySection';
import DomainsSection from '../components/DomainsSection';
import ProjectsSection from '../components/ProjectsSection';
import ConsultingSection from '../components/ConsultingSection';
import CustomSection from '../components/CustomSection';

export default function Home() {
  const blocks = profileData.page_blocks || [];
  const themeColor = themeData.theme_color || "Cyan";
  const template = themeData.template || "Researcher";

  // Template Master Styles
  const templateClasses: Record<string, string> = {
    Researcher: "bg-[#050505] text-gray-300 font-mono",
    Minimalist: "bg-white text-black font-sans",
    Corporate: "bg-slate-50 text-slate-900 font-serif"
  };

  const activeSkin = templateClasses[template] || templateClasses.Researcher;

  const renderBlock = (block: any, index: number) => {
    const rawTitle = block.title || "Section";
    const cleanName = rawTitle.includes("//") ? rawTitle.split("//")[1].trim() : rawTitle;
    const sectionId = cleanName.toLowerCase().replace(/\s+/g, "-");

    const props = { 
      key: index, 
      id: sectionId, 
      data: block, 
      themeColor, 
      template 
    };

    switch (block.type) {
      case 'identity_block': return <IdentitySection {...props} />;
      case 'domains_block': return <DomainsSection {...props} />;
      case 'projects_block': return <ProjectsSection {...props} />;
      case 'consulting_block': return <ConsultingSection {...props} />;
      case 'custom_block': return <CustomSection {...props} />;
      default: return null;
    }
  };

  return (
    <main className={`min-h-screen transition-colors duration-700 ${activeSkin}`}>
      <div className="max-w-6xl mx-auto px-6 pb-24">
        
        {/* HERO SECTION */}
        <HeroSection data={profileData.hero} themeColor={themeColor} template={template} />

        {/* DYNAMIC CONTENT */}
        <div className="flex flex-col gap-32">
          {blocks.map((block, index) => renderBlock(block, index))}
        </div>
        
      </div>
    </main>
  );
}