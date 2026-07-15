import { personalInfo } from '../data/portfolio';

function ResumeDownload({ className = '', variant = 'primary', children }) {
  const label = children ?? personalInfo.resumeLabel;

  return (
    <a
      href={personalInfo.resumeFile}
      className={`btn btn--${variant} ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="btn__icon" aria-hidden="true">
        ↓
      </span>
      {label}
    </a>
  );
}

export default ResumeDownload;
