import type { MouseEvent } from 'react';
import haveePhoto from '../assets/havee-photo.jpg';
import { heroRoles, heroStats } from '../data/siteContent';
import type { Stat } from '../types';
import { ArrowRight, Github, MapPin } from '../components/icons';
import { Typewriter } from '../components/Typewriter';
import { useCountUp } from '../hooks/useCountUp';

function StatValue({ stat }: { stat: Stat }) {
  const counted = useCountUp(stat.countTo ?? 0);
  const display = stat.countTo !== undefined ? String(counted) : stat.value;

  return (
    <dd className="stat-value">
      {display}
      {stat.accent ? <span className="accent">{stat.accent}</span> : null}
    </dd>
  );
}

export function HeroSection() {
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
          <h1 className="hero-name">
            Havee <span className="text-grad">Makedon</span>
          </h1>

          <p className="hero-roles" aria-label={heroRoles.join(', ')}>
            <Typewriter phrases={heroRoles} />
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
