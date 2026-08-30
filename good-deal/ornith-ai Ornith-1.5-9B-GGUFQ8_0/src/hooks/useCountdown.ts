import { useCallback, useEffect, useMemo, useState } from "react";

export interface CountdownResult {
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
  endAt: number | null;
  reset: () => void;
}

/**
 * Working countdown timer. When the end time passes it shows an expired state
 * and can be reset to a new time via `reset`.
 */
export function useCountdown(endAt: number | null, intervalMs = 1000): CountdownResult {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!endAt) return undefined;
    const id = window.setInterval(() => setNow(Date.now()), intervalMs);
    return () => window.clearInterval(id);
  }, [endAt, intervalMs]);

  const endAtSafe = useMemo(() => (endAt ? Math.min(endAt, Date.now() + 1) : null), [endAt]);

  const reset = useCallback(() => {
    setNow(Date.now());
  }, []);

  const result = useMemo<CountdownResult>(() => {
    if (!endAtSafe) return { hours: 0, minutes: 0, seconds: 0, expired: true, endAt: null, reset };
    const remaining = Math.max(0, endAtSafe - now);
    const hours = Math.floor(remaining / 3600_000);
    const minutes = Math.floor((remaining % 3600_000) / 60_000);
    const seconds = Math.floor((remaining % 60_000) / 1000);
    return { hours, minutes, seconds, expired: remaining === 0, endAt: endAtSafe, reset };
  }, [endAtSafe, now, reset]);

  return result;
}
