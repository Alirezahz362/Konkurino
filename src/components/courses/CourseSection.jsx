import CourseSlider from "./CourseSlider";
import useCourses from "../../hooks/useCourses";

const CourseSection = () => {
  const { courses, error } = useCourses();

  if (error) {
    return <p>{error}</p>;
  }

  if (courses.length === 0) {
    return <p>در حال بارگیری...</p>;
  }

  return (
    <section className="course-section">
      <div className="course-container">
        <div className="course-header">
          <h2>دوره‌های آموزشی</h2>

          <p>
            مسیر یادگیری خودت را انتخاب کن؛ از آموزش مفهومی تا آمادگی کامل برای
            آزمون‌ها
          </p>
        </div>

        <CourseSlider courses={courses} />
      </div>
    </section>
  );
};

export default CourseSection;
