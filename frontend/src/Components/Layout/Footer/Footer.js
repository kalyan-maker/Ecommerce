import React from "react";
import playStore from "./playstore.png";
import appStore from "./Appstore.png";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; ecommerce</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          href="http://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a href="http://youtube.com/" target="_blank" rel="noopener noreferrer">
          Youtube
        </a>
        <a
          href="http://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
