const classGroups = [
  {
    id: 1,
    name: "Turma A",
    year: "3º ano EM",
    advisor: "Prof. Carlos Henrique",
    summary:
      "Foco em projetos interdisciplinares, com uso intensivo de recursos digitais e mentorias semanais.",
  },
  {
    id: 2,
    name: "Turma B",
    year: "2º ano EM",
    advisor: "Profa. Fernanda Ribeiro",
    summary:
      "Integração de laboratório maker às aulas regulares e acompanhamento próximo das famílias.",
  },
  {
    id: 3,
    name: "Turma C",
    year: "1º ano EM",
    advisor: "Prof. Hugo Matos",
    summary:
      "Programa de acolhimento para novos alunos e trilhas adaptativas para nivelamento de conteúdo.",
  },
];

export default function Turmas() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">Turmas</span>
        <h2>Dinâmica das turmas</h2>
        <p>
          Os grupos são organizados para estimular colaboração, autonomia e
          protagonismo, com educadores atentos às necessidades individuais.
        </p>
      </div>

      <div className="cards-grid" role="list">
        {classGroups.map((group) => (
          <article
            key={group.id}
            className="cards-grid__item"
            role="listitem"
            tabIndex={0}
          >
            <header>
              <span className="cards-grid__tag">{group.year}</span>
              <h3>{group.name}</h3>
            </header>
            <p>{group.summary}</p>
            <footer>
              <strong>Orientador(a):</strong>
              <span>{group.advisor}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
