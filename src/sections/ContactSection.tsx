import { useEffect, useState } from 'react';
import { RevealSection } from '../components/RevealSection';

const emailAddress = 'haveemakedon1@gmail.com';

export function ContactSection() {
  const [toastMessage, setToastMessage] = useState('');

  useEffect(() => {
    if (!toastMessage) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setToastMessage('');
    }, 2000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [toastMessage]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setToastMessage('Email copied to clipboard');
    } catch {
      setToastMessage('Copy failed. Please copy manually.');
    }
  };

  return (
    <RevealSection id="contact" className="section-muted">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Get In Touch</p>
          <h2>Contact</h2>
        </div>

        <div className="contact-card" role="list" aria-label="Contact links">
          <a role="listitem" href={`mailto:${emailAddress}`}>
            {emailAddress}
          </a>
          <a role="listitem" href="https://www.linkedin.com/in/haveemakedon/" target="_blank" rel="noreferrer">
            linkedin.com/in/haveemakedon
          </a>
          <a role="listitem" href="https://github.com/hhmakedon" target="_blank" rel="noreferrer">
            github.com/hhmakedon
          </a>
          <button className="btn btn-secondary copy-button" type="button" onClick={handleCopyEmail}>
            Copy Email
          </button>
        </div>

        <div className={`toast ${toastMessage ? 'toast-visible' : ''}`} role="status" aria-live="polite">
          {toastMessage}
        </div>
      </div>
    </RevealSection>
  );
}
