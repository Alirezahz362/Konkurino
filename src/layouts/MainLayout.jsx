import Header from "../components/Navbar/Header";
import Navbar from "../components/Navbar/Navbar";
import BottomNav from "../components/Navbar/BottomNav";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">{children}</main>
      <BottomNav />
    </>
  );
};
export default MainLayout
