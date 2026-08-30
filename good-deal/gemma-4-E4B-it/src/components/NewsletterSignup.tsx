import React, { useState, useCallback } from 'react';
import { Mail, CheckCircle, AlertTriangle } from 'lucide-react';

interface NewsletterSignupProps {
  onSubscribe: (email: string) => void;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSuccess(false);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    
    // Mock API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      if (email.includes('@gooddeal.com')) {
        // Simulate a server error for specific test emails
        setError('Subscription failed. Try a different email.');
      } else {
        onSubscribe(email); // Call parent handler
        setIsSuccess(true);
        setEmail('');
      }
    }, 1500);
  }, [email, onSubscribe]);

  return (
    <section className="py-24 sm:py-32 bg-indigo-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
          Never Miss a Deal.
        </h2>
        <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
          Join our Deal Alerts to receive the hottest, time-sensitive offers directly in your inbox.
        </p>

        {/* Form Container */}
        <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter your best email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 pl-12 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-lg transition duration-150"
                disabled={isSubmitting}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition duration-300 
                ${isSubmitting 
                    ? 'bg-indigo-400 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white focus:ring-4 focus:ring-indigo-300 active:scale-98'
                }`}
            >
              {isSubmitting ? 'Subscribing...' : 'Get Deal Alerts'}
            </button>
          </form>

          {/* Feedback States */}
          {error && (
            <p className="mt-4 text-red-600 font-medium flex items-center justify-center">
              <AlertTriangle size={20} className="mr-2" /> {error}
            </p>
          )}
          {isSuccess && (
            <p className="mt-4 text-green-600 font-medium flex items-center justify-center">
              <CheckCircle size={20} className="mr-2" /> Success! Welcome to the savings club.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;