import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <nav data-aos="fade-down" className="nav w-full h-[10vh] md:h-[15vh] top-0 fixed bg-white flex justify-between p-5 items-center shadow-xl/20 z-20">
            <div data-aos="fade-right" className="logo flex gap-0.5 items-center w-[60%] md:w-[30%] md:ml-[5%]">
                <div className="dropdown md:hidden w-[18%]">
                <div tabIndex={0} role="button" className="btn btn-primary btn-ghost btn-circle size-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current btn-primary"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
                </div>
                <ul
                    tabIndex="-1"
                    className="menu_link_phone menu menu-sm dropdown-content bg-neutral-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                    <li><a href="#acceuil">Acceuil</a></li>
                    <li><a href="#about">A propos</a></li>
                    <li><a href="#competences">Compétences</a></li>
                    <li><a href="#projets">Projets</a></li>
                </ul>
                </div>
                <h1 className="font-bold text-3xl md:text-4xl skeleton skeleton-text">NGTECH</h1>
            </div>
            <div data-aos="fade-down" className="menu_link w-[30%] justify-between hidden md:flex">
                <a href="#acceuil">Acceuil</a>
                <a href="#about">A propos</a>
                <a href="#competences">Compétences</a>
                <a href="#projets">Projets</a>
            </div>
            <div data-aos="fade-left" class="contact">
                <a href="#contact" className="w-24 h-12 md:w-32 md:h-14 bg-blue-500 btn btn-primary shadow-lg shadow-blue-500/50 text-[15px] text-white p-2 rounded-2xl font-semibold">contacter</a>
            </div>
        </nav>
    )
}

export default Navbar;