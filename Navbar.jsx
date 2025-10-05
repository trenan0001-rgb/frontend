// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">Sistema Acadêmico</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/alunos" className="hover:underline">
          Alunos
        </Link>
        <Link to="/turmas" className="hover:underline">
          Turmas
        </Link>
        <Link to="/aulas" className="hover:underline">
          Aulas
        </Link>
        <Link to="/atividades" className="hover:underline">
          Atividades
        </Link>
        <Link to="/relatorios" className="hover:underline">
          Relatórios
        </Link>
      </div>
    </nav>
  );
}
