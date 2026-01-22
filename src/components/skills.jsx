import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const competences = [
    {
        id: 1,
        titre: "Front-end",
        pourcentage: 61,
        technologies: [
            {name: "html", level: 90},
            {name: "css/responsive design", level: 80},
            {name: "javascript/react js", level: 40},
            {name: "tailwind css/daisy UI", level: 65},
            {name: "UI/UX", level: 50},
            {name: "Intégration de maquettes", level: 60}
        ],
        description: "Interfaces responsive et modernes avec Tailwind CSS et JavaScript"
    },

    {
        id: 2,
        titre: "Back-end",
        pourcentage: 53,
        technologies: [
            {name: "PHP/Symfony", level: 65},
            {name: "Gestion des routes & API REST", level: 50},
            {name: "Authentification / autorisation", level: 80},
            {name: "Sécurité de base (XSS, CSRF, SQL injection)", level: 10},
            {name: "Autres langages (C/Python)", level: 60},
        ],
        description: "Back-end sécurisées, gestion des données et logique métier"
    },

    {
        id: 3,
        titre: "Bases de données",
        pourcentage: 62.2,
        technologies: [
            {name: "MySQL", level: 80},
            {name: "Modélisation (MCD / MLD)", level: 60},
            {name: "Requêtes SQL", level: 80},
            {name: "Optimisation simple", level: 45},
        ],
        description: "Conception et gestion de bases de données relationnelles"
    },

    {
        id: 4,
        titre: "Outils & environnement",
        pourcentage: 50,
        technologies: [
            {name: "Git / GitHub", level: 40},
            {name: "docker", level: 50},
            {name: "Linux / terminal", level: 70},
            {name: "VS Code", level: 75},
            {name: "npm / Composer", level: 50},
        ],
        description: "un environnement de travail optimal"
    },
]

const skills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="competences" className="competences w-full h-auto flex flex-col gap-10 justify-center items-center p-5 mt-[8vh]">
        <style>
            
        </style>
        <h1 data-aos="fade-right" className="sect-h1">mes compétences</h1>
        <p data-aos="fade-left" className="sect-p">Mon parcours et mes expériences me permettent de maîtriser une multitude de technologies</p>
        <div className="technos_info w-full h-auto flex flex-col md:flex-row md:flex-2 flex-wrap md:gap-[8%] justify-around items-center">
            {competences.map((competence) => (
                <div data-aos="fade-up" key={competence.id} className="info w-full md:w-[45%] min-h-122 h-auto mb-14 flex flex-col justify-center items-center">
                    <div className="info_h w-[95%] md:w-full min-h-122 flex flex-col justify-between items-center gap-4 text-start">
                        <h1 className="text-2xl font-bold  text-blue-950 font-(--roboto)"> {competence.titre} </h1>
                            <div className="relative w-24 h-24">  
                            <svg className="w-full h-full -rotate-90">
                                {/* {rotate car le cercle de progression commence à 15h(à droite)} */}
                                {/* cercle de fond  */}
                                <circle
                                cx="50%"
                                cy="50%"
                                r="35"
                                stroke="#e5e7eb"
                                stroke-width="10"
                                fill="none"
                                />
                                
                                {/* <!-- cercle de progression --> */}
                                <circle
                                cx="50%"
                                cy="50%"
                                r="35"
                                stroke="#3b82f6"
                                strokeWidth="10"
                                fill="none"
                                strokeLinecap="round"
                                  style={{
                                    "--progress": 220 - (220 * competence.pourcentage) / 100
                                }}
                                strokeDasharray="220"
                                strokeDashoffset="220"
                                className="progress-circle transition-all duration-4000 ease-out"
                                />
                            </svg>

                            {/* <!-- texte au centre --> */}
                            <span className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-black">
                                {competence.pourcentage}%
                            </span>
                            </div>
                        <ul>
                            {competence.technologies.map((techno) => (
                                <li key={techno.name} className="text-lg font-semibold font-(--roboto) mb-2">
                                    <h2 className="text-lg text-black font-semibold">{techno.name}</h2>
                                <div className="w-80  md:w-100 h-3 rounded-l-full rounded-r-full bg-[#e5e7eb]"><div style={{ "--complete":`${techno.level}%`}} className="w-0 percent h-3 rounded-l-full rounded-r-full bg-[#3b82f6] transition-all duration-4000"></div></div>
                                </li>
                            ))}
                        </ul>
                        <p className="text-lg text-black font-medium text-center">{competence.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default skills