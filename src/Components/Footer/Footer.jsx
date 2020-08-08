import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <h2 className="footer">
      <div className="footer__left">
        <p>Album and song details</p>
      </div>
      <div className="footer__center">
        <p>Player controls</p>
      </div>
      <div className="footer__right">
        <p>Volume Controls</p>
      </div>
    </h2>
  );
}

export default Footer;
