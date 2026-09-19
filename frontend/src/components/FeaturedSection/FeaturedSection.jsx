import { useEffect, useState } from "react";
import useFeaturedAnimation from "../../hooks/useFeaturedAnimation";

import useFeatured from "../../hooks/useFeatured";
import useSlider from "../../hooks/useSlider";

const FeaturedSection = () => {
  const { featured, error } = useFeatured();

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

  if (!currentSlide) {
    return <p>در حال بارگیری...</p>;
  }

  return (
    <section className="featured-section">
      <div className="featured-content">
        <span className="featured-badge" ref={(el) => addTextRef(el, 0)}>
          {currentSlide.badge}
        </span>

        <h2 ref={(el) => addTextRef(el, 1)}>{currentSlide.title}</h2>

        <p ref={(el) => addTextRef(el, 2)}>{currentSlide.description}</p>

        <button className="featured-btn" ref={(el) => addTextRef(el, 3)}>
          {currentSlide.buttonText}
        </button>
      </div>

      <div className="featured-image" ref={imageRef}>
        <img src={currentSlide.image} alt={currentSlide.title} />
      </div>
    </section>
  );
};

export default FeaturedSection;
