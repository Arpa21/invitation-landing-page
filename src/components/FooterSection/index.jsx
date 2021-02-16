import "./index.scss";
import React from "react";
import { FooterInfo } from "../FooterInfo";
import { FooterMenu } from "../FooterMenu";

export const FooterSection = () => {
  return (
    <div className="footer-section">
      <FooterInfo />
      <FooterMenu />
    </div>
  );
};
