import { useEffect, useState } from 'react';

type TypewriterProps = {
  phrases: string[];
};

const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_MS = 1900;
const GAP_MS = 350;

export function Typewriter({ phrases }: TypewriterProps) {
  const [reducedMotion] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const phrase = phrases[phraseIndex % phrases.length];
    let delay = deleting ? DELETE_MS : TYPE_MS;

    if (!deleting && text === phrase) {
      delay = HOLD_MS;
    } else if (deleting && text === '') {
      delay = GAP_MS;
    }

    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (text === phrase) {
          setDeleting(true);
        } else {
          setText(phrase.slice(0, text.length + 1));
        }
      } else {
        if (text === '') {
          setDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setText(phrase.slice(0, text.length - 1));
        }
      }
    }, delay);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [text, deleting, phraseIndex, phrases, reducedMotion]);

  if (reducedMotion) {
    return <span>{phrases.join(' · ')}</span>;
  }

  return (
    <span className="typewriter" aria-hidden="true">
      {text}
      <span className="typewriter-caret" />
    </span>
  );
}
