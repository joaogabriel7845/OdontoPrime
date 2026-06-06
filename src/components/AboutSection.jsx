import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import odontoAbout from "../assets/odontoAbout.png"
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons"

function AboutSection() {

    const qualities = [
        "Atendimento Personalizado e humanizado.",
        "Equipamentos de última geração.",
        "Equipe com especialistas certificados.",
        "Parcelamento em até 12x sem juros.",
        "Avaliação inicial gratuita",
        "Horários flexíveis, incluindo sábados"
    ]

    return (
        <div id="about" className="scroll-mt-30 flex flex-col md:flex-row p-5 font-[Inter]">
            
            <div className="flex flex-1 justify-center items-center">
                <img className="w-2xl rounded-2xl" src={odontoAbout} alt="" />
            </div>

            <div className="flex flex-col gap-10 p-5 flex-1">

                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-bold object-cover text-prussian">Sobre a OdontoPrime</h1>
                    <p>Fundada em 2012 no <strong>Rio de Janeiro</strong>, a OdontoPrime nasceu com o objetivo de transformar o cuidado bucal em uma experiência acolhedora e <strong>acessível</strong>. Hoje, com mais de 1.200 pacientes atendidos, seguimos comprometidos com excelência e humanização.</p>
                </div>


                <div className="flex gap-5 flex-col justify-center">
                    <h1 className="text-3xl font-bold text-prussian">Qualidades</h1>
                    <ul className="flex flex-col gap-4">
                        {qualities.map((q) => (
                            <li className="flex items-center gap-2 p-5 border border-prussian/40 rounded-2xl"><FontAwesomeIcon icon={faCircleCheck} color="#4BAE4F"/> {q}</li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default AboutSection