import { Outlet } from "react-router";
import Navbar from "./_components/Navbar";


export default function RootLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
