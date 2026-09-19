const TeamCard = ({ member, active, onClick }) => {
  return (
    <article
      className={`team-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="team-image">
        <img src={member.image} alt={member.name} />
      </div>

      <div className="team-content">
        <span className="team-role">{member.role}</span>

        <h3>{member.name}</h3>

        <p>{member.bio}</p>

        <div className="team-skills">
          {member.skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TeamCard;
