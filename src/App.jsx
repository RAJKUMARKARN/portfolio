import { useState } from 'react'
import './App.css'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import { ReactTyped } from "react-typed";
import Secondsection from './components/Secondsection'
import Work from './components/Work'
import ProjectsNew from './components/ProjectsNew'
import Contact from './components/Contact'
import Footer2 from './components/Footer2'
import Skills from './components/Skills'




function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="container bg-black mx-auto w-full" style={{ padding: '20px 0' }}>
    <Nav/>
    <Hero/>
    <Secondsection/>
    <Skills/>
    <ProjectsNew/>
    <Work/>
    <Contact/>
    <Footer2/>
  </div>

  
  )
}

export default App
