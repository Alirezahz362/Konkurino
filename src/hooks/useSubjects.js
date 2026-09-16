import { useEffect, useState } from "react";
import getSubjects from "../services/subjectService";

const useSubjects = (selectedMajor) => {
  const [subjects, setSubjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadSubjects = async () => {
      try {
        const data = await getSubjects();

        const filteredSubjects = data.filter(
          (subject) => subject.major === selectedMajor,
        );

        setSubjects(filteredSubjects);
      } catch (err) {
        setError(err.message);
      }
    };

    if (selectedMajor) {
      loadSubjects();
    }
  }, [selectedMajor]);

  return {
    subjects,
    error,
  };
};

export default useSubjects;
