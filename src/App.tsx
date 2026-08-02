import { MobileNavigation } from "./components/layout/MobileNavigation";
import { NavigationRail } from "./components/layout/NavigationRail";
import { ProfileCard } from "./components/layout/ProfileCard";
import { AboutSection } from "./components/sections/AboutSection";
import { ContactSection } from "./components/sections/ContactSection";
import { ResumeSection } from "./components/sections/ResumeSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { TechStackSection } from "./components/sections/TechStackSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";

function App() {
  return (
    <div className="mx-auto grid h-dvh w-full max-w-[1480px] grid-cols-[84px_minmax(540px,1fr)_340px] gap-3 bg-[radial-gradient(circle_at_8%_4%,rgba(100,116,124,0.2),transparent_34%),radial-gradient(circle_at_92%_94%,rgba(150,165,137,0.22),transparent_32%),linear-gradient(135deg,#efeeea_0%,#dde0e1_52%,#e7e4de_100%)] p-4 max-[1120px]:grid-cols-[72px_minmax(500px,1fr)_290px] max-[1120px]:p-3 max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-screen max-[900px]:flex-col max-[900px]:gap-2.5 max-[900px]:p-2.5 max-[420px]:gap-1.5 max-[420px]:p-1.5 dark:bg-[radial-gradient(circle_at_8%_4%,rgba(105,122,130,0.2),transparent_36%),radial-gradient(circle_at_92%_94%,rgba(143,159,127,0.16),transparent_34%),linear-gradient(135deg,#111416_0%,#191d20_52%,#171815_100%)]">
      <NavigationRail />

      <main
        className="content-deck relative min-h-0 scroll-auto overflow-x-hidden overflow-y-auto rounded-[28px] border border-[rgba(25,44,62,0.12)] bg-[#f4f3ef] shadow-[0_14px_45px_rgba(25,44,62,0.08)] [scrollbar-color:rgba(25,44,62,0.24)_transparent] [scrollbar-width:thin] max-[900px]:order-2 max-[900px]:overflow-visible max-[420px]:rounded-[22px] dark:border-white/[0.09] dark:bg-[#181c1f] dark:text-[#edf1ef] dark:shadow-[0_16px_55px_rgba(0,0,0,0.25)] dark:[scrollbar-color:rgba(255,255,255,0.2)_transparent]"
        aria-label="Portfolio content"
      >
        <AboutSection />
        <ServicesSection />
        <ResumeSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <ProfileCard />
      <MobileNavigation />
    </div>
  );
}

export default App;
