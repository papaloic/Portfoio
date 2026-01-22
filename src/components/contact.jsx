import { Mail, Phone, ArrowDown } from "lucide-react"
import discord from "/assets/discord.svg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="contact" className="w-full h-auto mt-[4vh] flex flex-col gap-8 text-black p-[2%]">
        <h1 data-aos="fade-left" className="sect-h1">Me contacter ?</h1>
        <div className="contact_methods w-full h-auto flex flex-col md:flex-row gap-4 items-center">
            <div data-aos="fade-right" className="methodes w-[98%] md:w-[60%] p-[5%] border rounded-xl flex flex-col gap-4 text-neutral-950 text-lg">
                <span className="flex gap-3">
                    <Mail color="blue"/>
                    <p>loicbieleu@gmail.com</p>
                </span>
                <span className="flex gap-3">
                    <Phone />
                    <span className="flex space-x-1"><p>+33</p><p>661</p><p>55</p><p>68</p><p>31</p></span>
                </span>
                <span className="flex gap-3">
                    <img src={discord} alt="" className="w-6"/>
                    <p>loic01473</p>
                </span>
            </div>
            <div data-aos="fade-left" className="mail w-[98%] md:w-[40%] p-[5%] border rounded-xl border-cyan-800 flex flex-col justify-center items-center gap-6">
                <h1 className="text-xl font-bold">Envoyez moi un mail</h1>
                <p className="text-center">cliquez sur le boutton pour m'envoyer un mail avec votre adresse de connexion google.</p>
                <div className="size-10 flex justify-center items-center border border-amber-600 rounded-full animate-bounce">
                    <ArrowDown color="orange" />
                </div>
                <a href="mailto:loicbieleu@gmail.com?Subject=Hello%20world!" className="p-5 badge bg-amber-600 text-amber-50">Envoyer</a>
            </div>
        </div>
    </section>
  )
}

export default contact