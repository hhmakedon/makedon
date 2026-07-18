import { useEffect, useRef, useState } from 'react';

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      // threshold 0 (any pixel) + a negative bottom margin triggers the
      // reveal once the section's top scrolls a little into view. A
      // percentage threshold would never fire for sections taller than the
      // viewport (e.g. the long projects list on mobile).
      { threshold: 0, rootMargin: '0px 0px -12% 0px' }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, isVisible };
}
