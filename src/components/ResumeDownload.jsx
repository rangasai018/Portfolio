import { personalInfo } from '../data/portfolio';

function ResumeDownload({ className = '', variant = 'primary', children }) {
  const label = children ?? personalInfo.resumeLabel;

  return (
    <a
      href={personalInfo.resumeFile}
      download="Ranga_Sai_CH_Resume.pdf"
      className={`btn btn--${variant} ${className}`.trim()}
      target="_blank"
      rel="noreferrer"
    >
      <span className="btn__icon" aria-hidden="true">
        ↓
      </span>
      {label}
    </a>
  );
}

export default ResumeDownload;
