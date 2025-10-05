
import Navbar from "./components/Navbar.jsx"; 
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <AppRoutes />
    </div>
  );
}
