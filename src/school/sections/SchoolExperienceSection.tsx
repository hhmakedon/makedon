import { RevealSection } from '../../components/RevealSection';
import { schoolExperience } from '../schoolContent';

export function SchoolExperienceSection() {
  return (
    <RevealSection id="experience" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 — Career</p>
          <h2>Professional Experience</h2>
        </div>

        <ol className="timeline">
          {schoolExperience.map((role) => (
            <li className="timeline-item stagger-item" key={`${role.organization}-${role.period}`}>
              <p className="timeline-period">
                {role.period} · {role.location}
              </p>
              <h3>{role.title}</h3>
              <p className="timeline-org">{role.organization}</p>
              <ul className="timeline-bullets">
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
