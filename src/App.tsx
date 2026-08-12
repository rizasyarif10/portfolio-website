import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { NavigationRail } from "@/components/layout/NavigationRail";
import { ProfileCard } from "@/components/layout/ProfileCard";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";

function App() {
  return (
    <div className="mx-auto grid h-dvh w-full max-w-370 grid-cols-[84px_minmax(540px,1fr)_340px] gap-3 p-4 max-[1120px]:grid-cols-[72px_minmax(500px,1fr)_290px] max-[1120px]:p-3 max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-screen max-[900px]:flex-col max-[900px]:gap-2.5 max-[900px]:p-2.5 max-[420px]:gap-1.5 max-[420px]:p-1.5">
      <NavigationRail />

      <main
        className="content-deck relative min-h-0 scroll-auto overflow-x-hidden overflow-y-auto rounded-[28px] border border-[rgba(25,44,62,0.12)] bg-[#f4f3ef] shadow-[0_14px_45px_rgba(25,44,62,0.08)] [scrollbar-color:rgba(25,44,62,0.24)_transparent] [scrollbar-width:thin] max-[900px]:order-2 max-[900px]:overflow-visible max-[420px]:rounded-[22px] dark:border-[#8fb7ff]/15 dark:bg-[#0b1726] dark:text-[#edf1f8] dark:shadow-[0_16px_55px_rgba(2,8,18,0.38)] dark:[scrollbar-color:rgba(143,183,255,0.25)_transparent]"
        aria-label="Portfolio content"
      >
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ResumeSection />
        <TechStackSection />
        <ContactSection />
      </main>

      <ProfileCard />
      <MobileNavigation />
    </div>
  );
}

export default App;
