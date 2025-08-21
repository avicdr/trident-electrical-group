import React, { useEffect } from "react";
import PageInfo from "../components/PageInfo";

function Cookie() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="resp-mt-4r">
      <PageInfo title={"Home / Cookie Policy"} />
      <div className="pp-container my-2r">
        <h1 className="pp-h3">Cookies Policy</h1>
        <div className="text">
          This website uses cookies to enhance your user experience. Cookies are
          small text files that are stored on your device when you visit a
          website. They help improve the functionality of the site and provide
          insights into how you interact with it.
          <br />
          <br />
          <b>Types of Cookies:</b>
          <br />
          <br />
          <b>1. Essential Cookies:</b>
          <br />
             - Necessary for the website to function properly.
          <br />
             - Examples: session cookies, authentication cookies.
          <br />
          <br />
          <b>2. Analytical Cookies:</b>
          <br />
             - Used to analyze and track website performance.
          <br />
             - Examples: Google Analytics.
          <br />
          <br />
          <b>3. Functionality Cookies:</b>
          <br />
             - Enhance user experience by remembering preferences.
          <br />
             - Examples: language preferences, region-specific settings.
          <br />
          <br />
          <b>How We Use Cookies:</b>
          <br />
          <br />
          - We use cookies to understand how you use our website and make
          improvements.
          <br />
          - Cookies help us customize your experience and provide relevant
          content.
          <br />
          <br />
          <b>Managing Cookies:</b>
          <br />
          <br />
          - You can control or delete cookies through your browser settings.
          <br />
          - Please note that restricting cookies may impact the functionality of
          the website.
          <br />
          <br />
          <b>Third-Party Cookies:</b>
          <br />
          <br />
          - Some third-party services on our site may use cookies.
          <br />
          - We have no control over these cookies; you should refer to the
          respective privacy policies.
          <br />
          <br />
          <b>Updates to Our Cookie Policy:</b>
          <br />
          <br />
          - This Cookies Policy may be updated to reflect changes in regulations
          or our practices.
          <br />
          - We recommend reviewing this page periodically for any updates.
          <br />
          <br />
          By continuing to use our website, you consent to the use of cookies as
          described in this policy.
          <br />
          <br />
          If you have any questions or concerns about our Cookies Policy, please
          contact us.
          <br />
          <br />
          <b>Trident Electrical Group</b><br />
          {/* <b>24-11-2023</b> */}
        </div>
      </div>
    </div>
  );
}

export default Cookie;
