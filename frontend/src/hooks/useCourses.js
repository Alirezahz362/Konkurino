import { useState, useEffect } from "react";
import { getCourses } from "../services/courseService";

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        setLoading(true);
        const data = await getCourses();
        setCourses(data);
        setError(null);
      } catch (err) {
        setError(err.message || "خطایی در دریافت اطلاعات دوره‌ها رخ داد.");
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  return { courses, loading, error };
};

export default useCourses;
