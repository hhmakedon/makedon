import { RevealSection } from '../components/RevealSection';
import { skillGroups } from '../data/siteContent';

export function SkillsSection() {
  return (
    <RevealSection id="skills" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Capabilities</p>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <ul className="badge-list" aria-label={group.title}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
