import { Link } from "react-router-dom";

function TeamCard({ team: { name, designation, img } }) {
  return (
    <div className="aximo-team-wrap2">
      <div className="aximo-team-thumb2">
        <img src={img} alt={name} />
      </div>
      <div className="aximo-team-data2">
        <Link to="/single-team">
          <h4>{name}</h4>
        </Link>
        <p>{designation}</p>
      </div>
    </div>
  );
}

export default TeamCard;
