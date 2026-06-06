import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTooth,
  faSmile,
  faShield,
} from "@fortawesome/free-solid-svg-icons";

function ServicesSection() {
  const services = [
    {
      nome: "Clareamento",
      descricao: "Dentes até 8 tons mais brancos com tecnologia LED.",
      icone: faStar,
      color: "#FAC311",
    },
    {
      nome: "Implantes",
      descricao: "Reposição de dentes com implantes de titânio.",
      icone: faTooth,
      color: "#6C9BCF",
    },
    {
      nome: "Ortodontia",
      descricao: "Alinhamento dental com aparelho fixo ou invisível.",
      icone: faSmile,
      color: "#4CAF82",
    },
    {
      nome: "Limpeza",
      descricao: "Remoção de tártaro e polimento profissional.",
      icone: faShield,
      color: "#E07B5A",
    },
  ];

  return (
    <div id="services" className="scroll-mt-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-5 font-[Inter]">
      {services.map((s) => (
        <div
          key={s.nome}
          className="shadow-md flex flex-col gap-2 border border-prussian/40 p-5 rounded-2xl"
        >
          <FontAwesomeIcon icon={s.icone} size="2xl" color={s.color} />
          <h1 className="text-3xl font-medium">{s.nome}</h1>
          <p>{s.descricao}</p>
        </div>
      ))}
    </div>
  );
}

export default ServicesSection;
