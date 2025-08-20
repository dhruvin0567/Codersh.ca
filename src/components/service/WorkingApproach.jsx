import Single2Img from "../../assets/images/service/service-single2.webp";
import Star2Img from "../../assets/images/v1/star2.webp";
import FadeInRight from "../animation/FadeInRight";

const workingApprochData = [
  {
    id: crypto.randomUUID(),
    title: "Research and Competitor Analysis",
    description:
      "Start by understanding the target audience and their needs and analyze similar products identify best practices of differentiation.",
    icon: "icon-search",
  },
  {
    id: crypto.randomUUID(),
    title: "User Interface Implementation",
    description:
      "Translate the finalized UI design into actual code or design, elements, assets, depending on the platform (web, mobile, etc.).",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Launch and Post-Launch",
    description:
      "Prepare for the product's launch, and gather user feedback after the product is live and make iterative improvements user data.",
    icon: "icon-start-up",
  },
];

function WorkingApproach() {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-1 order-lg-1">
        <FadeInRight className="aximo-service-details-thumb2 ">
          <img src={Single2Img} alt="service" />
        </FadeInRight>
      </div>
      <div className="col-lg-6">
        <div className="aximo-default-content">
          <h2>
            <span className="aximo-title-animation">
              Our Approach
              <span className="aximo-title-icon">
                <img src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
          <p>
            The working approach for UI/UX design involves a series of steps and
            methodologies to ensure that the user interface and user experience.
            Here's a typical approach to UI/UX design:
          </p>
        </div>
        <div className="aximo-our-approach">
          {workingApprochData.map((item) => (
            <div className="aximo-iconbox-wrap5" key={item.id}>
              <div className="aximo-iconbox-icon5">
                <i className={`${item.icon}`}></i>
              </div>
              <div className="aximo-iconbox-data5">
                <h3>{item.title}:</h3>
                <div className="aximo-user-interface">
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkingApproach;
