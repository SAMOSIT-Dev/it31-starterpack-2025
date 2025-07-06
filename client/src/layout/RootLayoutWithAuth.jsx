import { Outlet } from "react-router";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/pages/_components/Navbar";
import { ToastContainer } from "react-toastify";

export default function RootLayoutWithAuth() {
  return (
    <AuthProvider>
        <ToastContainer
        position="top-center" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </AuthProvider>
  );
}