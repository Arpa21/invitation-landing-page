import "./index.scss";
import React from "react";
import facebook from "../../assets/social-1_square-facebook.svg";
import instagram from "../../assets/social-1_square-instagram.svg";
import twitter from "../../assets/social-1_square-twitter.svg";

export const FooterInfo = () => {
  return (
    <div className="footer-info">
      <div className="footer-info__main">
        <span>Invitation</span> is the new social network where everyone gets
        rewarded. Join, post all your referral links — collect rewards on auto
        pilot.
      </div>
      <div className="footer-info__logos">
        <a href="#1">
          <img src={facebook} alt="" />
        </a>
        <a href="#2">
          <img src={instagram} alt="" />
        </a>
        <a href="#3">
          <img src={twitter} alt="" />
        </a>
      </div>
    </div>
  );
};
