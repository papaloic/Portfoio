import Navbar from "./components/navbar"
import Home from "./components/home"
import Hero from "./components/hero"
import About from "./components/about"
import Skill from "./components/skills"
import Projets from "./components/projets"
import Footer from "./components/footer"
import Contact from "./components/contact"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-clip">
      <Navbar />
      <Home />
      <About />
      <Hero />
      <Skill />
      <Projets/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App;