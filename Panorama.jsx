const pillars = [
  {
    title: "Experiência do aluno",
    text: "Acompanhamos bem-estar, engajamento e evolução acadêmica para garantir protagonismo e acolhimento.",
  },
  {
    title: "Orquestração pedagógica",
    text: "Educadores acessam trilhas, planos de aula e bibliotecas de recursos em um ambiente compartilhado.",
  },
  {
    title: "Inteligência de dados",
    text: "Dashboards intuitivos transformam registros em decisões estratégicas para o time gestora.",
  },
];

const steps = [
  "Analise indicadores consolidados do colégio",
  "Priorize ações para turmas e estudantes",
  "Compartilhe visão com educadores e famílias",
];

export function Panorama() {
  return (
    <section className="panorama" aria-labelledby="panorama-title">
      <div className="panorama__intro">
        <span className="section-tag">Panorama institucional</span>
        <h2 id="panorama-title">Como o Sistema Acadêmico eleva a gestão</h2>
        <p>
          Cada módulo foi desenhado para oferecer clareza na tomada de decisões e
          fluidez na comunicação entre times pedagógicos, administrativos e
          famílias.
        </p>
        <ol>
          {steps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>

      <div className="panorama__pillars">
        {pillars.map((pillar) => (
          <article key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
