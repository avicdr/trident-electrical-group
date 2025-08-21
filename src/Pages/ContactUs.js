import React, { useEffect } from "react";
import PageInfo from "../components/PageInfo";

function ContactUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <PageInfo title={"Home / Contact Us"} />
      <div className="d-flex flex-column resp-flex-column-reverse">
        <div className="map-cont">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56997.704710913604!2d80.92385279999999!3d26.7649024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfb9613c01adf%3A0xc7fd9603219b5db0!2sBabasaheb%20Bhimrao%20Ambedkar%20University%20(A%20Central%20University)%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1693854029202!5m2!1sen!2sin"
            className="map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="details-container d-flex justify-cont-evenly">
          <div className="details-box">
            <div className="fw-bold color-black">Address:</div>
            <div>Electrician Company</div>
            <div>8494 Signal Hill Road Manassas,</div>
            <div>VA, 20110</div>
          </div>
          <div className="details-box">
            <div className="fw-bold color-black">Work Hours:</div>
            <div>Mon-Fri 08:00 AM - 05:00 PM</div>
            <div>Sat-Sun: Emergency only</div>
          </div>
          <div className="details-box">
            <div className="fw-bold color-black">Phone Numbers:</div>
            <div>1 (800) 765-43-21 (Appointments)</div>
            <div>1 (800) 765-43-22 (Office)</div>
          </div>
        </div>
      </div>
      <div className="contact-form w-80 mx-auto d-flex flex-column align-itm-center">
        <div className="why-us-sm">Contact Form</div>
        <h1 className="blue-color-main my-1r heading">Get In Touch With Us</h1>
        <div className="w-50p resp-w-100p text-center other-text">
          Are you stumped by a home wiring project or problem? Fill out the form
          with the details of your situation and we can come to your aid.
        </div>
        <div className="form w-70p resp-w-100p d-flex flex-column align-itm-center">
          <div className="w-100p">
            <input
              className="mb-1r first-input"
              type="text"
              required
              placeholder="Your Name *"
            />
          </div>
          <div className="d-flex w-100p resp-flex-column">
            <input
              type="text"
              className="other-inputs mr-05r"
              required
              placeholder="Your e-mail address *"
            />
            <input
              type="text"
              className="other-inputs"
              required
              placeholder="Your phone number *"
            />
          </div>
          <textarea cols={30} rows={10} />
          <div className="text-center other-text">
            All Electrical work must be done by a qualified licensed
            electrician.
          </div>
          <div className="orng-btn">Contact Us</div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
