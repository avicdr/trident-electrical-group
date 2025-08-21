import React, { useEffect } from "react";
import PageInfo from "../components/PageInfo";
import img_1 from "../static/gallery/g-1.png"
import img_2 from "../static/gallery/g-2.png"
import img_3 from "../static/gallery/g-3.png"
import img_4 from "../static/gallery/g-4.png"
import img_5 from "../static/gallery/g-5.png"
import img_6 from "../static/gallery/g-6.png"
import img_7 from "../static/gallery/g-7.png"
import img_9 from "../static/gallery/g-9.png"
import img_10 from "../static/gallery/g-10.png"

function Gallery() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <div className="d-flex justify-cont-center flex-column resp-mt-4r">
        <PageInfo title={"Home / Services"} />
        <div>
        <div className="top-text text-center d-flex flex-column align-itm-center justify-cont-center mt-3r mb-1r">
          <div className="text-sm font-eb fw-500 orange-color-main fw-bold mb-1r">
            @electricians
          </div>
          <div className={`text-lg font-eb fw-500 "blue-color-main" fw-bold w-80p`}>
            Our Projects
          </div>
          <div className="d-flex justify-cont-center flex-wrap">
        <div className="options blue-color-main text-btn">All</div>
        <div className="options blue-color-main text-btn">Residences</div>
        <div className="options blue-color-main text-btn">Industrial Objects</div>
        <div className="options blue-color-main text-btn">Offices</div>
        <div className="options blue-color-main text-btn">Retail Objects</div>
      </div>
          <div className="d-flex justify-cont-evenly resp-flex-column resp-align-center w-80p flex-wrap">
            <img src={img_1} className="insta-post my-1r"/>
            <img src={img_2} className="insta-post my-1r"/>
            <img src={img_3} className="insta-post my-1r"/>
            <img src={img_4} className="insta-post my-1r"/>
            <img src={img_6} className="insta-post my-1r"/>
            <img src={img_7} className="insta-post my-1r"/>
            <img src={img_9} className="insta-post my-1r"/>
            <img src={img_10} className="insta-post my-05r"/>
          </div>
          <div className="about-us text-btn fz-18px blue-color-main my-2r">View More</div>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Gallery;
