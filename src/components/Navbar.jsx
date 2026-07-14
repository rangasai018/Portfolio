import { useState } from 'react';
import { navLinks } from '../data/portfolio';
import ResumeDownload from './ResumeDownload';

function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <button
          type="button"
          className="navbar__logo"
          onClick={() => handleNavClick('home')}
          aria-label="Go to home"
        >
          <span className="navbar__logo-mark">RS</span>
          <span className="navbar__logo-text">Ranga Sai</span>
        </button>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  className={activeSection === link.id ? 'is-active' : ''}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <ResumeDownload className="navbar__resume" variant="primary">
            Resume
          </ResumeDownload>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
