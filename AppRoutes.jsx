
import { Routes, Route } from "react-router-dom";
import ProtectedLayout from "../layouts/ProtectedLayout";

// Páginas
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Alunos from "../pages/Alunos";
import Turmas from "../pages/Turmas";
import Aulas from "../pages/Aulas";
import Atividades from "../pages/Atividades";
import Relatorios from "../pages/Relatorios";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      {/* Rotas protegidas */}
      <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
      <Route path="/alunos" element={<ProtectedLayout><Alunos /></ProtectedLayout>} />
      <Route path="/turmas" element={<ProtectedLayout><Turmas /></ProtectedLayout>} />
      <Route path="/aulas" element={<ProtectedLayout><Aulas /></ProtectedLayout>} />
      <Route path="/atividades" element={<ProtectedLayout><Atividades /></ProtectedLayout>} />
      <Route path="/relatorios" element={<ProtectedLayout><Relatorios /></ProtectedLayout>} />
    </Routes>
  );
}
