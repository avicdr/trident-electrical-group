import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img_1 from "../../static/insta_1.png";
import img_2 from "../../static/insta_2.png";
import img_3 from "../../static/insta_3.png";
import img_4 from "../../static/insta_4.png";

function Instagram({ mode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const images = [img_1, img_2, img_3, img_4];

  return (
    <>
      {isMobile ? (
        <div className="instagram d-flex flex-column py-2r w-100">
          <div className="top-text text-center d-flex flex-column align-itm-center justify-cont-center mb-1r">
            <div
              className={`text-lg font-eb fw-500 mb-1r ${
                mode === "light" ? "blue-color-main" : "color-white-dm"
              } fw-bold w-80p`}
            >
              Follow us on Instagram
            </div>
            <div className="text-sm font-eb fw-500 orange-color-main fw-bol">
              <a
                href="https://www.instagram.com/trident.groupltd"
                target="_blank"
                className="link-a-head"
              >
                @trident.groupltd
              </a>
            </div>
          </div>
          <AliceCarousel
            mouseTracking
            items={images.map((image, index) => (
              <div
                key={index}
                className="d-flex pt-2r justify-cont-evenly resp-flex-column resp-align-center"
              >
                <img
                  src={image}
                  className="insta-post"
                  alt={`Instagram Post ${index + 1}`}
                />
              </div>
            ))}
            infinite
            autoPlay
            autoPlayInterval={3000}
            responsive={{
              0: { items: 1 }, // Mobile view: 1 image at a time
            }}
          />
        </div>
      ) : (
        <div>
          <div className="instagram d-flex flex-column py-3r w-100">
            <div className="top-text text-center d-flex flex-column align-itm-center justify-cont-center mb-1r">
              <div
                className={`text-lg font-eb fw-500 ${
                  mode === "light" ? "blue-color-main" : "color-white-dm"
                } fw-bold w-80p mb-1r`}
              >
                Follow us on Instagram
              </div>
              <div className="text-sm font-eb fw-500 orange-color-main fw-bold">
                <a
                  href="https://www.instagram.com/trident.groupltd"
                  target="_blank"
                  className="link-a-head"
                >
                  @trident.groupltd
                </a>
              </div>
              <div className="d-flex py-2r justify-cont-evenly resp-flex-column resp-align-center">
                <a
                  href="https://www.instagram.com/trident.groupltd/"
                  className="insta-post"
                  target="_blank"
                >
                  <img src={img_1} className="w-100p" />
                </a>
                <a
                  href="https://www.instagram.com/trident.groupltd/"
                  className="insta-post"
                  target="_blank"
                >
                  <img src={img_2} className="w-100p" />
                </a>
                <a
                  href="https://www.instagram.com/trident.groupltd/"
                  className="insta-post"
                  target="_blank"
                >
                  <img src={img_3} className="w-100p" />
                </a>
                <a
                  href="https://www.instagram.com/trident.groupltd/"
                  className="insta-post"
                  target="_blank"
                >
                  <img src={img_4} className="w-100p" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Instagram;
