import SingleTeamProgressbar from "./SingleTeamProgressbar";

function SingleTeamSkill() {
  return (
    <div className="section aximo-section-padding3 pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="aximo-team-setails">
              <h3>Qualifications:</h3>
              <ul>
                <li>
                  <span>Educational Background:</span> A degree in a relevant
                  field, such as graphic design & UX.
                </li>
                <li>
                  <span>Industry Experience:</span> Extensive experience in the
                  design industry 15 years & can be crucial.
                </li>
                <li>
                  <span>Business Acumen:</span> A solid understanding of
                  business principles, marketing, and finance.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aximo-team-setails">
              <h3>Attributes:</h3>
              <ul>
                <li>
                  <span>Visionary:</span> A successful CEO in a design agency
                  should have a clear vision.
                </li>
                <li>
                  <span>Strong Communication Skills: </span> A effective
                  communication is essential for interaction.
                </li>
                <li>
                  <span>Business Acumen:</span> A strong understanding of
                  business principles, finance, and marketing.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="aximo-team-setails">
              <h3>Professional Skills:</h3>
              <div className="aximo-skillbar-wrapper">
                <SingleTeamProgressbar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTeamSkill;
