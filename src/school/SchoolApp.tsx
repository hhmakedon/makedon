import { Marquee } from '../components/Marquee';
import { Navbar } from '../components/Navbar';
import { ScrollProgress } from '../components/ScrollProgress';
import { Globe, Linkedin } from '../components/icons';
import { useActiveSection } from '../hooks/useActiveSection';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useTheme } from '../hooks/useTheme';
import { ContactSection } from '../sections/ContactSection';
import { FooterSection } from '../sections/FooterSection';
import { schoolMarqueeItems, schoolNavItems } from './schoolContent';
import { CredentialsSection } from './sections/CredentialsSection';
import { FocusAreasSection } from './sections/FocusAreasSection';
import { InternshipSection } from './sections/InternshipSection';
import { SchoolExperienceSection } from './sections/SchoolExperienceSection';
import { SchoolHero } from './sections/SchoolHero';
import { SchoolProjectsSection } from './sections/SchoolProjectsSection';

const sectionIds = schoolNavItems.map((item) => item.id);

const schoolSocials = [
  { href: 'https://www.linkedin.com/in/haveemakedon/', label: 'linkedin.com/in/haveemakedon', icon: <Linkedin /> },
  { href: 'https://haveemakedon.com/', label: 'haveemakedon.com', icon: <Globe /> }
];

function SchoolApp() {
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
        items={schoolNavItems}
        activeSection={activeSection}
        theme={theme}
        scrolled={scrolled}
        onToggleTheme={toggleTheme}
      />

      <main id="main-content">
        <SchoolHero />
        <Marquee items={schoolMarqueeItems} />
        <InternshipSection />
        <SchoolProjectsSection />
        <SchoolExperienceSection />
        <CredentialsSection />
        <FocusAreasSection />
        <ContactSection
          eyebrow="06 — Get in touch"
          headline={
            <>
              Let's build great <span className="text-grad">schools</span>.
            </>
          }
          sub="Always glad to connect about instruction, school improvement, and educational leadership. The fastest way to reach me is email."
          socials={schoolSocials}
        />
      </main>

      <FooterSection />
    </>
  );
}

export default SchoolApp;
