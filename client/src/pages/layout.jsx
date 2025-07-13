import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";
import { ToastContainer } from "react-toastify";


export default function RootLayout() {
  return (
    <>
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
    </>
  );
}
