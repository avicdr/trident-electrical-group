import React, { useEffect } from "react";
import PageInfo from "../components/PageInfo";
import dots from "../static/dots.png";
import dots_img from "../static/dots_2.png";
import about_us from "../static/about-us.png";
import about_us_corner from "../static/about-us-corner.png";
import about_us_full from "../static/about-us-full.png";
import certificate_1 from "../static/certificate_01.png";
import certificate_2 from "../static/certificate_02.png";
import certificate_3 from "../static/certificate_03.png";
import AboutUsCarousel from "../components/AboutUsCarousel";

function AboutUs() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div>
      <PageInfo title={"Home / About Us"} />
      <div className="why-us w-80 my-2r mx-auto d-flex p-relative resp-d-none p-3-0">
        <img src={dots} className="dots" />
        <div className="information-box">
          <h5 className="orange-color-main why-us-sm fw-bold">
            Over 25 Years Experience
          </h5>
          <h1 className="blue-color-main text-head why-us-head fw-bold">
            Experienced and Reliable Electrical Contractors
          </h1>
          <div className="d-flex flex-column">
            <div className="d-flex align-itm-center other-text">
              We are locally owned and operated which makes our services causal
              as they are done by friendly and helpful technicians.
              <br />
              <br />
              We started out in 2002. We are locally owned and operated which
              makes our services causal as they are done by friendly and helpful
              technicians. Our mission is to service each client with a highly
              trained and courteous technician that is dependable and always
              trustworthy.
            </div>
          </div>
          <div className="d-flex mt-2r">
            <div className="d-flex">
              <div className="orange-circle"></div>
              <div className="d-flex flex-column">
                <div className="about-no">24</div>
                <div className="other-text">
                  Skilled & Certified Electricians
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="orange-circle"></div>
              <div className="d-flex flex-column">
                <div className="about-no">10</div>
                <div className="other-text">
                  Skilled & Certified Electricians
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-container p-relative">
          <img src={about_us} />
          <img src={about_us_corner} className="p-absolute corner-img" />
        </div>
      </div>
      <div className="about-us-sec2 d-flex">
        <div className="left">
          <img src={about_us_full} />
        </div>
        <div className="right">
          <div className="information-box about-info-box">
            <h5 className="orange-color-main why-us-sm fw-bold">
              Certificates
            </h5>
            <h1 className="blue-color-main text-head why-us-head fw-bold">
              We are a Qualified & Certified Electrical Company
            </h1>
            <div className="d-flex flex-column">
              <div className="d-flex align-itm-center other-text">
                We currently employ a team of fully qualified electricians and a
                number of apprentices. We have been registered with he ECA and
                therefore all our electricians are JIB registered. Our aim is to
                keep our services high and our prices very competitive.
              </div>
            </div>
            <div className="d-flex mt-2r justify-cont-evenly">
              <img src={certificate_1} />
              <img src={certificate_2} />
              <img src={certificate_3} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-80 mx-auto">
        <h5 className="orange-color-main why-us-sm fw-bold text-center">
          Our Advantages
        </h5>
        <h1 className="blue-color-main text-head why-us-head fw-bold text-center">
          Reasons Why You Should Call Us
        </h1>
        <div className="d-flex align-itm-center other-text text-center justify-cont-center">
          <div className="w-60p">
            Electrician is your single source for a complete range of
            high-quality electrical services, including design/build,
            engineering and maintenance.
          </div>
        </div>
        <div className="d-flex no-container">
          <div className="box-with-no">
            <div className="big-no">1</div>
            <div className="bg-white p-relative big-no-text-container">
              <h4 className="text-head">24/7 Emergency Services</h4>
              <div className="other-text">
                24/7 emergency electrician you can trust.
              </div>
              <img src={dots_img} className="box-with-no-right-dots" />
            </div>
          </div>
          <div className="box-with-no">
            <div className="big-no">2</div>
            <div className="bg-white p-relative big-no-text-container">
              <h4 className="text-head">Free Estimates</h4>
              <div className="other-text">
                Yes, we offer free estimates for electrical additions or
                replacements.
              </div>
              <img src={dots_img} className="box-with-no-right-dots" />
            </div>
          </div>
          <div className="box-with-no">
            <div className="big-no">3</div>
            <div className="bg-white p-relative big-no-text-container">
              <h4 className="text-head">Low Price Guarantee</h4>
              <div className="other-text">
                We strive to offer the lowest price on the market.
              </div>
              <img src={dots_img} className="box-with-no-right-dots" />
            </div>
          </div>
        </div>
      </div>

      <div className="need-help my-4r">
        <div className="help-box w-25p bg-white p-4r flex-column d-flex">
          <div className="d-flex">
            <hr className="vertical-orange"></hr>
            <h1 className="blue-color-main text-head why-us-head fw-bold">
              Do You <span className="orange-color-main">Need Help</span> With
              Electrical Maintenance
            </h1>
          </div>
          <div className="other-text help-box-other-text">
            Our electrical repair and service options are proudly offered to
            clients. Give us a call today to schedule a free service estimate!
          </div>
          <div className="buttons-container d-flex">
            <div className="btn-orange">Give us a call</div>
            <div className="btn-black">Free Estimate</div>
          </div>
        </div>
      </div>
      <div className="w-80 mx-auto">
        <h5 className="orange-color-main why-us-sm fw-bold text-center">
          Our Team
        </h5>
        <h1 className="blue-color-main text-head why-us-head fw-bold text-center">
          Fully Qualified Electricians
        </h1>
        <div className="d-flex align-itm-center other-text text-center justify-cont-center">
          <div className="w-60p">
            All our personnel operate within an Integrated Management System to
            ensure the delivery of services that are at an exception level of
            quality, reliability, and value
          </div>
        </div>
      </div>
      <div className="mb-2r">
        <AboutUsCarousel />
      </div>
    </div>
  );
}

export default AboutUs;
