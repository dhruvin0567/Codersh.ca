import { useState } from "react";
import ModalVideo from "react-modal-video";
import PlayImg from "../../../assets/images/v2/play-btn.webp";
import VideoBg from "../../../assets/images/v2/video-bg.webp";

function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="aximo-video-section extra-side-margin">
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
        <img src={PlayImg} alt="PlayImg" />
        <div className="waves wave-1"></div>
        <div className="waves wave-2"></div>
        <div className="waves wave-3"></div>
      </button>
    </div>
  );
}

export default Video;
