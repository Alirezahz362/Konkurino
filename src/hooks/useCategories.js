import { useEffect, useState } from "react";
import getCategories from "../services/categoryService";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();

        setCategories(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadCategories();
  }, []);

  return {
    categories,
    error,
  };
};

export default useCategories;
