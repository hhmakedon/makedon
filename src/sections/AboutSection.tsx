import { RevealSection } from '../components/RevealSection';
import { highlights } from '../data/siteContent';
import { highlightIcons } from '../components/icons';

export function AboutSection() {
  return (
    <RevealSection id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 — Profile</p>
          <h2>About</h2>
        </div>

        <div className="about-layout">
          <p className="about-lead">
            Engineering and education, working <span className="text-grad">together</span>.
          </p>

          <div className="about-body">
            <p>
              I'm a Chicago-based developer and educator who combines web engineering, cloud
              infrastructure, and practical automation to build systems people actually use. I teach
              a project-based curriculum across programming, robotics, multimedia production, and 3D
              printing while shipping production websites and classroom platforms.
            </p>
            <p>
              Most recently I interned on Google Cloud, prototyping AI-first tools and reporting
              workflows alongside engineers and product managers. I care about clean architecture,
              fast iteration, and turning rough ideas into things that ship.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <article key={item.title}>
                    <span className="about-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
