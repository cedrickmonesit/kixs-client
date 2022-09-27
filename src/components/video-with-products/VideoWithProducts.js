import "./videowithproducts.scss";
import Video from "../video/video";
import MultiRowCarousel from "../multi-row-carousel/MultiRowCarousel";

const VideoWithProducts = ({ url, items, title }) => {
  console.log(items);
  return (
    <section>
      <div className="video-with-products__title-container">
        <p className="video-with-products__title">{title}</p>
      </div>
      <div className="video-with-products">
        <div className="video-with-products__container">
          <div className="video-with-products__video">
            <Video url={url} />
          </div>
          <div className="video-with-products__products">
            <MultiRowCarousel items={items} showContent={false} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithProducts;
