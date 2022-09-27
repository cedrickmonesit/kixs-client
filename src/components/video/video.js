const Video = ({ url }) => {
  return (
    <video muted loop autoPlay>
      <source type="video/mp4" src={url} />
    </video>
  );
};

export default Video;
