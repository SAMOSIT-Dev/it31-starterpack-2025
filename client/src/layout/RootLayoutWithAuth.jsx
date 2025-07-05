import { Outlet } from "react-router";
import { AuthProvider } from "@/contexts/AuthContext";

export default function RootLayoutWithAuth() {
  return (
    <AuthProvider>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
}