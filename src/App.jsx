import Navbar from "./Components/Navbar";
import HeroBanner from "./Components/HeroBanner";
import Features from "./Components/Features";
import Testimonials from "./Components/Testimonials";
import Membership from "./Components/Membership";
import FAQS from "./Components/FAQS";
import CTA from "./Components/CTA";
import Stats from "./Components/Stats";
import Footer from "./Components/Footer"
function App() {
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
