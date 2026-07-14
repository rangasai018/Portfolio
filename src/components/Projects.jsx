import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';

function Projects() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="projects" className="section section--dark">
      <div className="container">
        <div ref={ref} className={`section__header section__header--center reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">Portfolio</span>
          <h2>Featured Projects</h2>
          <p>Selected academic and technical work demonstrating security and development skills.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="project-card__top">
                <span className="project-card__icon" aria-hidden="true">
                  {'</>'}
                </span>
                <div className="project-card__links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label="View on GitHub">
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label="View live demo">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <ul className="project-card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
