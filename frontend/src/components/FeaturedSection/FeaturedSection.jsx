import { useEffect, useState } from "react";
import useFeaturedAnimation from "../../hooks/useFeaturedAnimation";
import useSlider from "../../hooks/useSlider";
import useCourses from "../../hooks/useCourses";

const FeaturedSection = () => {
  const { courses, loading, error } = useCourses();
  const featured =
    courses?.filter((item) => item.isFeatured || item.featured) ||
    courses ||
    [];

  const [activeIndex, setActiveIndex] = useState(0);

  const { imageRef, textItemsRef, changeSlide } = useFeaturedAnimation(
    featured,
    activeIndex,
    setActiveIndex,
  );

  const addTextRef = (el, index) => {
    textItemsRef.current[index] = el;
  };

  const currentSlide = featured[activeIndex] || null;

  useSlider(featured, changeSlide);

  // Handle error and loading states
  if (error) {
    return <p>{error}</p>;
  }

  if (loading || !currentSlide) {
    return <p>در حال بارگیری...</p>;
  }

  return (
    <section className="featured-section">
      <div className="featured-content">
        <span className="featured-badge" ref={(el) => addTextRef(el, 0)}>
          {currentSlide.badge || currentSlide.category?.title || "ویژه کنکور"}
        </span>

        <h2 ref={(el) => addTextRef(el, 1)}>{currentSlide.title}</h2>

        <p ref={(el) => addTextRef(el, 2)}>
          {currentSlide.description ||
            "آموزش جامع و مفهومی به همراه تست سال های اخیر"}
        </p>

        <button className="featured-btn" ref={(el) => addTextRef(el, 3)}>
          {currentSlide.buttonText || "مشاهده دوره"}
        </button>
      </div>

      <div className="featured-image" ref={imageRef}>
        <img
          src={currentSlide.image || "/images/course-placeholder.jpg"}
          alt={currentSlide.title || "دوره ویژه"}
        />
      </div>
    </section>
  );
};

export default FeaturedSection;
