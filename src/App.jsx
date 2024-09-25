import React from 'react'
import { About, Clients, Contact, Footer, Hero, Navbar, Projects, Services, Skills } from './components'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App