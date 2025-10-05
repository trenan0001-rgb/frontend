
import Navbar from "../components/Navbar";

export default function ProtectedLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
}
