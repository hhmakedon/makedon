import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { RevealSection } from '../components/RevealSection';
import { ArrowRight, Copy, Github, Linkedin, Mail } from '../components/icons';

const emailAddress = 'haveemakedon1@gmail.com';

type SocialLink = {
  href: string;
  label: string;
  icon: ReactNode;
};

const defaultSocials: SocialLink[] = [
  { href: 'https://www.linkedin.com/in/haveemakedon/', label: 'linkedin.com/in/haveemakedon', icon: <Linkedin /> },
  { href: 'https://github.com/hhmakedon', label: 'github.com/hhmakedon', icon: <Github /> }
];

type ContactSectionProps = {
  eyebrow?: string;
  headline?: ReactNode;
  sub?: string;
  socials?: SocialLink[];
};

export function ContactSection({
  eyebrow = '06 — Get in touch',
  headline = (
    <>
      Let's build something <span className="text-grad">great</span>.
    </>
  ),
  sub = 'Always happy to talk through ideas, projects, or collaborations. The fastest way to reach me is email.',
  socials = defaultSocials
}: ContactSectionProps) {
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
          {eyebrow}
        </p>
        <h2 className="contact-headline">{headline}</h2>
        <p className="contact-sub">{sub}</p>

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
          {socials.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>

        <div className={`toast ${toastMessage ? 'toast-visible' : ''}`} role="status" aria-live="polite">
          {toastMessage}
        </div>
      </div>
    </RevealSection>
  );
}
