
import Navbar from "./Components/Navbar"
import HeroBanner from "./Components/HeroBanner"
import Features from "./Components/Features"
import Testimonials from "./Components/Testimonials"
import Membership from "./Components/Membership"
function App() {

  return (
<div className="w-full h-auto overflow-hidden">
  <Navbar/>
  <HeroBanner />
  <Features/>
  <Testimonials/>
  <Membership/>
  </div>


  )
}

export default App
