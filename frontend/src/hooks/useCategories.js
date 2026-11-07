import { useState, useEffect } from "react";
import { getCategories } from "../services/courseService";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null)
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        setError(error.message || " خطا در دریافت لیست دسته بندی ها ");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  return { categories, loading, error };
};
export default useCategories;
