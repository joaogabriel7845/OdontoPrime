import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import odontoFooter from "../assets/odontoFooter.png"
import { faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

function Footer() {
    return (
        <div id="contact" className="flex p-5 md:p-10 bg-prussian font-[Inter] text-alice-blue">

            <div className="flex flex-col flex-1 gap-3 justify-center p-4 md:p-10">

                <div>
                    <p>Endereço: Av. Atlântica, 1500 - Copacabana, Rio de Janeiro.</p>
                    <p>Telefone: (21) 3042-8891</p>
                </div>

                <div>
                    <FontAwesomeIcon icon={faWhatsapp} fontSize={32}/>
                    <FontAwesomeIcon icon={faInstagram} fontSize={32}/>
                    <FontAwesomeIcon icon={faFacebook} fontSize={32}/>
                </div>
                
            </div>

            <div className="flex flex-col flex-1 justify-center items-center">
                <img className="w-65" src={odontoFooter} alt="" />
                <p className="text-alice-blue/50 text-sm">© 2026 OdontoPrime. Todos os direitos reservados.</p>
            </div>


        </div>

        
    )
}

export default Footer