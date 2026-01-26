import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"
import { Github } from "lucide-react"
import { Linkedin } from "lucide-react"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <footer data-aos="fade-up" className="min-h-50 footer footer-horizontal justify-center footer-center bg-base-200 text-base-content rounded p-10">
    <nav className="grid grid-flow-col gap-4">
        <a href="#acceuil" className="link link-hover">Home</a>
        <a href="#about" className="link link-hover">about</a>
        <a href="#competences" className="link link-hover">Competences</a>
        <a href="#projets" className="link link-hover">projets</a>
        <a href="#contact" className="link link-hover">contact</a>
    </nav>
    <nav>
        <div className="grid grid-flow-col gap-4">
        <a href="https://github.com/papaloic/">
            <Github />
        </a>
        <a href="https://fr.linkedin.com/in/lo%C3%AFc-ngueuchu%C3%A9-9755573a3">
            <Linkedin />
        </a>
        <a href="">
            <Instagram />
        </a>
        </div>
    </nav>
    <aside>
        <p>Copyright © {new Date().getFullYear()} - NGTECH</p>
    </aside>
    </footer>
  )
}

export default footer