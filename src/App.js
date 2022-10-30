import useLocoScroll from './hooks/useLocoScroll'
import { useEffect, useRef } from 'react'
import backgroundImage from './images/background-1.jpeg'
import './App.css'
import './assets/sass/app.scss'
import OverviewSection from './components/OverviewSection'
import CaseStudySection from './components/CaseStudySection'
import ClientsSection from './components/ClientsSection'
import SpotlightSection from './components/SpotlightSection'
import FeaturedListSection from './components/FeaturedListSection'
import Footer from './components/Footer'
import TopNavbar from './components/TopNavbar'

function App() {
  useLocoScroll()

  return (
    <div data-scroll-container className="App">
      {/* <TopNavbar></TopNavbar> */}
      <div className="scroll">
        <h1 data-scroll data-scroll-speed="3" className="scroll-h1">
          Locomotive Scroll in React
        </h1>
        <h2 data-scroll>
          Ima go sideways
        </h2>
      </div>
      {/* <section className="intro">
        <img src={backgroundImage} alt="'bicycle'" className="intro__image"></img>
      </section>
      <OverviewSection />
      <CaseStudySection />
      <ClientsSection />
      <SpotlightSection />
      <FeaturedListSection />
      <Footer /> */}
    </div>
  )
}

export default App
