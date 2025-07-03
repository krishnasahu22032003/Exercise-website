import { Route,Routes } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Exercise from "./Pages/Exercise"
import Footer from "./Components/Footer"

function App() {

  return (
<Box className="w-440px">
  <Navbar/>
  <Routes>
<Route path='/' component={<Home/>}/>
<Route path='/exercise.:id' component={<Exercise/>}/>
</Routes>
<Footer/>
</Box>
  )
}

export default App
