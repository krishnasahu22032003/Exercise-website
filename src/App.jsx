import { Route,Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Exercise from "./Pages/Exercise"
import Footer from "./Components/Footer"

function App() {

  return (
<Box className="w-440px m-auto xl:w-[1488px]">
  <Navbar/>
  <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/exercise.:id' element={<Exercise/>}/>
</Routes>
<Footer/>
</Box>
  )
}

export default App
