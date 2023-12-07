import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <footer>
      {location.pathname === "/" ? (
        <button onClick={scrollToTop}>Back to Top</button>
      ) : (
        <button onClick={handleBack}>Back</button>
      )}
    </footer>
  );
};

export default Footer;
