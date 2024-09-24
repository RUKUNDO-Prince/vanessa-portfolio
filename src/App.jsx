import React from 'react'
import { About, Clients, Contact, Footer, Hero, Navbar, Projects, Services } from './components'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}

export default App