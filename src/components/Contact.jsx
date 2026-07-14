import { useState } from 'react';
import { personalInfo } from '../data/portfolio';
import { useScrollReveal } from '../hooks/usePortfolioEffects';
import ResumeDownload from './ResumeDownload';

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: '✉',
  },
  {
    label: 'LinkedIn',
    value: 'ranga-sai-ch',
    href: personalInfo.linkedin,
    icon: 'in',
  },
  {
    label: 'GitHub',
    value: 'RangaSaiCh',
    href: personalInfo.github,
    icon: 'gh',
  },
];

function Contact() {
  const [ref, isVisible] = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section--light">
      <div className="container">
        <div ref={ref} className={`section__header section__header--center reveal ${isVisible ? 'is-visible' : ''}`}>
          <span className="section__eyebrow">Contact</span>
          <h2>Let&apos;s Connect</h2>
          <p>
            Open to internships, collaborations, and conversations about cyber security and
            web development.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-grid">
            {contactLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel={link.label === 'Email' ? undefined : 'noreferrer'}
                className={`contact-card reveal ${isVisible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="contact-card__icon">{link.icon}</span>
                <span className="contact-card__label">{link.label}</span>
                <span className="contact-card__value">{link.value}</span>
              </a>
            ))}
          </div>

          <form
            className={`contact-form reveal ${isVisible ? 'is-visible' : ''}`}
            onSubmit={handleSubmit}
          >
            <h3>Send a Message</h3>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your opportunity or project..."
              />
            </label>
            <div className="contact-form__actions">
              <button type="submit" className="btn btn--primary">
                Send Message
              </button>
              <ResumeDownload variant="ghost">Download Resume</ResumeDownload>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
