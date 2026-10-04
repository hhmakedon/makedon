import { ProjectCard } from '../../components/ProjectCard';
import { RevealSection } from '../../components/RevealSection';
import { schoolProjects } from '../schoolContent';

export function SchoolProjectsSection() {
  return (
    <RevealSection id="projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">02 — School Improvement</p>
          <h2>Leadership Projects</h2>
          <p className="section-sub">
            Systems built to solve real school problems — piloted with staff, refined from feedback,
            and kept running for students and teachers.
          </p>
        </div>

        <div className="project-grid">
          {schoolProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
