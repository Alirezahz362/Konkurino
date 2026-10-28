import { useEffect, useState } from "react";
import { courseService } from "../services/courseService";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setloading(true);
        const data = await courseService.getCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message || " خطادر دریافت اطلاعات رشته ها");
      }finally{
        setloading(false)
      }
    };
    fetchCategories();
  }, []);

  return {
    categories,
    loading,
    error,
  };
};

export default useCategories;
