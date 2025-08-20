import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayBtnImg from "../../../assets/images/v5/play-btn.webp";
import Shape2Img from "../../../assets/images/v5/shape2.webp";
import VideoBg from "../../../assets/images/v5/video-bg.webp";
import FadeInUp from "../../animation/FadeInUp";

function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <FadeInUp className="aximo-video-section2 extra-side-margin">
      <img src={VideoBg} alt="VideoBg" />
      <ModalVideo
        channel="youtube"
        youtube={{ autoplay: 0 }}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        onClose={() => setOpen(false)}
      />

      <button
        className="aximo-video-popup play-btn-size video-init"
        onClick={() => setOpen(true)}
      >
        <img src={PlayBtnImg} alt="PlayBtnImg" />
        <div className="waves wave-1"></div>
        <div className="waves wave-2"></div>
        <div className="waves wave-3"></div>
      </button>
      <div className="aximo-video-shape">
        <img src={Shape2Img} alt="Shape2Img" />
      </div>
    </FadeInUp>
  );
}

export default Video;
