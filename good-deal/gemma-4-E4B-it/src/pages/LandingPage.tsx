import React, { useState, useCallback } from 'react';
import { MOCK_DEAL_OF_THE_DAY } from '../data/mockData';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import DealCategories from '../components/DealCategories';
import TrendingDeals from '../components/TrendingDeals';
import DealOfTheDay from '../components/DealOfTheDay';
import HowItWorks from '../components/HowItWorks';
import { StoreLogos, TrustMetrics } from '../components/SocialProof';
import Testimonials from '../components/Testimonials';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // In a real application, this would trigger API calls and routing.
    console.log(`Searching for: ${query}`);
  }, []);

  const handleSubscription = useCallback((email: string) => {
    console.log(`Subscribed successfully: ${email}`);
    // Future: Add logging or user data persistence here.
  }, []);

  return (
    <div className="min-h-screen antialiased font-sans bg-white">
      <Header onSearch={handleSearch} />

      <main className="pt-0">
        {/* 1. Hero Section */}
        <HeroSection onSearch={handleSearch} />

        {/* 2. Deal Categories */}
        <DealCategories />

        {/* 3. Trending Deals */}
        <TrendingDeals />

        {/* 4. Deal of the Day (High visual prominence) */}
        <DealOfTheDay deal={MOCK_DEAL_OF_THE_DAY} />

        {/* 5. How It Works */}
        <HowItWorks />

        {/* 6. Trust / Social Proof */}
        <TrustMetrics />
        <StoreLogos />
        
        {/* 7. Testimonials */}
        <Testimonials />

        {/* 8. Newsletter / Deal Alert (Conversion focus) */}
        <NewsletterSignup onSubscribe={handleSubscription} />

      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;