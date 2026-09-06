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
              infrastructure, and practical automation to build systems people actually use. Across
              five years of teaching, I have led project-based learning in programming, robotics,
              multimedia production, and 3D printing while shipping production websites and
              classroom platforms.
            </p>
            <p>
              Most recently, I built a Firebase bathroom-pass system used across an entire school,
              with synchronized student timers, live teacher visibility, automated timeout logging,
              and multi-teacher support. I care about clean architecture, fast iteration, and turning
              everyday problems into dependable tools.
            </p>

            <div className="about-highlights">
              {highlights.map((item) => {
                const Icon = highlightIcons[item.icon];
                return (
                  <article className="stagger-item" key={item.title}>
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
