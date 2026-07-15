import { education, certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';
import ResumeDownload from './ResumeDownload';

function EducationSection() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="education" className="section section--dark">
      <div className="container">
        <div ref={ref} className={`section__header reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">Background</span>
          <h2>Education & Certifications</h2>
          <p>
            My academic journey from school through engineering, along with professional
            certifications and virtual experience programs.
          </p>
          <div className="section__actions">
            <ResumeDownload variant="primary" />
          </div>
        </div>

        <div className="timeline">
          <div className={`timeline__group reveal ${isVisible ? 'is-visible' : ''}`}>
            <h3 className="timeline__heading">Education</h3>
            {education.map((item, index) => (
              <article
                key={item.degree}
                className="timeline-card"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="timeline-card__meta">
                  <span className="timeline-card__period">{item.period}</span>
                  {item.score ? (
                    <span className="timeline-card__score">{item.score}</span>
                  ) : null}
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

export default EducationSection;
