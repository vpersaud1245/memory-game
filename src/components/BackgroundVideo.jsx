import backgroundVideo from "../assets/images/bg.mp4";
import "../styles/backgroundVideo.css";
export default function BackgroundVideo() {
  return (
    <video
      src={backgroundVideo}
      autoPlay
      loop
      muted
      className="background__video"
    ></video>
  );
}
