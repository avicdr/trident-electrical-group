import React, { useState, useEffect } from "react";

const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const accepted = localStorage.getItem("cookie-accepted");
      if (!accepted) {
        setIsVisible(true);
        setTimeout(() => {
          document.querySelector(".cookie-popup").classList.add("visible");
        }, 1000); // Adjust the timeout to 1000 milliseconds (1 second)
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const acceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem("cookie-accepted", "true");
  };
  const rejectCookies = () => {
    setIsVisible(false);
    localStorage.setItem("cookie-accepted", "false");
  };

  return (
    isVisible && (
      <div className="cookie-popup">
        <div>
          This website uses cookies to provide you with a great user experience.
          By using it, you accept our{" "}
          <a href="/cookie-policy">use of cookies</a>
        </div>
        <div className="cookie-popup-actions">
          <button onClick={rejectCookies} className="reject-cookie">Reject</button>
          <button onClick={acceptCookies}>Accept</button>
        </div>
      </div>
    )
  );
};

export default CookiePopup;
