import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import MajorCategories from "../components/category/MajorCategories";
import CourseSection from "../components/courses/CourseSection";
import TeamSection from "../components/Team/TeamSection";

const Home = () => {
  return (
    <>
      <FeaturedSection></FeaturedSection>
      <MajorCategories></MajorCategories>
      <CourseSection></CourseSection>
      <TeamSection></TeamSection>
    </>
  );
};
export default Home;
