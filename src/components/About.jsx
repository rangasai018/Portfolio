import { aboutHighlights } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';

function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="section section--light">
      <div className="container">
        <div ref={ref} className={`section__header reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">About Me</span>
          <h2>Passionate about security and clean code</h2>
          <p>
            I&apos;m a Computer Science Engineering student specializing in cyber security,
            with a strong interest in building practical tools and secure web applications.
            I enjoy turning complex technical concepts into clear, usable solutions.
          </p>
        </div>

        <div className="about-grid">
          {aboutHighlights.map((item, index) => (
            <article
              key={item.title}
              className={`about-card reveal ${isVisible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <span className="about-card__index">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
