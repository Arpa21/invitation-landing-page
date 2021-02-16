import "./index.scss";
import React from "react";
import { NavMenu } from "../NavMenu";
import { NavButtons } from "../NavButtons";

export const NavSection = () => {
  return (
    <div className="nav-section">
      <NavMenu />
      <NavButtons />
    </div>
  );
};
