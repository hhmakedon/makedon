import haveePhoto from '../assets/havee-photo.jpg';
import { heroStats } from '../data/siteContent';
import { ArrowRight, Github, MapPin } from '../components/icons';

export function HeroSection() {
  return (
    <section id="home" className="section hero">
      <div className="hero-bg" aria-hidden="true">
        <span className="hero-aurora hero-aurora-a" />
        <span className="hero-aurora hero-aurora-b" />
        <span className="hero-grid-overlay" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <h1 className="hero-name">
            Havee <span className="text-grad">Makedon</span>
          </h1>

          <p className="hero-roles">
            Software Engineer <span className="sep">/</span> Cloud Practitioner
            <span className="sep">/</span> Educator
          </p>

          <p className="hero-lead">
            I build practical web products that connect clean, fast user experiences with
            cloud-backed data and automation — from classroom platforms to production business
            tools.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
              <ArrowRight className="arrow" />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/hhmakedon"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
              GitHub
            </a>
          </div>

          <dl className="hero-stats">
            {heroStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <dd className="stat-value">
                  {stat.value}
                  {stat.accent ? <span className="accent">{stat.accent}</span> : null}
                </dd>
                <dt className="stat-label">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <aside className="hero-card" aria-label="Profile">
          <div className="hero-card-photo">
            <img src={haveePhoto} alt="Portrait of Havee Makedon" />
            <div className="hero-card-caption">
              <span className="loc">
                <MapPin />
                Chicago, Illinois
              </span>
            </div>
          </div>
          <div className="hero-card-meta">
            <span>Google Cloud '25</span>
            <span>CS Educator</span>
            <span>Full-Stack</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
