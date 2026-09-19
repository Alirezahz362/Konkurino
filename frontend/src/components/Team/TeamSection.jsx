import { useState } from "react";
import TeamCard from "./TeamCard";
import useTeam from "../../hooks/useTeam";
const TeamSection = () => {
  const [activeId, setActiveId] = useState(1);
  const { team, error } = useTeam();

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>تیم اساتید و مشاوران ما</h2>

          <p>متخصصانی که در مسیر یادگیری همراه شما هستند</p>
        </div>

        <div className="team-wrapper">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              member={member}
              active={activeId === member.id}
              onClick={() => setActiveId(member.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
