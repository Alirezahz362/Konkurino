import { useEffect, useState } from "react";

import getTeam from "../services/teamService";

const useTeam = () => {
  const [team, setTeam] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await getTeam();

        setTeam(data);
      } catch (err) {
        setError(err.message);
      }
    };

    loadTeam();
  }, []);

  return {
    team,

    error,
  };
};

export default useTeam;
