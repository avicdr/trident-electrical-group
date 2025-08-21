import React, { useEffect } from "react";
import logo from "../static/logo_footer.svg";

function MobileFooter() {
  return (
    <>
      <hr className="w-100"></hr>
      <div className="footer bg-blue-cw" id="mobile_footer">
        <div className="w-90p h-auto mx-auto resp-flex-column d-flex justify-cont-between align-itm-center">
          <div className="d-flex flex-column align-itm-center">
            <div className="mt-2r">
              <img src={logo} />
            </div>
            <div className="d-flex font-eb flex-column">
              <div className="mt-2r mobile-footer-text font-el">
                Our experienced electricians are highly trained in all aspects
                of electrical service, from office lighting and security systems
                to emergency repair.
              </div>
              {/* <div className="d-flex flex-column">
              <div className="my-1r text-center">Home</div>
              <div className="my-1r text-center">About Us</div>
              <div className="my-1r text-center">Services</div>
              <div className="my-1r text-center">Contacts</div>
              <div className="my-1r text-center">Gallery</div>
            </div> */}
            </div>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0527180080644!2d-0.09369490000000001!3d51.530592899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d5f93737a09%3A0xd06ae5228ca10281!2sGround%20Floor%2C%2020%2C%2022%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sin!4v1699015395243!5m2!1sen!2sin"
              width="350"
              height="250"
              style={{ margin: "2rem 0", border: "none" }}
              allowFullScreen=""
              className="resp-mb-2r dark-mode-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="d-flex flex-column footer-text w-30p justify-cont-evenly resp-w-90p">
            <div className="font-el mobile-footer-text">
              <div>20-22 Wenlock Road, London, England, N1 7GU</div>
              {/* <div>Mon-Fri 08:00 AM - 05:00 PM</div> */}
              <div>© 2023 Trident Electrical Group.</div>
              <div className="link-a font-el"><a href="/privacy-policy">Privacy Policy</a></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileFooter;
