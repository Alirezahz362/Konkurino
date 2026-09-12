import Header from "./components/Navbar/Header";
import TopNavigation from "./components/Navbar/TopNavigation";
import BottomNav from "./components/Navbar/BottomNav";
import NewCarousel from "./components/NewCarousel";
import Accordion from "./components/Majors/Accordion";
import Course from "./components/courses/Course";
function App() {
  return (
    <>
      <Header></Header>
      <TopNavigation></TopNavigation>
      <BottomNav></BottomNav>
      <NewCarousel></NewCarousel>
      <Accordion></Accordion>
      <Course></Course>
    </>
  );
}

export default App;
