import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type RevealSectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function RevealSection({ id, className, children }: RevealSectionProps) {
  const { ref, isVisible } = useReveal();

  return (
    <section id={id} ref={ref} className={`section reveal ${isVisible ? 'reveal-visible' : ''} ${className ?? ''}`}>
      {children}
    </section>
  );
}
