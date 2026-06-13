import type { CSSProperties } from 'react';

type ScrollProgressProps = {
  progress: number;
};

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress-bar"
        style={{ '--progress': progress } as CSSProperties}
      />
    </div>
  );
}
