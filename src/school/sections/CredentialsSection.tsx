import { RevealSection } from '../../components/RevealSection';
import { certification, degrees } from '../schoolContent';

export function CredentialsSection() {
  return (
    <RevealSection id="credentials">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">04 — Credentials</p>
          <h2>Certification &amp; Education</h2>
        </div>

        <div className="credentials-layout">
          <article className="cert-card">
            <p className="cert-issuer">{certification.issuer}</p>
            <h3>{certification.title}</h3>
            <p className="cert-issued">{certification.issued}</p>
          </article>

          <ol className="degree-list">
            {degrees.map((item) => (
              <li className="degree-item stagger-item" key={item.degree}>
                <p className="timeline-period">{item.period}</p>
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </RevealSection>
  );
}
