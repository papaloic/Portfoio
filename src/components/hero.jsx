import hero_G from '/assets/techno6.jpg';
import hero_D1 from '/assets/avatars.png';
import hero_D2 from '/assets/ibm-cloud-projects.svg';
import hero_D3 from '/assets/partner.jpg';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section class="pub w-full h-auto flex flex-col gap-10 md:gap-5 items-center justify-center md:mt-[10vh] bg-white p-2 text-center md:p-0">
      <h1 data-aos="zoom-out-down" class="sect-h1 text-black mt-10">Rejoignez la communauté</h1>
      <div class="pub_b w-full md:h-[60vh] flex flex-col md:flex-row md:mt-[8vh]">
        <div data-aos="fade-right" class="pub_gauche w-full md:w-1/2 flex justify-center items-center relative pl-8">
          <img src={hero_G} alt="" class="w-full h-auto object-cover opacity-30" />
          <p className=' absolute m-auto text-black font-semibold text-xl md:text-start italic'>J’aime concevoir des applications fiables, apprendre de nouvelles technologies et transformer des idées en projets concrets. Curieux et rigoureux, je m’intéresse autant au développement front-end qu’au back-end, avec une attention particulière portée à la qualité du code et à l’expérience utilisateur. <br /><br />
          Actuellement en formation, je développe continuellement mes compétences à travers des projets personnels et académiques</p>
        </div>
        <div data-aos="fade-left" class="pub_droite w-full md:w-1/2 p-2 md:p-10 flex flex-wrap justify-center items-center gap-[20%]">
          <div data-aos="zoom-in" class="hero-custumers">
            <img class="hero-custumers-image" src={hero_D1} alt="hero_customers image" />
            <div class="hero-custumers-info">
              <h3 class="hero-custumers-number">
                8+
              </h3>
              <p class="hero-custumers-description">
                Clients satisfaits
              </p>
            </div>
          </div>
          <div data-aos="fade-left" class="hero-custumers">
            <img class="hero-custumers-image" src={hero_D2} alt="hero_customers image" />
            <div class="hero-custumers-info">
              <h3 class="hero-custumers-number">
                10+
              </h3>
              <p class="hero-custumers-description">
                projets réalisés
              </p>
            </div>
          </div>
          <div data-aos="fade-up" class="hero-custumers">
            <img class="hero-custumers-image" src={hero_D3} alt="hero_customers image" />
            <div class="hero-custumers-info">
              <h3 class="hero-custumers-number">
                5+
              </h3>
              <p class="hero-custumers-description">
                partenaires dans le monde
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default hero;