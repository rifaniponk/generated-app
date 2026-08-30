import { useState } from 'react';
import { Mail, AlertCircle } from 'lucide-react';

interface NewsletterProps {
  onSubmit: (email: string) => boolean;
}

export default function Newsletter({ onSubmit }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!email.trim()) {
      setErrorMessage('Please enter an email address.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (onSubmit(email)) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setErrorMessage('An error occurred. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50/50 to-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl shadow-emerald-100/50 overflow-hidden">
          {/* Header with illustration */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-10 lg:py-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              Never Miss a Deal Again
            </h2>
            <p className="text-emerald-100 max-w-xl mx-auto">
              Get daily deal alerts delivered straight to your inbox. No spam, just savings.
              Unsubscribe at any time.
            </p>
          </div>

          {/* Form */}
          <div className="p-6 lg:p-10">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  You're all set!
                </h3>
                <p className="text-slate-600">
                  Keep an eye on your inbox. Your first deal alert is on the way.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3.5 rounded-xl border ${
                        status === 'error'
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 focus:border-emerald-500 focus:ring-emerald-500'
                      } outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400`}
                    />
                    {status === 'error' && (
                      <div className="absolute -bottom-6 left-0 flex items-center space-x-1 text-xs text-rose-600">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-4 text-center">
                  Join 50,000+ subscribers. We respect your inbox — unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
