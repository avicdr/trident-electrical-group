import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import double_qoute from "../../static/qoutes_blue.svg";
import review1 from "../../static/review_1.png";
import stars from "../../static/stars.svg";

const handleDragStart = (e) => e.preventDefault();

const TestimonialCarousel = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // Update the isMobile state based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      // Cleanup the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const testimonialsData = [
    {
      id: 1,
      name: "Joie Laurel",
      photo: review1,
      post: "CEO, NoonBrew",
      text: "Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis.",
    },
    {
      id: 2,
      name: "John Harbert",
      photo: review1, // Replace with the actual photo source
      post: "CEO, NoonBrew",
      text: "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
    },
    {
      id: 2,
      name: "John Harbert",
      post: "CEO, NoonBrew",
      photo: review1, // Replace with the actual photo source
      text: "They are able to help a startup like mine scale and are very responsive to all of our unique needs.",
    },
    // // Add more testimonials as needed
  ];

  const testimonialPairs = testimonialsData.map((testimonial, index) => (
    <div className="testimonial-item" key={index}>
      <div className="review-box bg-white w-80p border-rounded p-105r">
        <img src={double_qoute} />
        <div className="mt-2r testimonial-text">{testimonial.text}</div>
        <div className="d-flex mt-2r align-itm-center">
          <img src={testimonial.photo} onDragStart={handleDragStart} role="presentation" className="pfp mr-2r" />
          <div className="d-flex flex-column">
            <div className="test-name">{testimonial.name}</div>
            <div className="testimonial-text-car">{testimonial.post}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="mt-3r">
      <AliceCarousel
      mouseTracking
      items={testimonialPairs}
      infinite
      autoPlay
      autoPlayInterval={3000}
      responsive={{
        0: { items: 1 }, // Mobile view: 1 item at a time
        768: { items: 2 }, // Larger screens: 2 items at a time
      }}
    />
    </div>
  );
};

export default TestimonialCarousel;
