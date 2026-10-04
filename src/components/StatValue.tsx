import type { Stat } from '../types';
import { useCountUp } from '../hooks/useCountUp';

export function StatValue({ stat }: { stat: Stat }) {
  const counted = useCountUp(stat.countTo ?? 0);
  const display = stat.countTo !== undefined ? String(counted) : stat.value;

  return (
    <dd className="stat-value">
      {display}
      {stat.accent ? <span className="accent">{stat.accent}</span> : null}
    </dd>
  );
}
