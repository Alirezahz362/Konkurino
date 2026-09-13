import { useEffect, useState, useRef } from "react";
import getFeatured from "../../services/featuredService";
import gsap from "gsap";
const FeaturedSection = () => {
 // State for featured data, active slide index, and error handling
  const [featured, setFeatured] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [error, setError] = useState(null);

  // Refs for content and image elements
  const contentRef = useRef(null);
  const imageRef = useRef(null);




  // Fetch featured data on component mount
  useEffect(() => {
    const loadFeatured = async () => {
      try {
        const data = await getFeatured();
        setFeatured(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadFeatured();
  }, []);
  
  
  // Auto-slide functionality
  useEffect(() => {
    if (featured.length === 0) return;
    
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [featured]);
  
  
  
  // Animation for content and image when the slide changes
  useEffect(() => {
    if (!featured[activeIndex]) return;
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power3.out" },
      "-=.5",
    );
  }, [activeIndex, featured]);




 // Handle error and loading states
  if (error) {
    return <p>{error}</p>;
  }

  if (featured.length === 0) {
    return <p>در حال بارگیری...</p>;
  }

  
  const currentSlide = featured[activeIndex];
  

  return (
    <section className="featured-section">
      <div className="featured-content" ref={contentRef}>
        <span className="featured-badge">{currentSlide.badge}</span>

        <h2>{currentSlide.title}</h2>

        <p>{currentSlide.description}</p>

        <button className="featured-btn">{currentSlide.buttonText}</button>
      </div>

      <div className="featured-image" ref={imageRef}>
        <img src={currentSlide.image} alt={currentSlide.title} />
      </div>
    </section>
  );
};

export default FeaturedSection;
