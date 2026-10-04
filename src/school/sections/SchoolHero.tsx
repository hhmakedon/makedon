import type { MouseEvent } from 'react';
import haveePhoto from '../../assets/havee-photo.jpg';
import { ArrowRight, Linkedin, MapPin } from '../../components/icons';
import { StatValue } from '../../components/StatValue';
import { Typewriter } from '../../components/Typewriter';
import { degrees, schoolRoles, schoolStats } from '../schoolContent';

export function SchoolHero() {
  const handleTilt = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.setProperty('--rx', `${(-py * 7).toFixed(2)}deg`);
    card.style.setProperty('--ry', `${(px * 9).toFixed(2)}deg`);
  };

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--rx', '0deg');
    event.currentTarget.style.setProperty('--ry', '0deg');
  };

  return (
    <section id="home" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-aurora hero-aurora-a" />
        <span className="hero-aurora hero-aurora-b" />
        <span className="hero-grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">School Leadership Profile</p>

          <h1 className="hero-name">
            Havee <span className="text-grad">Makedon</span>
          </h1>

          <p className="hero-roles" aria-label={schoolRoles.join(', ')}>
            <Typewriter phrases={schoolRoles} />
          </p>

          <p className="hero-lead">
            Educator and educational leader focused on what makes schools work — strong
            instruction, clear systems, and support that reaches every student, from teacher
            evaluation and special education planning to schoolwide tools that staff actually use.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#internship">
              Leadership Experience
              <ArrowRight className="arrow" />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/haveemakedon/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
              LinkedIn
            </a>
          </div>

          <dl className="hero-stats">
            {schoolStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <StatValue stat={stat} />
                <dt className="stat-label">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <aside className="hero-card" aria-label="Profile" onMouseMove={handleTilt} onMouseLeave={resetTilt}>
          <div className="hero-card-photo">
            <img src={haveePhoto} alt="Portrait of Havee Makedon" />
            <div className="hero-card-caption">
              <span className="loc">
                <MapPin />
                Chicago, Illinois
              </span>
            </div>
          </div>
          <ul className="hero-card-meta hero-card-degrees" aria-label="Degrees">
            {degrees.map((item) => (
              <li key={item.degree} title={`${item.degree}, ${item.school}`}>
                <span className="degree-abbr">{item.abbr}</span>
                <span className="degree-field">{item.field}</span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
