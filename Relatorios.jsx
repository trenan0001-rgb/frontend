const reports = [
  {
    title: "Panorama pedagógico",
    content:
      "Acompanhamento semanal das metas de aprendizagem por área do conhecimento, com destaque para evolução em Matemática e Redação.",
    linkLabel: "Baixar relatório consolidado",
  },
  {
    title: "Indicadores de bem-estar",
    content:
      "Resultados do questionário socioemocional, mapeando níveis de engajamento, clima escolar e demandas de atendimento individual.",
    linkLabel: "Visualizar painel interativo",
  },
  {
    title: "Interação família-escola",
    content:
      "Registro de reuniões com responsáveis, feedbacks coletados e acordos de acompanhamento com devolutivas personalizadas.",
    linkLabel: "Exportar agenda de encontros",
  },
];

const highlights = [
  {
    label: "Relatórios gerados",
    value: "18",
    detail: "Compilações automáticas distribuídas para a equipe pedagógica nesta quinzena.",
  },
  {
    label: "Tempo médio de análise",
    value: "12 min",
    detail: "Insight de dados gerado a partir da consolidação de atividades e avaliações.",
  },
  {
    label: "Participação de famílias",
    value: "82%",
    detail: "Responsáveis presentes em reuniões online ou presenciais durante o mês.",
  },
];

export default function Relatorios() {
  return (
    <section className="content-section">
      <div className="section-heading">
        <span className="section-tag">Relatórios</span>
        <h2>Insights estratégicos</h2>
        <p>
          Relatórios intuitivos transformam dados de desempenho em decisões ágeis,
          apoiando educadores, equipe gestora e famílias.
        </p>
      </div>

      <div className="report-dashboard">
        <div className="report-dashboard__grid" role="list">
          {reports.map((report) => (
            <article
              key={report.title}
              className="report-dashboard__card"
              role="listitem"
              tabIndex={0}
            >
              <header>
                <h3>{report.title}</h3>
              </header>
              <p>{report.content}</p>
              <button type="button" className="ghost">
                {report.linkLabel}
              </button>
            </article>
          ))}
        </div>
        <aside className="report-dashboard__aside">
          <h3>Indicadores recentes</h3>
          <p>
            A plataforma consolida métricas automaticamente e emite alertas para
            pontos de atenção. A equipe acompanha cada indicador com planos de
            ação ágeis.
          </p>
          <ul role="list">
            {highlights.map((highlight) => (
              <li key={highlight.label} role="listitem">
                <strong>{highlight.value}</strong>
                <div>
                  <span>{highlight.label}</span>
                  <p>{highlight.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

