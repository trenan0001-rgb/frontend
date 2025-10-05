# Notas do Projeto Youware

## Comandos de Build & Desenvolvimento
- npm install – instala dependências (React, Vite, Tailwind CSS 3.x, Autoprefixer).
- npm run build – gera o bundle de produção usando Vite (dist/).
- Nenhum script dedicado de teste ou lint está configurado; adicione-os se necessário antes de executar.

## Visão Geral da Arquitetura
- **Stack de frontend**: React 18 + Vite. O ponto de entrada é src/main.jsx, renderizando App.jsx dentro de React.StrictMode.
- **Layout de Página Única**: App.jsx orquestra todas as seções, montando Navbar, Hero, Panorama, widgets do dashboard e seções de páginas (Turmas, Alunos, Aulas, Atividades, Relatorios, Login) dentro de blocos semânticos <section> para suportar navegação suave por rolagem.
- **Sistema de Design**:
  - Toda a estilização está em src/styles/globals.css, combinando diretivas base do Tailwind com um grande conjunto de classes utilitárias feitas à mão (paleta neutra premium, tipografia DM Sans, layouts de grid responsivos, microinterações).
  - Dados em nível de componente (arrays mockados descrevendo alunos, turmas, relatórios etc.) permanecem dentro de cada componente de página para preservar o conteúdo original e facilitar futura integração dinâmica.
  - src/components/Navbar.jsx gerencia a navegação fixa (sticky), rastreando posição de rolagem e estado do menu mobile, reutilizando os mesmos IDs de seção definidos em App.jsx.
  - Hero da landing page, panorama geral e footer são modularizados em src/sections/ e utilizam estilos compartilhados de globals.css e assets de src/assets/.
- **Assets**: Importações absolutas via arquivo índice em src/assets/index.js, garantindo que o Vite trate corretamente os caminhos de saída em /assets/.

## Configuração do Tailwind
- Tailwind é usado apenas para a camada base; todas as utilities são personalizadas. Certifique-se de que tailwind.config.js mantenha content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"] para que a purga funcione e o Vite emita o CSS necessário.
- postcss.config.js exporta um objeto ES module; mantenha-o sincronizado com as versões instaladas do Tailwind (3.4.x) e Autoprefixer.

## Dados & Persistência
- Nenhum backend ou camada de banco de dados está presente. O conteúdo é estático e armazenado como arrays dentro dos componentes de página. Introduza clientes de API ou integrações com o backend do Youware se a persistência se tornar necessária.
