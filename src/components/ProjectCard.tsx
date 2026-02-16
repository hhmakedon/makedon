import type { Project } from '../types';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.title} tags`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-actions">
        <a className="btn btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
          Open
        </a>
        {project.secondaryUrl ? (
          <a className="btn btn-secondary" href={project.secondaryUrl} target="_blank" rel="noreferrer">
            {project.secondaryLabel ?? 'More'}
          </a>
        ) : null}
      </div>
    </article>
  );
}
