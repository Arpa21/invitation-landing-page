import "./index.scss";
import React from "react";

export const NavMenu = () => {
  return (
    <div className="nav-menu">
      <div className="nav-menu__logo">Invitation</div>
      <ul className="nav-menu__links">
        <li className="nav-menu__link">
          <a href="#1">Features</a>
        </li>
        <li className="nav-menu__link">
          <a href="#2">Extension</a>
        </li>
        <li className="nav-menu__link">
          <a href="#3">Referral Programs</a>
        </li>
        <li className="nav-menu__link">
          <a href="#4">People</a>
        </li>
      </ul>
    </div>
  );
};
