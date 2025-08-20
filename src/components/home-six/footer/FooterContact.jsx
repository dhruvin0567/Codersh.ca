import {
  FadeInStaggerTwo,
  FadeInStaggerTwoChildren,
} from "../../animation/FadeInStaggerTwo";

function FooterContact() {
  return (
    <>
      <div className="aximo-section-title center playfair pb-0 light max-width-xl">
        <h2>Want to decorate your dream space with us?</h2>
      </div>
      <FadeInStaggerTwo className="aximo-footer-info-wrap">
        <FadeInStaggerTwoChildren>
          <a className="aximo-footer-info" href="mailto:mthemeus@gmail.com">
            mthemeus@gmail.com
          </a>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <a className="aximo-footer-info" href="tel:+088-234-684900">
            +088-234-684900
          </a>
        </FadeInStaggerTwoChildren>
        <FadeInStaggerTwoChildren>
          <a className="aximo-footer-info" href="#">
            Haward Street,10203 USA
          </a>
        </FadeInStaggerTwoChildren>
      </FadeInStaggerTwo>
    </>
  );
}

export default FooterContact;
