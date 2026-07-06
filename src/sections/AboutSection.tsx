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
            Strong instruction, backed by <span className="text-grad">systems that work</span>.
          </p>

          <div className="about-body">
            <p>
              I'm a Chicago-based computer science educator pursuing a Master of Educational
              Leadership at Aurora University — my third master's degree, alongside an ESL &amp;
              Bilingual Education endorsement. Across two districts I've designed standards-aligned
              curriculum, coached robotics teams, led STEM and publication programs, and supported
              students and families through remote learning — always grounding instruction in the
              engineering design process and inclusive, project-based practice.
            </p>
            <p>
              My path also runs through industry: data analysis at Yusen Logistics and a Google
              Cloud internship focused on public-sector modernization. That background shapes how I
              approach school leadership — with documentation rigor, data-driven decision making,
              and technology that serves teaching rather than distracting from it.
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
