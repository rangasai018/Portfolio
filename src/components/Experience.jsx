import { education, experience, certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';
import ResumeDownload from './ResumeDownload';

function Experience() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="experience" className="section section--dark">
      <div className="container">
        <div ref={ref} className={`section__header reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">Background</span>
          <h2>Experience & Education</h2>
          <p>
            A snapshot of my academic journey, hands-on security work, and professional
            development path.
          </p>
          <div className="section__actions">
            <ResumeDownload variant="primary" />
          </div>
        </div>

        <div className="timeline">
          <div className={`timeline__group reveal ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="timeline__heading">Experience</h3>
            {experience.map((item, index) => (
              <article
                key={item.role}
                className="timeline-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="timeline-card__meta">
                  <span className="timeline-card__period">{item.period}</span>
                </div>
                <h4>{item.role}</h4>
                <p className="timeline-card__company">{item.company}</p>
                <p>{item.description}</p>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className={`timeline__group reveal ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="timeline__heading">Education</h3>
            {education.map((item) => (
              <article key={item.degree} className="timeline-card">
                <div className="timeline-card__meta">
                  <span className="timeline-card__period">{item.period}</span>
                </div>
                <h4>{item.degree}</h4>
                <p className="timeline-card__company">{item.institution}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className={`timeline__group reveal ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="timeline__heading">Certifications</h3>
            <div className="cert-grid">
              {certifications.map((cert) => (
                <article key={cert.title} className="cert-card">
                  <span className="cert-card__year">{cert.year}</span>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer}</p>
                  {cert.credentialUrl ? (
                    <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                      View Credential
                    </a>
                  ) : (
                    <span className="cert-card__placeholder">Credential link coming soon</span>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
