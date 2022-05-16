import { useEffect } from "react";
import { useLocation } from "react-router";
import './scrollToTop.css';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
  <div className="scrollToTop">
    {props.children}
  </div>
  )
};

export default ScrollToTop;