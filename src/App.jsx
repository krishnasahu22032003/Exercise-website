import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Membership from "./Components/Membership";
import FAQS from "./Components/FAQS";
import CTA from "./Components/CTA";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove delay, load immediately after content is ready
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <div className="w-full h-auto overflow-hidden">
      <Navbar />
      <HeroBanner />
      <Features />
      <Testimonials />
      <Membership />
      <FAQS />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
