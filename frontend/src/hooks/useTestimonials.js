import { useEffect, useState } from "react";
import getTestimonials from "../services/testimonialService";

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  },[]);
  return { testimonials, loading, error }
};

export default useTestimonials;