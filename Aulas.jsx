const lessons = [
  {
    id: 1,
    title: "Introdução à Matemática",
    date: "10 fev 2024",
    group: "Turma A",
    goal: "Explorar conceitos de proporcionalidade em situações reais, com mediação digital.",
  },
  {
    id: 2,
    title: "História do Brasil",
    date: "12 fev 2024",
    group: "Turma B",
    goal: "Mapear percepções sobre cidadania a partir de fontes históricas multimídia.",
  },
  {
    id: 3,
    title: "Laboratório de Biologia",
    date: "15 fev 2024",
    group: "Turma C",
    goal: "Investigar biodiversidade local com coleta de dados via aplicativo móvel.",
  },
];

export default function Aulas() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">Aulas</span>
        <h2>Planejamento pedagógico</h2>
        <p>
          As aulas combinam metodologias ativas, recursos híbridos e avaliações
          formativas para potencializar a aprendizagem.
        </p>
      </div>

      <div className="timeline">
        {lessons.map((lesson) => (
          <article key={lesson.id} className="timeline__item">
            <div className="timeline__marker" aria-hidden="true" />
            <header>
              <span>{lesson.date}</span>
              <h3>{lesson.title}</h3>
              <strong>{lesson.group}</strong>
            </header>
            <p>{lesson.goal}</p>
            <button type="button" className="timeline__cta">
              Ver plano detalhado
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
