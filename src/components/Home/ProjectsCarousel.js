import React, { useState, useEffect } from 'react';
import carousel_dots from "../../static/carousel_dots.svg";
import arrow from "../../static/back.svg";

const ImageCarousel = ({ boxes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = boxes.map((box) => box.img);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  // Function to handle going to the previous image
  const goToPrevious = () => {
    setCurrentIndex(prevIndex);
  };

  // Function to handle going to the next image
  const goToNext = () => {
    setCurrentIndex(nextIndex);
  };

  // Generate dots dynamically
  const renderDots = () => {
    const visibleImages = images.slice(0, 4);
  
    return visibleImages.map((img, index) => (
      <div
        key={index}
        className={index === currentIndex ? 'dot_blue' : 'dot_white'}
      ></div>
    ));
  };
  

  return (
    <div className="d-flex flex-column pt-4r align-itm-center p-relative"> 
      <div className="image-carousel">
        <div className="carousel-item previous">
          <img className='img_carousel_img' src={images[prevIndex]} alt="Previous" />
        </div>
        <div className="carousel-item current">
          <img className='img_carousel_img' src={images[currentIndex]} alt="Current" />
          <div className="text-white box-text">
            {/* Add your description here */}
          </div>
        </div>
        <div className="carousel-item next">
          <img className='img_carousel_img' src={images[nextIndex]} alt="Next" />
        </div>
      </div>
      <div className="carousel-dots">
      <div className='arrow_btn' onClick={goToPrevious}>
        <img src={arrow} className='slider_arrow' alt="Previous" />
      </div>
        {renderDots()}
        <div className='arrow_btn_right' onClick={goToNext}>
        <img src={arrow} className='slider_arrow' alt="Next" />
      </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
