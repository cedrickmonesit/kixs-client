import "./herovideo.scss";
import Video from "../video/video";
import url from "../../assets/video/kixs-video-wall.mp4";
import kixsLogo from "../../assets/images/kixs-hero-logo.png";

const HeroVideo = () => {
  return (
    <div className="hero-video">
      <img className="hero-video__kixs-logo" src={kixsLogo} alt="kixs logo" />
      <Video url={url} />
    </div>
  );
};

export default HeroVideo;
