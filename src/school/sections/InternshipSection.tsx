import { RevealSection } from '../../components/RevealSection';
import { internship } from '../schoolContent';

export function InternshipSection() {
  return (
    <RevealSection id="internship" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 — Leadership in Practice</p>
          <h2>Educational Leadership Internship</h2>
        </div>

        <div className="intern-meta">
          <div>
            <h3>{internship.role}</h3>
            <p>
              {internship.school} · {internship.district}
            </p>
          </div>
          <p className="intern-meta-when">
            {internship.period} · {internship.location}
          </p>
        </div>

        <div className="intern-grid">
          {internship.items.map((item, index) => (
            <article className="intern-card stagger-item" key={item.title}>
              <span className="intern-num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
