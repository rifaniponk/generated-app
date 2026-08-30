import type { CountdownResult } from "../hooks/useCountdown";

interface UnitProps {
  value: number;
  label: string;
  expired: boolean;
}

function TimeUnit({ value, label, expired }: UnitProps) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`tabular-nums text-3xl font-extrabold sm:text-4xl ${
          expired ? "text-slate-300" : "text-slate-900"
        }`}
      >
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">{label}</span>
    </div>
  );
}

interface CountdownTimerProps {
  countdown: CountdownResult;
}

export function CountdownTimer({ countdown }: CountdownTimerProps) {
  if (countdown.expired) {
    return (
      <div className="text-center">
        <p className="text-lg font-bold text-slate-900">Deal expired</p>
        <button
          type="button"
          onClick={countdown.reset}
          className="mt-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Reset timer
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      <TimeUnit value={countdown.hours} label="Hrs" expired={countdown.expired} />
      <span className="text-2xl font-extrabold text-brand-500 animate-count-pulse">:</span>
      <TimeUnit value={countdown.minutes} label="Min" expired={countdown.expired} />
      <span className="text-2xl font-extrabold text-brand-500 animate-count-pulse">:</span>
      <TimeUnit value={countdown.seconds} label="Sec" expired={countdown.expired} />
    </div>
  );
}
