import { useState } from "react";
import "./backToTop.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div>
      <p
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      >
        <span
          className="iconify scrollTop__icon"
          data-icon="ic:twotone-keyboard-double-arrow-up"
        ></span>
        BACK TO TOP
        <span
          className="iconify scrollTop__icon"
          data-icon="ic:twotone-keyboard-double-arrow-up"
        ></span>
      </p>
    </div>
  );
};

export default BackToTop;
