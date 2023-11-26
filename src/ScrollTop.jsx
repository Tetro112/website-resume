import React from "react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { ScrollTopContainer, IconBackground } from "./ScrollTopElements";

const ScrollTop = () => {
  let [isVisible, setIsVisible] = useState(false);

  const toggleIsVisible = () => {
    const isScroll = document.documentElement.scrollTop;
    if (isScroll > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleIsVisible);

  return (
    <ScrollTopContainer>
      <IconBackground style={{ display: isVisible ? "flex" : "none" }}>
        <FaChevronUp
          onClick={ScrollTop}
          style={{
            display: isVisible ? "inline" : "none",
            color: "#e59a6f",
            zIndex: 2,
          }}
        />
      </IconBackground>
    </ScrollTopContainer>
  );
};

export default ScrollTop;
