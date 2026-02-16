import { Navbar } from './components/Navbar';
import { navItems } from './data/siteContent';
import { useActiveSection } from './hooks/useActiveSection';
import { useTheme } from './hooks/useTheme';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { FooterSection } from './sections/FooterSection';
import { HeroSection } from './sections/HeroSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';

const sectionIds = navItems.map((item) => item.id);

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Navbar items={navItems} activeSection={activeSection} theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <FooterSection />
    </>
  );
}

export default App;
