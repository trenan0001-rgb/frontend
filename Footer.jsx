const footerLinks = [
  {
    title: "Documentação",
    items: [
      { label: "Guia do educador", href: "#inicio" },
      { label: "Trilhas curriculares", href: "#panorama" },
      { label: "Central de suporte", href: "#login" },
    ],
  },
  {
    title: "Comunidade",
    items: [
      { label: "Eventos", href: "#atividades" },
      { label: "Boletim pedagógico", href: "#relatorios" },
      { label: "Mentorias", href: "#alunos" },
    ],
  },
  {
    title: "Contato rápido",
    items: [
      { label: "WhatsApp institucional", href: "tel:+550000000000" },
      { label: "Portal das famílias", href: "#panorama" },
      { label: "Canal de ouvidoria", href: "mailto:ouvidoria@colegioexemplo.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="footer" aria-label="Rodapé institucional">
      <div className="footer__content">
        <div className="footer__brand">
          <span className="footer__emoji" aria-hidden="true">
            🎓
          </span>
          <div>
            <strong>Sistema Acadêmico</strong>
            <p>Gestão pedagógica com olhar humano e decisões orientadas por dados.</p>
          </div>
        </div>

        <div className="footer__links">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4>{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__meta">
        <span>© {new Date().getFullYear()} Colégio Exemplo. Todos os direitos reservados.</span>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  );
}
