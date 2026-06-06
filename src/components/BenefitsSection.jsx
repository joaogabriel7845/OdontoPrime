import { h1 } from "framer-motion/client"

function BenefitsSection() {
    const benefits = [
        { id:1, titulo: "Atendimento humanizado", descricao: "Cada paciente é tratado com atenção e cuidado individual." },
        { id:2, titulo: "Equipamentos modernos", descricao: "Tecnologia de ponta para diagnósticos precisos e tratamentos eficientes." },
        { id:3, titulo: "Facilidade de pagamento", descricao: "Parcelamento em até 12x sem juros e diversas formas de pagamento." },
        { id:4, titulo: "Equipe especializada", descricao: "Profissionais certificados e em constante atualização." },
    ]

    return (
        <div className="flex flex-col gap-5 overflow-hidden">
            <h1 className="text-3xl font-bold p-5 text-center font-[Inter] text-prussian">Por que escolher a OdontoPrime?</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 p-10 bg-prussian font-[Inter]">
                {benefits.map((b) => (

                    <div key={b.id} className="flex flex-col gap-4 p-9 border-2 border-lavender bg-alice-blue rounded-2xl shadow-md">
                        <h1 className="text-3xl font-bold">{b.id}</h1>
                        <h1 className="text-3xl font-bold">{b.titulo}</h1>
                        <p>{b.descricao}</p>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default BenefitsSection