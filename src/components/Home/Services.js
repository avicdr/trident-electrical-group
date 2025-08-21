import React from "react";
import ServicesCard from "./ServicesCard";
import light_mode_img_bulb from "../../static/light_mode_bulb.svg";
import dark_mode_bulb from "../../static/dark_bulb.svg";

function Services({ mode }) {
  return (
    <>
      <div className="services pt-6re d-flex flex-column my-2r resp-py-0 py-2r resp-mt-2r">
        <div className="top-text text-center d-flex flex-column align-itm-center justify-cont-center mb-1r">
          {/* <div className="text-sm orange-color-main mb-1r">
          24/7 Electrician Services – Safe and Efficient
        </div> */}
          <div
            className={`fz-28px resp-text-lg ${
              mode === "light" ? "blue-color-main" : "orange-color-main"
            }`}
          >
            Our Services
          </div>
        </div>
        <ServicesCard
          mode={mode}
          imgSide={"left"}
          textArray={[
            "Electrical Installation Condition Report (EICR)",
            "Fault Finding",
            "Reactive Maintenance",
            "Electrical Installation - Re-Wiring/Consumer Unit",
            "CCTV",
            "Fire Alarm - Installation, Servicing/maintenance",
            "Emergency Light Testing"
          ]}
          img={light_mode_img_bulb}
          darkImg={dark_mode_bulb}
          heading={"Domestic / Residential"}
          />
        <ServicesCard
          mode={mode}
          imgSide={"right"}
          textArray={[
            "Electrical Installation Condition Report (EICR)",
            "Fault Finding",
            "Reactive Maintenance",
            "Electrical Installation - Re-Wiring/Consumer Unit",
            "CCTV",
            "Fire Alarm - Installation, Servicing/maintenance",
            "Emergency Light Testing"
          ]}
          img={light_mode_img_bulb}
          darkImg={dark_mode_bulb}
          heading={"Commercial"}
        />
        <ServicesCard
          mode={mode}
          element={3}
          imgSide={"left"}
          textArray={[
            "Installation of single phase and three phase chargers for domestic and commercial sites",
          ]}
          img={light_mode_img_bulb}
          darkImg={dark_mode_bulb}
          heading={"EV Charging"}
        />
        <ServicesCard
          mode={mode}
          imgSide={"right"}
          textArray={[
            "Installation of Solar PV within domestic and commercial sites",
          ]}
          img={light_mode_img_bulb}
          darkImg={dark_mode_bulb}
          heading={"Solar PV Systems"}
        />
        <div id="gallery"></div>
      </div>
    </>
  );
}

export default Services;
