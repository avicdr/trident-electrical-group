import { useState } from "react";
import "./css/App.css";
import "./css/Responsive.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./css/Utils.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFooter from "./components/MobileFooter";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AboutUs from "./Pages/AboutUs";
import Cookie from "./Pages/Cookie";

function App() {
  const [mode, setMode] = useState("dark");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 468);
  return (
    <>
    <div id="home"></div>
      <BrowserRouter>
      <Navbar mode={mode} setMode={setMode} />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home mode={mode} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path=" " element={<Cookie />} />
          </Routes>
        </div>
      {isMobile ? <MobileFooter mode={mode} /> : <Footer mode={mode} />}
      </BrowserRouter>
    </>
  );
}

export default App;
