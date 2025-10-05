const activities = [
  {
    id: 1,
    title: "Exercícios de Matemática",
    deadline: "15 fev 2024",
    group: "Turma A",
    rubric: "Critérios baseados em resolução colaborativa e argumentação matemática.",
  },
  {
    id: 2,
    title: "Redação",
    deadline: "18 fev 2024",
    group: "Turma B",
    rubric: "Avaliação de repertório cultural, coesão textual e revisão entre pares.",
  },
  {
    id: 3,
    title: "Podcast de Biologia",
    deadline: "22 fev 2024",
    group: "Turma C",
    rubric: "Produção multimídia com roteiro autoral e verificação de fontes confiáveis.",
  },
];

export default function Atividades() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">Atividades</span>
        <h2>Acompanhamento contínuo</h2>
        <p>
          As entregas avaliativas fortalecem o protagonismo do aluno e geram
          insumos para mentorias individualizadas e devolutivas qualitativas.
        </p>
      </div>

      <div className="table-card" role="group" aria-label="Lista de atividades">
        <div className="table-card__header" role="row" aria-hidden="true">
          <span>Atividade</span>
          <span>Prazo</span>
          <span>Turma</span>
          <span aria-hidden="true" />
        </div>
        {activities.map((activity) => (
          <div key={activity.id} className="table-card__row" role="row">
            <div>
              <strong>{activity.title}</strong>
              <p>{activity.rubric}</p>
            </div>
            <span>{activity.deadline}</span>
            <span>{activity.group}</span>
            <button type="button" className="table-card__action">
              Acompanhar entrega
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
