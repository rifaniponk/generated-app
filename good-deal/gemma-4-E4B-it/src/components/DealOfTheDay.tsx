import React, { useState, useEffect } from 'react';
import { MOCK_DEAL_OF_THE_DAY } from '../data/mockData';
import { Zap, ArrowRight } from 'lucide-react';

interface DealOfTheDayProps {
  deal: typeof MOCK_DEAL_OF_THE_DAY;
}

// Simple countdown logic
const CountdownTimer: React.FC<{ endTime: Date }> = ({ endTime }) => {
  const [timeLeft, setTimeLeft] = useState(endTime.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1000);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateTimeLeft = (time: number) => {
    if (time <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const seconds = Math.floor((time % (3600 * 24)) / 60);
    const minutes = Math.floor((time % (3600 * 24 * 3600)) / (60 * 60));
    const hours = Math.floor((time % (3600 * 24 * 3600)) / 3600);
    const days = Math.floor(time / (3600 * 24 * 3600));
    return { days, hours, minutes, seconds };
  };

  const time = calculateTimeLeft(timeLeft);

  if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
    return <span className="text-2xl font-bold text-red-600 flex items-center"><Zap className="mr-2" /> Deal Expired!</span>;
  }

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex space-x-4 text-center">
      <div className="p-3 bg-red-50 rounded-lg shadow-inner">
        <div className="text-2xl font-bold text-red-600">{time.days}</div>
        <div className="text-xs text-red-500 uppercase">Days</div>
      </div>
      <div className="p-3 bg-red-50 rounded-lg shadow-inner">
        <div className="text-2xl font-bold text-red-600">{formatNumber(time.hours)}</div>
        <div className="text-xs text-red-500 uppercase">Hours</div>
      </div>
      <div className="p-3 bg-red-50 rounded-lg shadow-inner">
        <div className="text-2xl font-bold text-red-600">{formatNumber(time.minutes)}</div>
        <div className="text-xs text-red-500 uppercase">Mins</div>
      </div>
      <div className="p-3 bg-red-50 rounded-lg shadow-inner">
        <div className="text-2xl font-bold text-red-600">{formatNumber(time.seconds)}</div>
        <div className="text-xs text-red-500 uppercase">Secs</div>
      </div>
    </div>
  );
};

const DealOfTheDay: React.FC<DealOfTheDayProps> = ({ deal }) => {
  // Mocking a 72-hour countdown from when the component loads
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + 72); 

  const { title, storeName, originalPrice, discountedPrice, discountPercentage, imagePlaceholder } = deal;

  return (
    <section id="deal-of-the-day" className="py-20 sm:py-32 bg-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Visuals */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="w-80 h-80 sm:w-96 sm:h-96 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl border-4 border-indigo-400">
              <div className="text-9xl">{imagePlaceholder}</div>
            </div>
            <Zap className="absolute top-0 right-0 text-yellow-300 text-4xl animate-pulse" size={80} />
          </div>

          {/* Details and CTA */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <span className="text-sm font-bold uppercase tracking-widest text-yellow-300 bg-indigo-600 px-3 py-1 rounded-full inline-block mb-3">
              🚨 Today's Exclusive Deal
            </span>
            <h2 className="text-5xl font-extrabold tracking-tight mb-3">{title}</h2>
            <p className="text-xl text-indigo-200 mb-6">
              Exclusive from <span className="font-semibold">{storeName}</span>
            </p>

            {/* Pricing */}
            <div className="flex items-baseline justify-center lg:justify-start mb-8">
              <span className="text-6xl font-black text-white mr-4">${discountedPrice.toFixed(2)}</span>
              <span className="text-3xl line-through text-indigo-200 mr-4">${originalPrice.toFixed(2)}</span>
              <span className="text-3xl font-bold text-green-400 bg-green-600 px-4 py-1 rounded-lg">{discountPercentage}% SAVED</span>
            </div>

            {/* Countdown */}
            <div className="mb-8">
                <CountdownTimer endTime={new Date()} />
            </div>

            {/* CTA */}
            <button className="w-full sm:w-auto flex items-center justify-center mx-auto lg:mx-0 px-10 py-4 text-xl font-bold text-indigo-700 bg-yellow-400 rounded-xl shadow-2xl hover:bg-yellow-300 transition duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-500">
              Grab This Deal Now
              <ArrowRight size={24} className="ml-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;