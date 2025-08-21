import React, { useEffect } from "react";
import PageInfo from "../components/PageInfo";
import ServiceItem from "../components/ServiceItem";
import dots from "../static/dots.png";
import why_us_img from "../static/why-us.png";
import orange_tick from "../static/orange-tick.svg";

function Services() {
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="d-flex justify-cont-center flex-column resp-mt-4r">
      <PageInfo title={"Home / Services"} />
      <h1 className="heading">What We Offer</h1>
      <div className="d-flex justify-cont-center flex-wrap mb-2r">
        <div className="options text-btn">All</div>
        <div className="options text-btn">Commercial Services</div>
        <div className="options text-btn">Industrial Services</div>
        <div className="options text-btn">Residential Services</div>
      </div>
      <div className="w-80 d-flex flex-wrap mx-auto justify-cont-center">
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
        <ServiceItem />
      </div>
      <button className="orange-btn">Schedule for Service</button>
      <div className="why-us w-80 my-2r mx-auto d-flex p-relative resp-d-none">
        <img src={dots} className="dots" />
        <div className="information-box">
          <h5 className="orange-color-main why-us-sm">Why us?</h5>
          <h1 className="blue-color-main text-head why-us-head">Our Electricians are:</h1>
          <div className="d-flex flex-column">
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">
                Fully screened and background checked for your peace of mind
              </div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">
                We don’t hire anyone we wouldn’t hire to work inside of our own
                homes.
              </div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">Neat, clean and uniformed for safety and security</div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">Knowledgeable, experienced and skilled</div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">Rigorously trained in customer service</div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">Fully licensed, bonded and insured</div>
            </div>
            <div className="d-flex align-itm-center">
              <div>
                <img src={orange_tick} />
              </div>
              <div className="why-us-item">Friendly, helpful, and reliable.</div>
            </div>
          </div>
        </div>
        <div className="img-container">
          <img src={why_us_img} />
        </div>
      </div>
    </div>
  );
}

export default Services;
