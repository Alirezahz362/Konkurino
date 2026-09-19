import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import MajorCategories from "../components/category/MajorCategories";
import CourseSection from "../components/courses/CourseSection";
import TeamSection from "../components/Team/TeamSection";
import TestimonialsSection from "../components/Testimonials/TestimonialsSection";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <FeaturedSection></FeaturedSection>
      <MajorCategories></MajorCategories>
      <CourseSection></CourseSection>
      <TeamSection></TeamSection>
      <TestimonialsSection></TestimonialsSection>
      <Footer></Footer>
    </>
  );
};
export default Home;
