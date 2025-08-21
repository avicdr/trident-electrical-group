import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import bulb_1 from "../static/bulb_1.png"
import bulb_2 from "../static/bulb_2.png"
import bulb_3 from "../static/bulb_3.png"
import "../css/AliceCarousel.css"

const handleDragStart = (e) => e.preventDefault();

const AboutUsCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [itemsToShow, setItemsToShow] = useState(isMobile ? 1 : 3); // Display 3 items on larger screens

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setItemsToShow(isMobile ? 1 : 3); // Update the number of items to show on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const testimonialsData = [
    {
      id: 1,
      name: "Joie Laurel",
      position: "CEO",
      photo: bulb_1,
    },
    {
      id: 1,
      name: "Joie Laurel",
      position: "CEO",
      photo: bulb_2,
    },
    {
      id: 1,
      name: "Joie Laurel",
      position: "CEO",
      photo: bulb_3,
    },
  ];

  const testimonialPairs = testimonialsData.map((testimonial, index) => (
    <div className="testimonial-card" key={index}>
      <img
        src={testimonial.photo}
        onDragStart={handleDragStart}
        role="presentation"
        className="testimonial-avatar"
      />
      <div className="testimonial-name">{testimonial.name}</div>
      <div className="testimonial-position">{testimonial.position}</div>
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={testimonialPairs}
      infinite
      autoPlay
      autoPlayInterval={3000}
      responsive={{
        0: { items: 1 },
        768: { items: 3 }, // Display 3 items on larger screens
      }}
    />
  );
};

export default AboutUsCarousel;
