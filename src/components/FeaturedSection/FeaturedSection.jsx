import { useEffect, useState, useRef, useCallback } from "react";
import gsap from "gsap";

import useFeatured from "../../hooks/useFeatured";
import useSlider from "../../hooks/useSlider";

const FeaturedSection = () => {
  const { featured, error } = useFeatured();

  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);

  // Refs for content and image elements
  const textItemsRef = useRef([]);
  const imageRef = useRef(null);

  const addTextRef = (el, index) => {
    textItemsRef.current[index] = el;
  };

  const currentSlide = featured[activeIndex] || null;
  //******************************************************************** */
  const changeSlide = useCallback(() => {
    if (!featured.length) return;
    if (isAnimating.current) return;

    const nextIndex = (activeIndex + 1) % featured.length;

    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(nextIndex);

        isAnimating.current = false;
      },
    });

    tl.to(textItemsRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power2.in",
    });

    tl.to(
      imageRef.current,
      {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
      },
      "<",
    );

    return () => {
      tl.kill();
    };
  }, [activeIndex, featured.length]);

  useSlider(featured, changeSlide);

  // Animation for content and image when the slide changes
  useEffect(() => {
    if (!currentSlide) return;

    if (!textItemsRef.current || !imageRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(
      textItemsRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      },
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      "-=.5",
    );

    return () => {
      tl.kill();
    };
  }, [activeIndex]);

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
