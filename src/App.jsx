import TopNavigation from "./components/Navbar/TopNavigation"
import NewCarousel from "./components/NewCarousel"
import Accordion from "./components/Majors/Accordion"
import Course from "./components/courses/Course"
function App() {

  return (
   <>
    <TopNavigation></TopNavigation>
    <NewCarousel></NewCarousel>
    <Accordion></Accordion>
    <Course></Course>
   </>
   
  )
}

export default App
