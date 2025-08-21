import React from "react";
import logo from "../static/logo_footer.svg";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className="footer bg-blue-cw" id="footer">
      <div className="w-70p h-auto mx-auto resp-flex-column d-flex justify-cont-between align-itm-center">
        <div className="d-flex flex-column">
          <div className="my-2r mt-5r-imp">
            <img src={logo} />
          </div>
          <div className="d-flex font-eb">
            <div className="d-flex flex-column mr-3r">
              <div className="my-1r link-a font-el"><HashLink to={"/#home"}>Home</HashLink></div>
              <div className="my-1r link-a font-el"><HashLink to={"/#about"}>About Us</HashLink></div>
              <div className="my-1r link-a font-el"><HashLink to={"/#services"}>Services</HashLink></div>
            </div>
            <div className="d-flex flex-column">
              <div className="my-1r link-a font-el"><HashLink to={"/#contact-us"}>Contact Us</HashLink></div>
              <div className="my-1r link-a font-el"><HashLink to={"/#gallery"}>Gallery</HashLink></div>
              <div className="my-1r link-a font-el"><Link to={"/privacy-policy"}>Privacy Policy</Link></div>
            </div>
          </div>
          <div className="mt-4r trademark">
            © 2023 Trident Electrical Group.
          </div>
        </div>
        <div className="d-flex flex-column footer-text mt-4r w-30p justify-cont-evenly resp-w-90p">
          <div className="my-1r font-el mt-neg4r resp-d-none lh-32">
            Our experienced electricians are highly trained in all aspects of
            electrical service, from office lighting and security systems to
            emergency repair.
          </div>
          <div className="my-1r font-el lh-25">
            <div>20-22 Wenlock Road, London, England, N1 7GU</div>
            {/* <div>Mon-Fri 08:00 AM - 05:00 PM</div> */}
            <div>0208 798 2049</div>
          </div>
        </div>
        <div>
          <iframe
            className="dark-mode-map resp-mb-2r"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0527180080644!2d-0.09369490000000001!3d51.530592899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5f93737a09%3A0xd06ae5228ca10281!2sGround%20Floor%2C%2020%2C%2022%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sin!4v1699015395243!5m2!1sen!2sin"
            width="350"
            height="240"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div></>
  );
}

export default Footer;
