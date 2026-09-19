import { useState, useEffect } from "react";
import getCourses from "../services/courseService";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadCourses();
  }, []);

  return {
    courses,
    error,
  };
};
export default useCourses;
