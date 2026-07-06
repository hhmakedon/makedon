import { RevealSection } from '../components/RevealSection';
import { experience } from '../data/siteContent';

export function ExperienceSection() {
  return (
    <RevealSection id="experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 — Career</p>
          <h2>Experience</h2>
        </div>

        <ol className="timeline">
          {experience.map((item) => (
            <li className="timeline-item stagger-item" key={item.title}>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
