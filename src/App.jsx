
import Navbar from "./Components/Navbar"
import HeroBanner from "./Components/HeroBanner"
import Features from "./Components/Features"
import Testimonials from "./Components/Testimonials"
import Membership from "./Components/Membership"
import FAQS from "./Components/FAQS"
import CTA from "./Components/CTA"
function App() {

  return (
<div className="w-full h-auto overflow-hidden">
  <Navbar/>
  <HeroBanner />
  <Features/>
  <Testimonials/>
  <Membership/>
  <FAQS/>
  <CTA/>
  </div>


  )
}

export default App
