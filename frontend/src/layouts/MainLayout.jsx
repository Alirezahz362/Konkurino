import { Outlet } from "react-router-dom";
import Header from "../components/Navbar/Header";
import Navbar from "../components/Navbar/Navbar";
import BottomNav from "../components/Navbar/BottomNav";
import useScroll from "../hooks/useScroll";

const MainLayout = () => {
  const isScrolled = useScroll(50);

  return (
    <div className="layout-wrapper d-flex flex-column min-vh-100">
      <Header />
      <Navbar />

      <main className={`flex-grow-1 ${isScrolled ? "nav-scrolled" : ""}`}>
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
};

export default MainLayout;
