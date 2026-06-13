import { Marquee } from './components/Marquee';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { marqueeItems, navItems } from './data/siteContent';
import { useActiveSection } from './hooks/useActiveSection';
import { useScrollProgress } from './hooks/useScrollProgress';
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
  const { progress, scrolled } = useScrollProgress();

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <ScrollProgress progress={progress} />

      <Navbar
        items={navItems}
        activeSection={activeSection}
        theme={theme}
        scrolled={scrolled}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content">
        <HeroSection />
        <Marquee items={marqueeItems} />
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
