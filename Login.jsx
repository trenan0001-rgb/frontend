import { useState } from "react";

const contactChannels = [
  {
    title: "Suporte pedagógico",
    description:
      "Esclareça dúvidas sobre trilhas de aprendizagem, relatórios e devolutivas.",
    href: "mailto:suporte@colegioexemplo.com",
    label: "suporte@colegioexemplo.com",
  },
  {
    title: "Equipe de TI",
    description:
      "Assistência imediata para credenciais de acesso e integrações com dispositivos.",
    href: "mailto:ti@colegioexemplo.com",
    label: "ti@colegioexemplo.com",
  },
  {
    title: "Central da comunidade",
    description:
      "Participe de fóruns colaborativos, webinars e oficinas sobre inovação pedagógica.",
    href: "https://comunidade.colegioexemplo.com",
    label: "comunidade.colegioexemplo.com",
  },
];

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login enviado:", form);
  };

  return (
    <section className="login">
      <div className="login__panel">
        <div className="login__copy">
          <span className="section-tag">Portal do educador</span>
          <h2>Acesso seguro e centralizado</h2>
          <p>
            Utilize suas credenciais institucionais para acompanhar presenças,
            aprovar planos de aula e emitir relatórios personalizados em poucos
            cliques.
          </p>
          <ul>
            <li>Autenticação em duas etapas com proteção de dados sensíveis.</li>
            <li>Fluxo simplificado para reset de senha e troca de dispositivos.</li>
            <li>Monitoramento de sessões ativas e histórico de acesso.</li>
          </ul>
        </div>

        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email institucional</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="nome@colegioexemplo.com"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            required
          />

          <div className="login__actions">
            <button type="submit">Entrar</button>
            <button type="button" className="ghost">
              Recuperar acesso
            </button>
          </div>
        </form>
      </div>

      <aside className="login__support">
        <h3>Precisa de apoio imediato?</h3>
        <p>
          Nossa equipe está disponível para garantir continuidade das aulas e a
          melhor experiência para toda a comunidade escolar.
        </p>
        <div className="login__support-grid">
          {contactChannels.map((channel) => (
            <article key={channel.title}>
              <h4>{channel.title}</h4>
              <p>{channel.description}</p>
              <a href={channel.href} target="_blank" rel="noreferrer">
                {channel.label}
              </a>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}
