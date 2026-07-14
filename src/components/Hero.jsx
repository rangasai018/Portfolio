import { personalInfo } from '../data/portfolio';
import { useTypingEffect } from '../hooks/usePortfolioEffects';
import ResumeDownload from './ResumeDownload';

function Hero() {
  const typedRole = useTypingEffect(personalInfo.roles);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
      </div>

      <div className="container hero__content">
        <p className="hero__eyebrow">{personalInfo.greeting}</p>
        <h1 className="hero__title">{personalInfo.name}</h1>

        <p className="hero__role">
          And I&apos;m a{' '}
          <span className="hero__typed">
            {typedRole}
            <span className="hero__cursor" aria-hidden="true">
              |
            </span>
          </span>
        </p>

        <p className="hero__location">{personalInfo.location}</p>
        <p className="hero__tagline">{personalInfo.tagline}</p>

        <div className="hero__actions">
          <button type="button" className="btn btn--primary" onClick={() => scrollTo('projects')}>
            View My Work
          </button>
          <ResumeDownload variant="ghost" />
          <button type="button" className="btn btn--ghost" onClick={() => scrollTo('contact')}>
            Get In Touch
          </button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">3+</span>
            <span className="hero__stat-label">Projects</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">13+</span>
            <span className="hero__stat-label">Skills</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-value">CS</span>
            <span className="hero__stat-label">Security Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
