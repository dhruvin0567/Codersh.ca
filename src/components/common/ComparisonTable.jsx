import Group1 from "../../assets/images/icon/check-mark.svg";
import Group2 from "../../assets/images/images2/Group_8_1.svg";
import Group3 from "../../assets/images/icon/alert-triangle.svg";
import { Link } from "react-router-dom";

function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Quick to start",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group3,
        text: "Varies",
        iconSize: { desktop: 25, mobile: 20 },
      },
      agencies: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
    {
      feature: "No long-term commitment",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
    {
      feature: "Highly organized workflow",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
    {
      feature: "Scalable team support",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
    {
      feature: "Expert senior-level resources",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group3,
        text: "Limited",
        iconSize: { desktop: 25, mobile: 20 },
      },
      agencies: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
    {
      feature: "Fast response time (~20 min)",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group3,
        text: "Slower",
        iconSize: { desktop: 25, mobile: 20 },
      },
    },
    {
      feature: "Unlimited revisions",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group3,
        text: "Limited",
        iconSize: { desktop: 25, mobile: 20 },
      },
    },
    {
      feature: "Comprehensive handover documentation",
      codersh: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
      freelancers: {
        icon: Group2,
        text: "No",
        iconSize: { desktop: 18, mobile: 16 },
      },
      agencies: {
        icon: Group1,
        text: "Yes",
        iconSize: { desktop: 18, mobile: 16 },
      },
    },
  ];

  return (
    <div>
      <div className="comparison-section">
        {/* Desktop View (hidden on mobile) */}
        <div className="comparing-us p-5 d-none d-md-block">
          <div className="container">
            <div
              className="heading-wrapper text-center mx-auto"
              style={{ maxWidth: "800px" }}
            >
              <h2 className="mb-4">Who is Codersh Web Services for?</h2>
              <p className="mb-5" style={{ fontSize: "21px" }}>
                Fast-growing brands that need flexible, on-demand web
                development support. Whether you need just a few hours a month
                or dedicated resources for major projects, we provide expert
                solutions-without long-term commitments.
              </p>
            </div>

            <div className="table-responsive">
              <table className="table comparison-table">
                <thead>
                  <tr>
                    <th className="text-left p-3">Feature</th>
                    <th className="text-center p-3">Codersh Web Services</th>
                    <th className="text-center p-3">Freelancers</th>
                    <th className="text-center p-3">
                      Traditional Web Agencies
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((item, index) => (
                    <tr key={index}>
                      <td className="text-left">{item.feature}</td>
                      <td className="text-center p-2">
                        <div className="d-flex justify-content-center align-items-center">
                          <span
                            className="prioratize"
                            style={{
                              backgroundColor: "#bff747",
                              padding: "5px 15px",
                              borderRadius: "20px",
                            }}
                          >
                            <img
                              src={item.codersh.icon}
                              alt=""
                              width={item.codersh.iconSize.desktop}
                              className="me-2"
                            />
                            {item.codersh.text}
                          </span>
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src={item.freelancers.icon}
                            alt=""
                            width={item.freelancers.iconSize.desktop}
                            className="me-2"
                          />
                          {item.freelancers.text}
                        </div>
                      </td>
                      <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                          <img
                            src={item.agencies.icon}
                            alt=""
                            width={item.agencies.iconSize.desktop}
                            className="me-2"
                          />
                          {item.agencies.text}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="heading-wrapper text-center mx-auto mt-4"
              style={{ maxWidth: "800px" }}
            >
              <p style={{ fontSize: "21px" }}>
                At <strong>Codersh Web Services</strong>, we blend the agility
                of freelancers with the expertise of agencies - delivering the
                best of both worlds with unique benefits that set us apart.
                <strong>
                  <Link to="/contact-us" style={{ color: "black" }}>
                    Get started for FREE!
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Mobile View (hidden on desktop) */}
        <div className="comparing-us p-3 d-md-none">
          <div className="container">
            <div
              className="heading-wrapper text-center mx-auto"
              style={{ maxWidth: "800px" }}
            >
              <h2 className="mb-3">Who is Codersh Web Services for?</h2>
              <p className="mb-4">
                Fast-growing brands that need flexible, on-demand web
                development support. Whether you need just a few hours a month
                or dedicated resources for major projects, we provide expert
                solutions-without long-term commitments.
              </p>
            </div>

            <div className="mobile-comparison">
              {comparisonData.map((item, index) => (
                <div
                  key={index}
                  className="comparison-card mb-3 p-3 border rounded"
                >
                  <h5 className="text-center mb-3 fw-bold">{item.feature}</h5>
                  <div className="comparison-row d-flex justify-content-between align-items-center mb-2">
                    <span>Codersh</span>
                    <div className="d-flex align-items-center">
                      <span
                        className="prioratize"
                        style={{
                          backgroundColor: "#bff747",
                          padding: "5px 15px",
                          borderRadius: "20px",
                        }}
                      >
                        <img
                          src={item.codersh.icon}
                          alt=""
                          width={item.codersh.iconSize.mobile}
                          className="me-1"
                        />
                        {item.codersh.text}
                      </span>
                    </div>
                  </div>
                  <div className="comparison-row d-flex justify-content-between align-items-center mb-2">
                    <span>Freelancers</span>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.freelancers.icon}
                        alt=""
                        width={item.freelancers.iconSize.mobile}
                        className="me-1"
                      />
                      <span>{item.freelancers.text}</span>
                    </div>
                  </div>
                  <div className="comparison-row d-flex justify-content-between align-items-center">
                    <span>Agencies</span>
                    <div className="d-flex align-items-center">
                      <img
                        src={item.agencies.icon}
                        alt=""
                        width={item.agencies.iconSize.mobile}
                        className="me-1"
                      />
                      <span>{item.agencies.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="heading-wrapper text-center mx-auto mt-4"
              style={{ maxWidth: "800px" }}
            >
              <p>
                At <strong>Codersh Web Services</strong>, we blend the agility
                of freelancers with the expertise of agencies - delivering the
                best of both worlds with unique benefits that set us apart.
                <strong>
                  <Link to="/contact-us" style={{ color: "black" }}>
                    Get started for FREE!
                  </Link>
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonTable;
