import React from "react";
import img from "../static/gallery-card-1.png";
function GalleryItem() {
  return (
    <div className="mh-380 w-min">
      <div className="mx-1r p-relative">
        <img src={img} />
        <div className="textBox">
          <div className="text-head my-1r">Electrical Repairs</div>
          <div className="other-text">
            Electrical repairs should always be handled by a professional
            electrician.
          </div>
          <div className="read-more-btn my-1r">Read More</div>
        </div>
      </div>
    </div>
  );
}

export default GalleryItem;
