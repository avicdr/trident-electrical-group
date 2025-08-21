import React, { useState } from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import double_qoute from "../../static/qoutes_blue.svg";
import pfp from "../../static/pfp.jpeg";

function Clients() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  return (
    <>
      {isMobile ? (
        <>
          <h2 className="text-lg font-eb fw-500 color-white-dm fw-bold text-center">
            What Our Clients Say
          </h2>
          <TestimonialCarousel />
        </>
      ) : (
        <div>
          <h2 className="text-lg font-eb fw-500 color-white-dm fw-bold text-center">
            What Our Clients Say
          </h2>
          <div className="d-flex justify-cont-center mt-3r">
            <div className="review-box bg-white w-20p border-rounded p-105r">
              <img src={double_qoute} />
              <div className="mt-2r testimonial-text">
                "They are able to help a startup like mine scale and are very
                responsive to all of our unique needs."
              </div>
              <div className="d-flex mt-2r align-itm-center">
                <img src={pfp} className="pfp mr-2r" />
                <div className="d-flex flex-column">
                  <div className="test-name">John Harbert</div>
                  <div className="testimonial-text-car">CEO, NoonBrew</div>
                </div>
              </div>
            </div>
            <div className="review-box bg-white w-20p border-rounded p-105r">
              <img src={double_qoute} />
              <div className="mt-2r testimonial-text">
                "They are able to help a startup like mine scale and are very
                responsive to all of our unique needs."
              </div>
              <div className="d-flex mt-2r align-itm-center">
                <img src={pfp} className="pfp mr-2r" />
                <div className="d-flex flex-column">
                  <div className="test-name">John Harbert</div>
                  <div className="testimonial-text-car">CEO, NoonBrew</div>
                </div>
              </div>
            </div>
            <div className="review-box bg-white w-20p border-rounded p-105r">
              <img src={double_qoute} />
              <div className="mt-2r testimonial-text">
                "They are able to help a startup like mine scale and are very
                responsive to all of our unique needs."
              </div>
              <div className="d-flex mt-2r align-itm-center">
                <img src={pfp} className="pfp mr-2r" />
                <div className="d-flex flex-column">
                  <div className="test-name">John Harbert</div>
                  <div className="testimonial-text-car">CEO, NoonBrew</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Clients;
