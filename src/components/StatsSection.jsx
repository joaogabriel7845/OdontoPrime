function StatsSection() {
  const stats = [
    { numero: "+1.200", descricao: "Pacientes atendidos" },
    { numero: "12", descricao: "Anos de experiência" },
    { numero: "98%", descricao: "Índice de satisfação" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center p-5">

      {stats.map((s) => (
        <div key={s.numero} className="py-10 shadow-md p-4 rounded-2xl border border-prussian/40">
          <h1 className="text-3xl font-[Inter] text-center font-bold text-prussian">{s.numero}</h1>
          <p className="text-xl text-center font-[Inter]">{s.descricao}</p>
        </div>
      ))}

    </div>
  );
}

export default StatsSection;
