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
    <div className="mx-auto grid h-dvh w-full max-w-370 grid-cols-[84px_minmax(540px,1fr)_340px] gap-3 bg-[radial-gradient(circle_at_9%_5%,rgba(88,116,216,0.22),transparent_38%),radial-gradient(circle_at_91%_93%,rgba(210,138,34,0.16),transparent_36%),linear-gradient(135deg,#f5f2eb_0%,#d9e3ec_52%,#e8dfd2_100%)] p-4 max-[1120px]:grid-cols-[72px_minmax(500px,1fr)_290px] max-[1120px]:p-3 max-[900px]:flex max-[900px]:h-auto max-[900px]:min-h-screen max-[900px]:flex-col max-[900px]:gap-2.5 max-[900px]:p-2.5 max-[420px]:gap-1.5 max-[420px]:p-1.5 dark:bg-[radial-gradient(circle_at_8%_4%,rgba(72,111,164,0.24),transparent_36%),radial-gradient(circle_at_92%_94%,rgba(61,94,138,0.2),transparent_34%),linear-gradient(135deg,#06101d_0%,#0b1b2d_52%,#10263d_100%)]">
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
