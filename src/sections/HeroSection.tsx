import haveePhoto from '../assets/havee-photo.jpg';

export function HeroSection() {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-blob hero-blob-a" />
        <span className="hero-blob hero-blob-b" />
        <span className="hero-grid-overlay" />
      </div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Web Developer · Cloud Practitioner · Educator</p>
          <h1>Havee Makedon</h1>
          <p className="hero-text">
            I build practical web products that connect clean user experiences with cloud-backed data and automation.
          </p>
          <ul className="value-list" aria-label="Core value points">
            <li>Full-stack delivery focused on usability, speed, and maintainability</li>
            <li>Cloud-first execution using Google Cloud and Firebase</li>
            <li>Technical leadership through teaching, mentoring, and implementation</li>
          </ul>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact
            </a>
            <a className="btn btn-secondary" href="https://github.com/hhmakedon" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <aside className="hero-card" aria-label="Quick profile highlights">
          <img className="profile-photo" src={haveePhoto} alt="Headshot of Havee Makedon" />
          <h2>At a glance</h2>
          <p>Chicago, Illinois</p>
          <p>Google Cloud Intern (2025)</p>
          <p>CS & Technology Teacher</p>
          <p>
            GitHub: <a href="https://github.com/hhmakedon">github.com/hhmakedon</a>
          </p>
        </aside>
      </div>
    </section>
  );
}
