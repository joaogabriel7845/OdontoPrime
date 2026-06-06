import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CTASection() {

    return (
        <div className="flex flex-col gap-4 p-5">

            <fieldset className="flex flex-col border border-prussian/40 p-10 rounded-3xl gap-5">

                <legend className="text-3xl px-3 text-prussian font-bold font-[Inter] text-center">Agende sua avaliação hoje mesmo</legend>

                <div id="whatsapp" className="scroll-mt-30 flex justify-center">
                    <a href="https://wa.me/5521888888888" target="_blank" className="flex transition-all hover:-translate-y-1 items-center gap-2 bg-whatsapp text-white px-6 py-3 rounded-full font-medium">
                        <FontAwesomeIcon icon={faWhatsapp} fontSize={24}/>
                        Agendar pelo WhatsApp
                    </a>
                </div>

            </fieldset>

        </div>
    )
}

export default CTASection