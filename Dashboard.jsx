const metrics = [
  {
    label: "Alunos",
    value: "120",
    description: "Matrículas ativas distribuídas em três séries do Ensino Médio.",
  },
  {
    label: "Turmas",
    value: "6",
    description: "Integração entre turmas presenciais e híbridas com acompanhamento diário.",
  },
  {
    label: "Aulas",
    value: "35",
    description: "Planejamentos concluídos nesta semana com foco em competências socioemocionais.",
  },
  {
    label: "Atividades",
    value: "12",
    description: "Atividades avaliativas publicadas na plataforma com rubricas claras.",
  },
];

const distribution = [
  {
    title: "Taxa de frequência",
    value: "94%",
    text: "Participação constante dos alunos, com baixa evasão e reforço das aulas de apoio.",
  },
  {
    title: "Entregas pontuais",
    value: "88%",
    text: "Atividades concluídas dentro do prazo, apoiadas por lembretes automáticos.",
  },
  {
    title: "Engajamento em sala",
    value: "76%",
    text: "Interações registradas durante aulas síncronas com feedback em tempo real.",
  },
];

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__grid">
        {metrics.map((item) => (
          <article key={item.label} className="dashboard__card">
            <div className="dashboard__value">{item.value}</div>
            <h3>{item.label}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>

      <div className="dashboard__insights">
        <div className="dashboard__summaries">
          {distribution.map((item) => (
            <article key={item.title} className="dashboard__summary">
              <div className="dashboard__summary-value">{item.value}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <aside className="dashboard__details">
          <h3>Resumo dos indicadores</h3>
          <p>
            Os dados refletem o cenário atual do colégio, permitindo identificar
            prioridades de acompanhamento. Frequência e engajamento mantêm-se
            estáveis, enquanto as entregas pontuais reforçam a cultura de
            responsabilidade dos estudantes.
          </p>
          <ul>
            <li>
              Monitoramento contínuo de frequências, notas e participação em
              projetos.
            </li>
            <li>
              Alertas preventivos para alunos com tendência a queda de
              desempenho.
            </li>
            <li>
              Geração automática de relatórios para reuniões pedagógicas.
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
