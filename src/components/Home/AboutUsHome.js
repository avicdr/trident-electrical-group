import React, { useState, useRef, useEffect } from "react";
import about_img from "../../static/aboutImg.jpg";
import nic_img from "../../static/nic.png";
import partner_2 from "../../static/chas_logo.png";
import nic_dark from "../../static/nic_dark.svg";
import rightArrow from "../../static/right_arrow.svg";
import phone from "../../static/phone-call.svg";
import mail from "../../static/mail.svg";
import emailjs from "emailjs-com";
import insta from "../../static/insta_logo.svg";
import form from "../../static/form.svg";
import rated_people from "../../static/rated_people.svg";

function AboutUsHome({ mode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isFormOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);

  const toggleForm = () => {
    setFormOpen(!isFormOpen);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Get the form element
    const form = e.target;
    // console.log(form)
    // Use emailjs to send the email
    emailjs
      .sendForm("gmail", "template_kfysmyd", form, "BGjdAyJX5G7Kjgtwq")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setTimeout(() => {
      setFormOpen(!isFormOpen);
    }, 1500);
  };

  const toggle = () => {
    toggleForm();
    // Your query submission logic here
  };

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setFormOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="m-auto w-50p resp-w-100p contact-box mt-05r">
        <div
          className={`bg-blue-cw contact-query w-max-cont mt-1r fz-28px orange-color-main ${
            mode !== "dark" ? "light_mode_text bg-none" : ""
          }`}
        >
          Contact us
        </div>
        <div className="w-auto d-flex pb-2r resp-py-1r resp-w-100p contact-org-box justify-cont-between">
          <div className="d-flex resp-w-90p resp-ml-0 ml-3r flex-wrap resp-flex-column resp-align-center">
            {isMobile ? (
              <>
                <div className="d-flex flex-column">
                  <div className="d-flex align-itm-center justify-cont-left contact-info-box">
                    <div className="display-text d-flex align-itms-center resp-mx-1r w-max fz-35px">
                      <img
                        src={phone}
                        className={`icon resp-mt-1r-mb-0r ${
                          mode !== "dark" ? "light_mode_icon" : ""
                        }`}
                        alt="Mail"
                      />
                    </div>
                    <div
                      className={`info-text resp-mt-1r-mb-0r ${
                        mode !== "dark" ? "light_mode_text" : ""
                      }`}
                    >
                      <a href="tel:+02087982049" className="link-a">
                        0208 798 2049
                      </a>
                    </div>
                  </div>
                  <div className="d-flex contact-info-box align-itm-center justify-cont-left justify-cont-center">
                    <div className="display-text d-flex align-itms-center resp-mx-1r w-max fz-35px">
                      <img
                        src={mail}
                        className={`icon resp-mt-1r-mb-0r mail_icon ${
                          mode !== "dark" ? "light_mode_icon" : ""
                        }`}
                        alt="Phone"
                      />
                    </div>
                    <div
                      className={`info-text resp-mt-1r-mb-0r ${
                        mode !== "dark" ? "light_mode_text" : ""
                      }`}
                    >
                      <a
                        href="mailto:info@tridentelectricalgroup.com"
                        className="link-a"
                      >
                        info@tridentelectricalgroup.com
                      </a>
                    </div>
                  </div>
                  <div className="d-flex align-itm-center justify-cont-left resp-justify-content-left">
                    <div className="d-flex contact-info-box justify-cont-left">
                      <div className="d-flex align-itm-center justify-cont-center">
                        <div
                          className={`display-text d-flex align-itms-center mr-05r fz-35px`}
                        >
                          <img
                            src={insta}
                            className={`icon insta ${
                              mode !== "dark" ? "light_mode_icon" : ""
                            }`}
                            alt="Phone"
                          />
                        </div>
                        <div className="info-text">
                          <a
                            href="https://www.instagram.com/trident.groupltd"
                            target="_blank"
                            className={`link-a ${
                              mode !== "dark" ? "light_mode_text" : ""
                            }`}
                          >
                            @trident.groupltd
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-itm-center justify-cont-left resp-justify-content-left justify-cont-center">
                    <div className="d-flex submit_query contact-info-box justify-cont-left">
                      <div className="d-flex align-itm-center">
                        <div
                          className={`display-text d-flex align-itms-center fz-35px`}
                        >
                          <img
                            src={form}
                            className={`icon form-icon ${
                              mode !== "dark" ? "light_mode_icon" : ""
                            }`}
                            alt="Phone"
                          />
                        </div>
                        <button
                          className={`get_estimate_button w-100p  ask_query_btn ${
                            mode === "light" ? "" : ""
                          }`}
                          onClick={toggle}
                        >
                          Submit a Query &nbsp;{" "}
                          <img src={rightArrow} alt="Arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="d-flex flex-column">
                  <div className="d-flex mr-3r">
                    <div className="d-flex align-itm-center">
                      <div
                        className={`display-text d-flex align-itms-center mr-1r fz-35px `}
                      >
                        <img
                          src={phone}
                          className={`icon ${
                            mode !== "dark" ? "light_mode_icon" : ""
                          }`}
                          alt="Mail"
                        />
                      </div>
                      <div className="info-text">
                        <a
                          href="tel:+02087982049"
                          className={`link-a ${
                            mode !== "dark" ? "light_mode_text" : ""
                          }`}
                        >
                          0208 798 2049
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mr-3r">
                    <div className="d-flex align-itm-center">
                      <div
                        className={`display-text d-flex align-itms-center mr-1r fz-35px`}
                      >
                        <img
                          src={insta}
                          className={`icon insta ${
                            mode !== "dark" ? "light_mode_icon" : ""
                          }`}
                          alt="Phone"
                        />
                      </div>
                      <div className="info-text">
                        <a
                          href="https://www.instagram.com/trident.groupltd"
                          target="_blank"
                          className={`link-a ${
                            mode !== "dark" ? "light_mode_text" : ""
                          }`}
                        >
                          @trident.groupltd
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <div className="d-flex mr-3r">
                    <div className="d-flex align-itm-center">
                      <div
                        className={`display-text d-flex align-itms-center mr-1r fz-35px`}
                      >
                        <img
                          src={mail}
                          className={`icon mail_icon ${
                            mode !== "dark" ? "light_mode_icon" : ""
                          }`}
                          alt="Phone"
                        />
                      </div>
                      <div className="info-text">
                        <a
                          href="mailto:info@tridentelectricalgroup.com"
                          className={`link-a ${
                            mode !== "dark" ? "light_mode_text" : ""
                          }`}
                        >
                          info@tridentelectricalgroup.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="d-flex align-itm-center">
                      <div
                        className={`display-text d-flex align-itms-center mr-1r fz-35px`}
                      >
                        <img
                          src={form}
                          className={`icon form-icon ${
                            mode !== "dark" ? "light_mode_icon" : ""
                          }`}
                          alt="Phone"
                        />
                      </div>
                      <button
                        className={`get_estimate_button w-100p ask_query_btn ${
                          mode === "light" ? "light_mode_text" : ""
                        }`}
                        onClick={toggle}
                      >
                        Submit a Query
                        <img src={rightArrow} alt="Arrow" className="button-arrow"/>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
            <div id="about" />
          </div>
        </div>
      </div>
      <div className="about-us p-relative pt-6re my-2r w-80 m-auto d-flex justify-cont-around resp-flex-column-reverse">
        <div className="w-40p resp-w-100p resp-align-center d-flex flex-column">
          <h3 className="orange-color-main fz-28px">About Us</h3>
          <h1
            className={`blue-color-main resp-fz-20px resp-text-center about-heading ${
              mode === "light" ? "" : "color-white-dm"
            }`}
          >
            Outstanding Residential & Commercial Services
          </h1>
          <div
            className={`${
              mode === "light" ? "light-text" : "text-ccc"
            } resp-text-center`}
          >
            Trident Electrical Group is a company that carries out electrical
            installations as well as ongoing maintenance. We take pride in all
            work that we undertake ensuring customer satisfaction every time.
          </div>
          <div className="d-flex align-itm-center">
            <img
              src={mode === "light" ? nic_img : nic_dark}
              className="left-about-img my-2r partner_1"
              alt="NIC"
            />
            <img
              src={partner_2}
              className="left-about-img my-2r partner_2"
              alt="Partner"
            />
          </div>
          <div>
            <div className="orange-color-main fz-28px">
              Check out our reviews on
            </div>
            <div className="rated-container">
              <a
                href="https://www.ratedpeople.com/profile/trident-electrical-group-"
                target="_blank"
              >
                <img src={rated_people} className="rated-people-img" />
              </a>
            </div>
          </div>

          {isFormOpen && (
            <div className="form-container" ref={formRef}>
              <div>
                <button onClick={toggleForm} className="close-button">
                  X
                </button>
                <div className="font-poppins font-bold form-heading blue-color-main">
                  Get Your Free Consultation
                </div>
                <div className="font-poppins font-bold form-heading orange-color-main">
                  Contact Us
                </div>
                <form onSubmit={sendEmail}>
                  {/* <div className="form-group"> */}
                  <input
                    type="text"
                    className="form-control form-input"
                    id="name"
                    name="name"
                    placeholder="Name*"
                  />
                  {/* </div> */}
                  {/* <div className="form-group"> */}
                  <input
                    type="text"
                    className="form-control form-input"
                    id="email"
                    name="email"
                    placeholder="Email*"
                  />
                  {/* </div> */}
                  {/* <div className="form-group"> */}
                  <input
                    type="text"
                    className="form-control form-input"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                  />
                  {/* </div> */}
                  {/* <div className="form-group"> */}
                  <textarea
                    rows={5}
                    columns={129}
                    placeholder="Description"
                    className="form-input"
                    id="description"
                    name="description"
                  />
                  {/* </div> */}
                  <div className="info-giving">
                    Fields marked with * are mandatory.
                  </div>
                  <button className="orng-btn" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
        <img src={about_img} className="about-us-img" alt="About Us" />
      </div>
    </>
  );
}

export default AboutUsHome;
