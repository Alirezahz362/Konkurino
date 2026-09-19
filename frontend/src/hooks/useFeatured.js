import { useEffect, useState } from "react";
import getFeatured from "../services/featuredService";

const useFeatured = () => {
  const [featured, setFeatured] = useState([]);
  const [error, setError] = useState(null);

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

  return {
    featured,
    error,
  };
};

export default useFeatured;
