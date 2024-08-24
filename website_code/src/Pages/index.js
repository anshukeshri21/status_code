import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import About from '../Components/AboutSection'
import Details from '../Components/DetailsSection'
import Footer from '../Components/Footer'
import Manual from '../Components/Manual'
function Home() {
  const [isOpen , setisOpen] = useState(false)

  const toggle = () => {
    setisOpen(!isOpen)
  }

  return (
    <div>
      <Navbar toggle = {toggle}></Navbar>
      <Sidebar isOpen = {isOpen} toggle = {toggle}></Sidebar>
      <section id='home'>
        <HeroSection/>
      </section>
      <section id='about'>
        <About/>
      </section>
      <section id='manual'>
        <Manual/>
      </section>
      <section id='details'>
        <Details></Details>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
