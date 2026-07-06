import { useEffect, useState } from 'react';
import { RevealSection } from '../components/RevealSection';
import { ArrowRight, Copy, Github, Linkedin, Mail } from '../components/icons';

const emailAddress = 'haveemakedon1@gmail.com';

export function ContactSection() {
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToastMessage('');
    }, 2200);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [toastMessage]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setToastMessage('Email copied to clipboard');
    } catch {
      setToastMessage('Copy failed — please copy manually.');
    }
  };

  return (
    <RevealSection id="contact" className="section-muted contact-section">
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>
          06 — Get in touch
        </p>
        <h2 className="contact-headline">
          Let's build something <span className="text-grad">great</span>.
        </h2>
        <p className="contact-sub">
          Always happy to talk through ideas, projects, or collaborations. The fastest way to reach
          me is email.
        </p>

        <div className="contact-actions">
          <a className="btn btn-primary" href={`mailto:${emailAddress}`}>
            <Mail />
            {emailAddress}
            <ArrowRight className="arrow" />
          </a>
          <button className="btn btn-secondary" type="button" onClick={handleCopyEmail}>
            <Copy />
            Copy email
          </button>
        </div>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/haveemakedon/" target="_blank" rel="noreferrer">
            <Linkedin />
            linkedin.com/in/haveemakedon
          </a>
          <a href="https://github.com/hhmakedon" target="_blank" rel="noreferrer">
            <Github />
            github.com/hhmakedon
          </a>
        </div>

        <div className={`toast ${toastMessage ? 'toast-visible' : ''}`} role="status" aria-live="polite">
          {toastMessage}
        </div>
      </div>
    </RevealSection>
  );
}
