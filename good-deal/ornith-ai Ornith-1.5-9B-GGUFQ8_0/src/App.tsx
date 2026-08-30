import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import * as Sections from "./components/sections";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Sections.Hero />
        <Sections.Categories />
        <Sections.TrendingDeals />
        <Sections.DealOfTheDay />
        <Sections.HowItWorks />
        <Sections.StoreLogos />
        <Sections.TrustMetrics />
        <Sections.Testimonials />
        <Sections.Newsletter />
      </main>
      <Footer />
    </>
  );
}
