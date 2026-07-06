import { RevealSection } from '../components/RevealSection';
import { education } from '../data/siteContent';

export function EducationSection() {
  return (
    <RevealSection id="education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">03 — Credentials</p>
          <h2>Education</h2>
        </div>

        <ol className="timeline">
          {education.map((item) => (
            <li className="timeline-item stagger-item" key={item.degree}>
              <p className="timeline-period">
                {item.period}
                {item.note ? ` · ${item.note}` : ''}
              </p>
              <h3>{item.degree}</h3>
              <p>{item.school}</p>
            </li>
          ))}
        </ol>
      </div>
    </RevealSection>
  );
}
