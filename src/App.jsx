import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Jumbotron from './Components/Jumbotron'
import About from './Components/About'
import Footer from './Components/Footer'
import Experience from './Components/Experience'
import Project from './Components/Project'
import Certificate from './Components/Certificate'


function App() {

  return (
    <>
      <Navbar/>
      <Router>
      <Routes>
        <Route path="/" element={<Jumbotron/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/certificate" element={<Certificate/>} />
      </Routes>
      </Router>
      <Footer/>
    </>
  )
}

export default App