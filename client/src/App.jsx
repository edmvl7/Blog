import { React } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'


function App() {

  return (
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route element={<PrivateRoute/>}>
              <Route path="/dashboard" element={<Dashboard/>} />
            </Route>
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
  )
}

export default App
