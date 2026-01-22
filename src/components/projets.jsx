import { Github, Video } from 'lucide-react';
import pro_img1 from '/assets/cinema2.jpeg';
import pro_img2 from '/assets/bot.jpg';
import pro_img3 from '/assets/p2.png';
import pro_img4 from '/assets/school.png';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
    {
        id: "item1",
        img: pro_img1,
        title: "Cinemax",
        description: "Une plate forme de résevarion de films et de spectacles avec un crud administrateur et simulation de payement.",
        technologies:[
            "php/symfony","Bootstrap","Mysql"
        ],
        repo_link: "",
        demo_link: null
    },

    {
        id: "item2",
        img: pro_img2,
        title: "Michel bot",
        description: "Un agent vituel pour linux à votre écoute pour effectuer des tâches au son de votre voix une fois qu'il a reconnu son som 'Michel', nom facilement modifiable",
        technologies:[
            "Python","Vosk",'engine'
        ],
        repo_link: "",
        demo_link: null
    },

    {
        id: "item3",
        img: pro_img3,
        title: "Portfolio",
        description: "Un site web de présentation professionel et responsive",
        technologies:[
            "React js","Tailwiind css / daisy UI", "AOS"
        ],
        repo_link: "",
        demo_link: null
    },

    {
        id: "item4",
        img: pro_img4,
        title: "Structure manager",
        description: "Une application en ligne de gestion des établissement scolaires supérieures avec un CRUD chaque élément de la structure d'un établissement supérireur d'enseignement",
        technologies:[
            "C","Listes chaînées"
        ],
        repo_link: "",
        demo_link: null
    }
]

const projets = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id='projets' className="w-full h-auto p-3 bg-white">
        <h1 data-aos="fade-right" className="sect-h1 mt-[3vh] mb-[3vh]">Mes Projets</h1>
            <div data-aos="fade-left" className="carousel w-full space-x-6 space-y-2.5">
                {projects.map((projet) => (
                    <div key={projet.id} id={projet.id} className="card carousel-item w-full md:w-150 shadow-md bg-white">
                    <figure>
                        <img 
                        src={projet.img}
                        alt={projet.title} className='w-full h-70 object-cover' />
                    </figure>
                    <div className="card-body">
                        <h2 data-aos="fade-up" data-aos-once="true" className="card-title text-black text-2xl font-bold">{projet.title}</h2>
                        <span data-aos="fade-left" className='space-x-1'>
                            {projet.technologies.map((techno) => (
                                <div className="badge badge-soft mt-1">{techno}</div>
                            ))}
                        </span>
                        <p data-aos="fade-right" data-aos-once="true" className='text-black font-semibold'>{projet.description}</p>
                        <div data-aos="fade-left" data-aos-once="true" className="card-actions justify-start mt-2">
                            <a href={projet.demo_link} className="btn btn-ghost bg-blue-500 w-52 text-white pr-12 pl-12">
                                <p>Demo</p>
                                < Video />
                            </a>
                            <a href={projet.repo_link} className="btn btn-neutral w-20"><Github /></a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div data-aos="fade-down" data-aos-once="true" className="flex w-full justify-center gap-2 py-2">
                {projects.map((projet,index) => (
                    <a key={projet.id} href={"#"+ projet.id} className="btn btn-xs">{index+1}</a>
                ))}
            </div>
    </section>
  )
}

export default projets