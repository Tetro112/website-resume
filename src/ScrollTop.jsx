import React from "react";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

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
    <button>
      <FaChevronUp
        onClick={ScrollTop}
        style={{ display: isVisible ? "inline" : "none" }}
      />
    </button>
  );
};

export default ScrollTop;
