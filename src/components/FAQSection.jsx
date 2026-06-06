import { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

function FAQSection() {
const faqs = [
    {
    pergunta: "Vocês aceitam convênio?",
    resposta:
        "Sim, trabalhamos com os principais convênios odontológicos do mercado.",
    },
    {
    pergunta: "Quanto custa a avaliação inicial?",
    resposta: "A avaliação inicial é totalmente gratuita e sem compromisso.",
    },
    {
    pergunta: "Onde fica a clínica?",
    resposta:
        "Estamos localizados na Av. Atlântica, 1500 - Copacabana, Rio de Janeiro.",
    },
    {
    pergunta: "Qual o horário de atendimento?",
    resposta:
        "Atendemos de segunda a sexta das 8h às 19h e aos sábados das 8h às 13h.",
    },
];

const [aberta, setAberta] = useState(null);

return (
    <div className="p-5 font-[Inter]">
        <fieldset className="border border-prussian/30 rounded-2xl p-10">

            <legend className="px-3 text-prussian text-3xl font-bold">Dúvidas Frequentes</legend>
            
            {faqs.map((f) => (
                <div onClick={() => setAberta(f.pergunta === aberta ? null : f.pergunta)} className="flex flex-col gap-2 border-b border-prussian/40 p-5" key={f.pergunta}>

                    <h1 className="flex justify-between text-2xl hover:cursor-pointer">
                        {f.pergunta}
                        {aberta === f.pergunta ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                    </h1>

                    <AnimatePresence>
                        {aberta === f.pergunta && (
                            <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                            {f.resposta}
                            </motion.p>
                        )}
                    </AnimatePresence>

                </div>
            ))}
            
        </fieldset>
    </div>
);
}

export default FAQSection;
