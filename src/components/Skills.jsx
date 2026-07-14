import { useRef, useState } from 'react';
import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';

function Skills() {
  const [ref, isVisible] = useScrollReveal();
  const sectionRef = useRef(null);
  const [spotlightActive, setSpotlightActive] = useState(false);

  const handleMouseMove = (event) => {
    const section = sectionRef.current;
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    section.style.setProperty('--spotlight-x', `${x}px`);
    section.style.setProperty('--spotlight-y', `${y}px`);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills ${spotlightActive ? 'is-active' : ''}`}
      onMouseEnter={() => setSpotlightActive(true)}
      onMouseLeave={() => setSpotlightActive(false)}
      onMouseMove={handleMouseMove}
    >
      <span className="skills__watermark" aria-hidden="true">
        SKILLS
      </span>

      <div className="container">
        <div ref={ref} className={`section__header section__header--center reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">Technical Stack</span>
          <h2>What I Work With</h2>
          <p>Technologies and tools I use across development, security, and collaboration.</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article
              key={skill.name}
              className={`skill-card reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="skill-card__icon-wrap">
                <img src={skill.icon} alt="" loading="lazy" />
              </div>
              <h3>{skill.name}</h3>
              <span className="skill-card__category">{skill.category}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
