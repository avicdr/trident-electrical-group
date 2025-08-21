import React, { useState } from "react";

function ServicesCard({
  imgSide,
  img,
  darkImg,
  mode,
  textArray,
  heading,
  element,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  return (
    <>
      {isMobile ? (
        <div
          className={`${
            mode === "light" ? "service-card" : "service-card-dark"
          } d-flex my-2r
            resp-flex-column br-15
          `}
        >
          <div className="d-flex">
            <img
              src={darkImg ? (mode === "light" ? img : darkImg) : img}
              className="img-w55 resp-neg-half-lr"
            />
            <h1
              className={`orange-color-main resp-fz-20px resp-text-center resp-mt-1r my-1r w-100p text-center
            `}
            >
              {heading}
            </h1>
          </div>
          <div className="services-text-container">
            {textArray.map((text) => (
              <li
                className={`services-list-item ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
                key={text}
              >
                {text}
              </li>
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`${
            mode === "light" ? "service-card" : "service-card-dark"
          } d-flex my-2r br-15 ${
            imgSide === "right"
              ? "justify-cont-around resp-flex-column-reverse"
              : "resp-flex-column"
          }`}
        >
          <div
            className="d-flex align-itm-center justify-cont-around resp-w-100p"
            style={{
              display: imgSide === "left" ? "" : "none",
              width: element !== 3 ? "30%" : "40%",
            }}
          >
            <img
              src={darkImg ? (mode === "light" ? img : darkImg) : img}
              className="img-w55"
            />
          </div>
          <div className="services-text-container">
            <h1
              className={`orange-color-main resp-fz-20px resp-text-center resp-mt-1r ${
                imgSide === "right" ? "mb-1r" : "my-1r"
              }`}
            >
              {heading}
            </h1>
            {textArray.map((text) => (
              <li
                className={`services-list-item ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
                key={text}
              >
                {text}
              </li>
            ))}
          </div>

          <div
            className="d-flex align-itm-center justify-cont-end resp-w-100p resp-justify-center"
            style={{ display: imgSide === "right" ? "" : "none", width: "30%" }}
          >
            <img
              src={darkImg ? (mode === "light" ? img : darkImg) : img}
              className="img-w55"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ServicesCard;
