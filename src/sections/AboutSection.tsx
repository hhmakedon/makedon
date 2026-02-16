import { RevealSection } from '../components/RevealSection';

export function AboutSection() {
  return (
    <RevealSection id="about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Profile</p>
          <h2>About</h2>
        </div>
        <p className="lead-copy">
          I’m a Chicago-based developer and educator combining web engineering, cloud infrastructure, and practical
          automation to build systems people actually use. I teach a project-based curriculum across programming,
          robotics, multimedia production, and 3D printing while building production websites and classroom platforms.
        </p>
        <div className="about-highlights">
          <article>
            <h3>Teaching</h3>
            <p>Hands-on CS instruction with design-process thinking, inclusive classroom practice, and real-world tech pathways.</p>
          </article>
          <article>
            <h3>Web Dev</h3>
            <p>Full-stack builds using HTML, CSS, JavaScript, AngularJS, and PHP with maintainable architecture.</p>
          </article>
          <article>
            <h3>Cloud</h3>
            <p>Google Cloud and Firebase deployment for scalable apps, analytics, and workflow automation.</p>
          </article>
        </div>
      </div>
    </RevealSection>
  );
}
