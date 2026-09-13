import { useState, useEffect } from "react";

import Header from "../components/Navbar/Header";
import Navbar from "../components/Navbar/Navbar";
import BottomNav from "../components/Navbar/BottomNav";

const MainLayout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <Navbar scrolled={scrolled} />
      <main className={scrolled ? 'nav-scrolled' : ""}
      style={{}}>{children}</main>
      <BottomNav />
    </>
  );
};
export default MainLayout;
