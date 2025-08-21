import React, { useEffect, useState } from "react";
import Services from "../components/Home/Services";
import AboutUsHome from "../components/Home/AboutUsHome";
import ProjectsCarousel from "../components/Home/ProjectsCarousel";
import project_2 from "../static/project_2.png";
import project_3 from "../static/project_3.png";
import project_7 from "../static/project_7.jpg";
import project_8 from "../static/project_8.jpg";
import project_9 from "../static/project_9.jpg";
import project_10 from "../static/project_10.jpg";
import project_11 from "../static/project_11.jpg";
import project_12 from "../static/project_12.jpg";
import CookiePopup from "../components/CookiePopup";

function Home({ mode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const boxes = [
    {
      img: project_2,
    },
    {
      img: project_3,
    },
    {
      img: project_7,
    },
    {
      img: project_8,
    },
    {
      img: project_9,
    },
    {
      img: project_10,
    },
    {
      img: project_11,
    },
    {
      img: project_12,
    },
  ];
  return (
    <div className={`${mode === "light" ? "" : "bg-blue-dm"}`}>
      <CookiePopup/>
      <div className="section-with-contact-us"></div>
      <div id="contact-us" className="contact-link"/>
      <AboutUsHome mode={mode} />
      <div id="services" />
      <Services mode={mode} />
      <ProjectsCarousel mode={mode} boxes={boxes} />
    </div>
  );
}

export default Home;
