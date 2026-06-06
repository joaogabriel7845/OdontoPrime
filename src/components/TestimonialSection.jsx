import { Rating } from "@smastrom/react-rating"
import "@smastrom/react-rating/style.css"

function TestimonialSection() {
    const testimonials = [
        { nome: "Ana Clara", avaliacao: 5, depoimento: "Atendimento incrível! Me senti acolhida desde a primeira consulta. Recomendo demais." },
        { nome: "Ricardo Souza", avaliacao: 5, depoimento: "Fiz meu clareamento aqui e o resultado superou minhas expectativas. Equipe muito profissional." },
        { nome: "Fernanda Lima", avaliacao: 4, depoimento: "Ótima clínica, ambiente moderno e equipe atenciosa. Com certeza voltarei!" },
    ]

    return (
        <div id="testimonial" className="scroll-mt-30 flex flex-col md:flex-row gap-5 p-10 font-[inter]">
            {testimonials.map((t) => (
                <div key={t.nome} className="border border-prussian/40 rounded-2xl p-10 flex flex-col gap-2 justify-between">

                    <div className="flex gap-2">
                        <Rating value={t.avaliacao} readOnly style={{ maxWidth: 100 }} />
                    </div>

                    <p className="italic">"{t.depoimento}"</p>

                    <div className="flex gap-2 items-center">
                        <img className="w-10 rounded-3xl" src={`https://ui-avatars.com/api/?name=${t.nome}&background=1B263B&color=fff`} />
                        <p>{t.nome}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default TestimonialSection