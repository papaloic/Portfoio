import img1 from "/assets/qualite-du-code.png";
import img2 from "/assets/acceleration.png";
import img3 from "/assets/bouclier(1).png";
import img4 from "/assets/conception-ux.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
    {
        id: 1,
        img: img1,
        title: "Code propre et maintenable",
        description: "Code structuré, lisible et conforme aux bonnes pratiques. Facile à maintenir, à faire évoluer et à transmettre."
    },

    {
        id: 2,
        img: img2,
        title: "Rapidité & efficacité",
        description: "Organisation claire, méthodes efficaces et respect des délais. Je privilégie des solutions rapides à mettre en œuvre sans jamais sacrifier la qualité."
    },

    {
        id: 3,
        img: img3,
        title: "Sécurité & fiabilité",
        description: "Respect des bonnes pratiques de sécurité côté front-end et back-end : validation des données, gestion des accès, protection contre les failles courantes."
    },

    {
        id: 4,
        img: img4,
        title: "UX & design",
        description: "Interfaces modernes, intuitives et responsives. L'utilisateur reste toujours au centre de la conception."
    }
]

const about = () => {
      useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <section id="about" className=" w-full h-auto flex flex-col gap-10 justify-center items-center p-5 bg-gray-50">
            <h1 data-aos="fade-left" className="sect-h1">à propos</h1>
            <p data-aos="fade-right" className="sect-p text-center">Liberez votre imagination dans des sites web qui vous ferons grimper en popularité.<br/><span>Je vous garantis :</span></p>
            <div className="about_infos w-full h-auto flex flex-col md:flex-row gap-5 md:gap-[2%] justify-center ">
                {
                    cards.map((card) => (
                        <div data-aos="fade-up" className="info  md:w-[24%] flex flex-col gap-5 p-2 items-center text-center text-wrap border-2 border-b-indigo-500 border-l-purple-500 border-t-sky-500 border-r-fuchsia-500 rounded-lg" key={card.id}>
                            <img src={card.img} alt= {card.title} className="bg-blue-100 w-[20%] h-auto object-cover rounded-full border-blue-200 border" />
                            <h1 className="font-bold text-gray-950 text-xl">{card.title}</h1>
                            <p className="desc font-medium text-gray-800 text-shadow-blue-500 text-[16px]">{card.description}</p>
                        </div>
                    )
                    )
                }
            </div>
        </section>
    )
}

export default about;