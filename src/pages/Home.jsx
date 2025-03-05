import React from 'react'
import HeroSection from '../components/HeroSection'
import Service from '../components/Service'
import About from '../pages/About'
import Menu from './Menu'

function Home() {
  return (
    <div>
      <HeroSection />
      <Service />
      <About />
      <Menu />
    </div>
  )
}

export default Home