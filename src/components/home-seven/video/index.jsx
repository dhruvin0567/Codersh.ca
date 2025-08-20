import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../assets/images/v7/play-btn.webp";
import ShapeImg from "../../../assets/images/v7/shape.webp";
import VideoBg from "../../../assets/images/v7/video-bg.webp";
import FadeInUp from "../../animation/FadeInUp";

function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        <div className="aximo-section-title center bricolage-font">
          <h2>Nurturing a robust brand identity</h2>
        </div>
        <FadeInUp className="aximo-video-wrap2">
          <img src={VideoBg} alt="video bg" />
          <ModalVideo
            channel="youtube"
            youtube={{ autoplay: 0 }}
            isOpen={isOpen}
            videoId="7e90gBu4pas"
            onClose={() => setOpen(false)}
          />
          <button
            className="aximo-video-popupv7 video-init"
            onClick={() => setOpen(true)}
          >
            <img src={PlayBtnImg} alt="PlayBtnImg" />
            <div className="waves waves7 wave-1"></div>
            <div className="waves waves7 wave-2"></div>
            <div className="waves waves7 wave-3"></div>
          </button>

          <div className="aximo-video-shapev7">
            <img src={ShapeImg} alt="Shape " />
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default Video;
