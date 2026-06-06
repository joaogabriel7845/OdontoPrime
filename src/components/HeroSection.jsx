import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";


function HeroSection() {
  return (
    <div id="home" className="w-full h-screen flex flex-col gap-5 items-center justify-center pt-30">

      <h1 className="text-7xl px-4 text-center font-[Merriweather]">
        Seu sorriso merece o melhor cuidado
      </h1>

      <p className="text-xl px-4 text-center font-[Inter]">
        Tratamentos modernos e atendimento humanizado.
      </p>

      <div className="flex gap-2 px-4">

          <a href="#whatsapp" className="flex items-center p-3 rounded-md bg-whatsapp hover:cursor-pointer">
            Agendamento Whatsapp
            <FontAwesomeIcon icon={faWhatsapp} size="xl"/>
          </a>
          
          <a href="#services" className="flex items-center p-3 rounded-md bg-prussian text-white hover:cursor-pointer">
            Conhecer Serviços
            <FontAwesomeIcon icon={faArrowDown}/>
          </a>

      </div>

    </div>
  );
}

export default HeroSection;
