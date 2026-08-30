import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, Clock, CheckCircle } from 'lucide-react';

import { deals } from '../data';

interface CountdownProps {
  targetDate: Date;
}

function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeSegments = [
    { value: timeLeft.days, label: 'Days', className: 'bg-slate-700' },
    { value: timeLeft.hours, label: 'Hrs', className: 'bg-rose-500' },
    { value: timeLeft.minutes, label: 'Min', className: 'bg-rose-500' },
    { value: timeLeft.seconds, label: 'Sec', className: 'bg-rose-500' },
  ];

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        {timeSegments.map((segment) => (
          <div
            key={segment.label}
            className={`px-3 py-2 rounded-lg text-center min-w-[55px] ${segment.className}`}
          >
            <span className="text-2xl font-bold text-white">{String(segment.value).padStart(2, '0')}</span>
            <span className="text-xs text-slate-300 block mt-0.5">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DealOfDay() {
  const [showAlert, setShowAlert] = useState(false);
  const [timerComplete, setTimerComplete] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<string>('');
  const countdownRef = useRef<HTMLDivElement>(null);

  const deal = deals[5]; // Hotel in Barcelona - the flash deal

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(deal.endsAt);
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimerComplete(true);
        setShowAlert(true);
        if (countdownRef.current) {
          countdownRef.current.classList.add('opacity-50', 'line-through');
        }
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeRemaining(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deal.endsAt]);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Deal details */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
              <AlertTriangle className="w-4 h-4" />
              <span>Flash Deal - Ends at {timeRemaining}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Book Your Dream
              <span className="text-rose-400"> Trip</span>
              <br />
              for Less
            </h2>

            <p className="text-slate-300 text-lg mb-6 max-w-md">
              Score an incredible 37% off on your Barcelona getaway. 2 nights at a premium hotel,
              starting at just $285.
            </p>

            {/* Price display */}
            <div className="flex items-baseline space-x-3 mb-4">
              <span className="text-4xl sm:text-5xl font-bold text-white">
                ${deal.discountedPrice.toFixed(0)}
              </span>
              <span className="text-xl text-slate-400 line-through">
                ${deal.originalPrice.toFixed(0)}
              </span>
              <span className="text-emerald-400 text-xl font-bold">-{deal.discountPercent}%</span>
            </div>

            {/* Countdown */}
            <div
              ref={countdownRef}
              className={`mb-6 flex items-center space-x-3 ${
                timerComplete ? 'opacity-50 line-through' : ''
              }`}
            >
              <Clock className="w-5 h-5 text-rose-400" />
              <span className="text-slate-300 text-sm mr-2">Time remaining:</span>
              {timerComplete ? (
                <span className="text-rose-400 font-medium">Deal expired!</span>
              ) : (
                <Countdown targetDate={deal.endsAt} />
              )}
            </div>

            {/* Benefits */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">Free cancellation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300 text-sm">Verified hotel</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-8 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-rose-500/25">
                Book Now - ${deal.discountedPrice.toFixed(0)}
              </button>
              <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-colors border border-white/20">
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Deal card */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
                  Deal of the Day
                </span>
                <div className="flex items-center space-x-1">
                  <span className="text-amber-400">★</span>
                  <span className="text-white font-medium">4.4</span>
                  <span className="text-slate-400 text-sm">(892 reviews)</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">{deal.title}</h3>
              <p className="text-slate-300 text-sm mb-4">{deal.store} • {deal.category}</p>

              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-slate-400 text-xs mb-1">What's included:</p>
                <ul className="space-y-1">
                  <li className="flex items-center space-x-2 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>2 nights accommodation</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Free breakfast for 2</span>
                  </li>
                  <li className="flex items-center space-x-2 text-sm text-slate-200">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>Complimentary city tour</span>
                  </li>
                </ul>
              </div>

              {/* Original CTA - disabled when expired */}
              <button
                className={`w-full py-3.5 rounded-xl font-semibold transition-all ${
                  timerComplete
                    ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-500/25'
                }`}
                disabled={timerComplete}
              >
                {timerComplete ? 'Deal Expired' : 'Claim This Deal'}
              </button>
            </div>
          </div>
        </div>

        {/* Alert banner */}
        {showAlert && (
          <div className="mt-8 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center space-x-3 animate-in fade-in slide-in-from-bottom-4">
            <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
            <p className="text-rose-200 text-sm">
              This flash deal has expired. Check back tomorrow for the next exclusive offer!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
