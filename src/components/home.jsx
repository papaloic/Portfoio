import img from '/assets/le-telephone-sonne.png';
import me from '/assets/me.jpeg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    return (
        <section id="acceuil" className="w-full h-auto mt-[10vh] md:mt-[14vh] flex flex-col-reverse md:h-screen md:flex-row  justify-center items-center p-2 md:p-6">
            <div data-aos="fade-right" className="intro w-full h-full flex flex-col justify-center items-center pt-10 md:w-1/2 md:pl-11">
                <h1 className="text-3xl/tight md:text-5xl/tight text-center text-black font-semibold text-shadow-cyan-900 mb-5 md:text-start">Salut, je suis 
                    <span className="text-blue-400 font-serif text-wrap"><br/> Loïc Ngueuchué
                    </span><br/>
                    <span className="text-rotate">
                    <span className=' justify-items-center md:justify-items-start'>
                        <span>Développeur web full stack</span>
                        <span>Architechte logiciel</span>
                        <span>cybersecurity ingenieer</span>
                    </span>
                    </span>
                </h1>
                <p className="text-lg text-center text-gray-600 md:text-start ">Créateurs de sites webs attractifs et de solutions inovantes pour vous satisfaire<br/><span>Disponible 24h/24, 7j/7</span></p>
                <div className="contact w-full h-auto my-5">
                    <a href='#contact' className="w-full md:w-[40%] h-15 btn btn-primary flex justify-center rounded-none md:rounded-t-xl md:rounded-bl-xl gap-1 items-center bg-blue-500 shadow-lg shadow-blue-500/50 text-white p-2.5 ">
                        <img src={img} alt="" className="w-10 h-auto"/>
                            <p className="text-[18px]">Me contacter</p>
                    </a>
                </div>
            </div>
            <div data-aos="fade-left" className="intro-picture w-full h-full flex justify-center items-center pt-8 md:pt-0 md:w-1/2">
                <div className="hover-3d">
                {/* content */}
                <figure className="max-w-100 rounded-2xl img_container w-80 h-80 md:w-100 md:h-100 border-8 border-blue-500 rounded-full] bg-cover bg-center" style={{borderRadius : "30% 70% 70% 30% / 30% 30% 70% 70%", backgroundImage: `url(${me})`}}></figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </div>
        </section>
    )
}

export default home;