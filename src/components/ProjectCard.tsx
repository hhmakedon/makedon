import type { MouseEvent } from 'react';
import type { Project } from '../types';
import { ArrowUpRight } from './icons';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  return (
    <article
      className={`project-card stagger-item ${project.featured ? 'is-featured' : ''}`}
      onMouseMove={handleMouseMove}
    >
      <div className="project-top">
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
        {project.featured ? (
          <span className="project-featured-badge">★ Featured</span>
        ) : null}
      </div>

      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <ul className="tag-list" aria-label={`${project.title} tags`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      <div className="project-footer">
        <a
          className="project-link"
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open ${project.title} (opens in a new tab)`}
        >
          View project
          <ArrowUpRight />
        </a>
      </div>
    </article>
  );
}
