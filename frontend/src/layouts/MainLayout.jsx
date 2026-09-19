
import Header from "../components/Navbar/Header";
import Navbar from "../components/Navbar/Navbar";
import BottomNav from "../components/Navbar/BottomNav";
import useScroll from "../hooks/useScroll";


const MainLayout = ({ children }) => {
  
  const scrolled = useScroll(50)

  return (
    <>
      <Header />
      <Navbar />
      <main className={scrolled ? 'nav-scrolled' : ""}
      style={{}}>{children}</main>
      <BottomNav />
    </>
  );
};
export default MainLayout;
