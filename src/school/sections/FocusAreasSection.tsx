import { RevealSection } from '../../components/RevealSection';
import { focusAreas } from '../schoolContent';

export function FocusAreasSection() {
  return (
    <RevealSection id="focus" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">05 — Focus Areas</p>
          <h2>What I Bring to a School</h2>
          <p className="section-sub">
            The practices behind the work — across instruction, student support, culture, and
            operations.
          </p>
        </div>

        <div className="skills-grid">
          {focusAreas.map((group, index) => (
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
