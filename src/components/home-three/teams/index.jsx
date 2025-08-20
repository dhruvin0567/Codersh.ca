import { Link } from "react-router-dom";
import Team5Img from "../../../assets/images/team/team5.webp";
import Team6Img from "../../../assets/images/team/team6.webp";
import Team7Img from "../../../assets/images/team/team7.webp";
import StarShapeHalfImg from "../../../assets/images/v3/star-shape-half2.webp";
import FadeInStagger from "../../animation/FadeInStagger";
import TeamCard from "./TeamCard";

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Adrew Smith",
    designation: "Senior SEO Manager",
    img: Team5Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Jones Jack",
    designation: "Strategy Director",
    img: Team6Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Marsal Straw",
    designation: "SEO Content Writer",
    img: Team7Img,
  },
];

function Teams() {
  return (
    <div className="section aximo-section-padding3 position-relative">
      <div className="container">
        <div className="aximo-section-title familjen-grotesk">
          <div className="row">
            <div className="col-lg-6">
              <h2>Increase revenue with custom SEO</h2>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-end">
              <div className="aximo-title-btn">
                <Link className="aximo-default-btn pill yellow-btn" to="/team">
                  <span className="aximo-label-up">Meet our team</span>
                  <span className="aximo-label-up">Meet our team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {teamsData.map((team, index) => (
            <FadeInStagger
              index={index}
              className="col-xl-4 col-md-6"
              key={team.id}
            >
              <TeamCard team={team} />
            </FadeInStagger>
          ))}
        </div>
      </div>
      <div className="aximo-star-shape-half ">
        <img src={StarShapeHalfImg} alt="StarShapeHalfImg" />
      </div>
    </div>
  );
}

export default Teams;
