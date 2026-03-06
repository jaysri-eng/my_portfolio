import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Accomplishments from './components/Accomplishments'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <section id="accomplishments">
          <Accomplishments />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} R. Jayanth Srinivasan. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
