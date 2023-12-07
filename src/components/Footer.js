import React from "react";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer>
      <button onClick={scrollToTop}>Back to Top</button>
    </footer>
  );
};

export default Footer;
