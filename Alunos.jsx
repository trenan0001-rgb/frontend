const students = [
  {
    id: 1,
    name: "Ana Souza",
    contact: "ana@email.com",
    group: "Turma A",
    highlight:
      "Participa do projeto de iniciação científica com foco em energias renováveis.",
  },
  {
    id: 2,
    name: "João Silva",
    contact: "joao@email.com",
    group: "Turma B",
    highlight:
      "Mentor de matemática para o clube olímpico e monitor das oficinas de lógica.",
  },
  {
    id: 3,
    name: "Maria Santos",
    contact: "maria@email.com",
    group: "Turma A",
    highlight:
      "Líder do grêmio estudantil e responsável pela integração de novos alunos.",
  },
  {
    id: 4,
    name: "Rafael Gonzaga",
    contact: "rafael@email.com",
    group: "Turma C",
    highlight:
      "Responsável pelo estúdio de podcast escolar e bolsista do programa bilíngue.",
  },
];

export default function Alunos() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">Alunos</span>
        <h2>Perfil dos estudantes</h2>
        <p>
          Cada estudante possui um plano de desenvolvimento personalizado,
          combinando trilhas acadêmicas, socioemocionais e projetos de impacto.
        </p>
      </div>

      <div className="profiles-grid" role="list">
        {students.map((student) => (
          <article
            key={student.id}
            className="profiles-grid__item"
            role="listitem"
            tabIndex={0}
          >
            <header>
              <div>
                <h3>{student.name}</h3>
                <span>{student.group}</span>
              </div>
            </header>
            <p>{student.highlight}</p>
            <footer>
              <strong>Contato:</strong>
              <a href={`mailto:${student.contact}`}>{student.contact}</a>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
