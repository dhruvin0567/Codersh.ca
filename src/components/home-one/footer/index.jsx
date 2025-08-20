import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";

function Footer() {
  return (
    <footer className="aximo-footer-section dark-bg">
      <div className="container">
        <div className="aximo-footer-top aximo-section-padding">
          <div className="row">
            <div className="col-lg-7">
              <FooterContent />
            </div>
            <div className="col-lg-5">
              <div className="aximo-form-wrap">
                <p
                  className="light-text"
                  style={{
                    fontSize: "24px",
                    marginBottom: "24px",
                    fontFamily: "syne",
                    fontWeight: "bolder",
                  }}
                >
                  Send us a message
                </p>
                <MessageForm />
              </div>
            </div>
          </div>
        </div>
        <div className="aximo-footer-bottom">
          <div className="row">
            <FooterBottom />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
