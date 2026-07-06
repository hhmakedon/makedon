import { useMemo, useState } from 'react';
import { projects } from '../data/siteContent';
import { ProjectCard } from '../components/ProjectCard';
import { RevealSection } from '../components/RevealSection';
import { Search } from '../components/icons';

const allTags = ['All', ...Array.from(new Set(projects.flatMap((project) => project.tags)))];

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    const byTag = activeTag === 'All' ? projects : projects.filter((project) => project.tags.includes(activeTag));

    if (!searchTerm.trim()) {
      return byTag;
    }

    const normalized = searchTerm.toLowerCase();
    return byTag.filter(
      (project) =>
        project.title.toLowerCase().includes(normalized) ||
        project.description.toLowerCase().includes(normalized) ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalized))
    );
  }, [activeTag, searchTerm]);

  return (
    <RevealSection id="projects" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">01 — Selected Work</p>
          <h2>Projects</h2>
          <p className="section-sub">
            A mix of production applications and teaching tools — built end to end, deployed, and
            used in the real world.
          </p>
        </div>

        <div className="project-toolbar">
          <label className="search-field" htmlFor="project-search">
            <span className="sr-only">Search projects</span>
            <Search />
            <input
              id="project-search"
              type="search"
              placeholder="Search projects or tags…"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <div className="filter-wrap" role="toolbar" aria-label="Filter projects by tag">
            {allTags.map((tag) => (
              <button
                type="button"
                key={tag}
                className={`chip ${tag === activeTag ? 'chip-active' : ''}`}
                onClick={() => setActiveTag(tag)}
                aria-pressed={tag === activeTag}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length ? (
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        ) : (
          <p className="project-empty">No projects match that filter — try another tag.</p>
        )}
      </div>
    </RevealSection>
  );
}
