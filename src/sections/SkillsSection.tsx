import { RevealSection } from '../components/RevealSection';
import { skillGroups } from '../data/siteContent';

export function SkillsSection() {
  return (
    <RevealSection id="skills" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 — Capabilities</p>
          <h2>Skills &amp; Tools</h2>
          <p className="section-sub">
            What I bring to instruction, program leadership, and school operations.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="stagger-item" key={group.title}>
              <h3>
                <span className="num">{String(index + 1).padStart(2, '0')}</span>
                {group.title}
              </h3>
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
