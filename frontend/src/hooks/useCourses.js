import { useState, useEffect } from "react";
import { getCourses } from "../services/courseService";

export const useCourses = (queryParams = "") => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getCourses(queryParams);
      setCourses(data);
    } catch (error) {
      setError(error.message || "خطا در دریافت دوره ها از سرور");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [queryParams]);
  return { courses, loading, error, refetch: fetchCourses };
};
export default useCourses;
