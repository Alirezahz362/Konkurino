import { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";

const useFeaturedAnimation = (featured, activeIndex, setActiveIndex) => {
  const imageRef = useRef(null);

  const textItemsRef = useRef([]);

  const isAnimating = useRef(false);

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
  }, [activeIndex, featured.length, setActiveIndex]);

useEffect(() => {
  if (!featured[activeIndex]) return;

  if (!textItemsRef.current.length || !imageRef.current) return;

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
    {
      opacity: 0,
      scale: 1.08,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=.5",
  );

  return () => {
    tl.kill();
  };
}, [activeIndex, featured]);

  return {
    imageRef,
    textItemsRef,
    isAnimating,
    changeSlide,
  };
};

export default useFeaturedAnimation;
