import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollAnimation = (ref, dependency = []) => {
  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll(".major-card, .subject-card");

    if (!items.length) return;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.10,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ref.current,

          start: "top 95%",

          toggleActions: "play none none reverse",
        },
      },
    );

    ScrollTrigger.refresh();
  }, [ref, ...dependency]);
};

export default useScrollAnimation;
