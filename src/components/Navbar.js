import React, { useEffect, useState } from "react";
import logo_light from "../static/logo_light.svg";
import logo_dark from "../static/logo_dark.svg";
import { HashLink } from "react-router-hash-link";

function Navbar({ mode, setMode }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll("ul.menu li");
      elements.forEach((element) => {
        element.addEventListener("click", () => {
          document.querySelector(".menu").style.maxHeight = "0px";
          // document.querySelector(".header").style.maxHeight = "0px";
        });
      });
    }, 3000);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.querySelector(".menu").style.maxHeight = "240px";
      document.querySelector(".header").style.maxHeight = "240px";
      document.querySelector(".navicon").style.background = "none";
    } else {
      document.querySelector(".menu").style.maxHeight = "0px";
      document.querySelector(".header").style.maxHeight = "0px";
      document.querySelector(".navicon").style.background = "#333";
    }
  }, [isOpen]);

  useEffect(() => {
    // document.querySelector(".menu").style.maxHeight = "240px";
    document.querySelector(".header").style.maxHeight = "240px";
  });
  return (
    <>
      <div
        className={`navbar ${
          mode === "light" ? "bg-white" : "bg-blue-dm w-100"
        }`}
      >
        <div>
          <img
            src={mode === "light" ? logo_light : logo_dark}
            className="pc-logo"
          />
        </div>
        <div className="nav-link-container">
          <ul>
            <HashLink to={"/#home"}>
              <li
                className={`blue-color-main fz-20px text-btn ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
              >
                <a>Home</a>
              </li>
            </HashLink>
            <HashLink to={"/#about"}>
              <li
                className={`blue-color-main fz-20px text-btn ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
              >
                About
              </li>
            </HashLink>
            <HashLink to={"/#services"}>
              <li
                className={`blue-color-main fz-20px text-btn ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
              >
                Services
              </li>
            </HashLink>
            <HashLink to={"/#gallery"}>
              <li
                className={`blue-color-main fz-20px text-btn ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
              >
                Gallery
              </li>
            </HashLink>
            <HashLink to={"/#contact-us"}>
              <li
                className={`blue-color-main fz-20px text-btn ${
                  mode === "light" ? "" : "color-white-dm"
                }`}
              >
                Contact Us
              </li>
            </HashLink>
          </ul>
        </div>
        <div className="d-flex">
          <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
              <input
                id="theme"
                className="theme__toggle"
                type="checkbox"
                role="switch"
                name="theme"
                defaultChecked
                onChange={() => {
                  setMode(mode === "light" ? "dark" : "light");
                }}
              />
              <span
                className={`theme__icon ${
                  mode === "light" ? "" : "right-0-imp"
                }`}
              >
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
                <span className="theme__icon-part"></span>
              </span>
            </span>
          </label>
        </div>
      </div>
      <header className="header">
        <a href="#" className="logo">
          <img src={logo_dark} />
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          onClick={() => {
            isOpen ? setIsOpen(!isOpen) : setIsOpen(true);
          }}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <HashLink
            to={"/#home"}
            onClick={() => {
              document.getElementsByClassName("menu-btn")[0].click();
            }}
          >
            <li>Home</li>
          </HashLink>
          <HashLink
            to={"/#about"}
            onClick={() => {
              document.getElementsByClassName("menu-btn")[0].click();
            }}
          >
            <li>About Us</li>
          </HashLink>
          <HashLink
            to={"/#services"}
            onClick={() => {
              document.getElementsByClassName("menu-btn")[0].click();
            }}
          >
            <li>Services</li>
          </HashLink>
          <HashLink
            to={"/#gallery"}
            onClick={() => {
              document.getElementsByClassName("menu-btn")[0].click();
            }}
          >
            <li>Gallery</li>
          </HashLink>
          <HashLink
            to={"/#contact-us"}
            onClick={() => {
              document.getElementsByClassName("menu-btn")[0].click();
            }}
          >
            <li>Contact Us</li>
          </HashLink>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
