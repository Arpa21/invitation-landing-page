import "./index.scss";
import React from "react";

export const FooterMenu = () => {
  const menuItemObjects = [
    {
      title: "Explore",
      items: [
        {
          link: "#",
          text: "Programs",
        },
        {
          link: "#",
          text: "People",
        },
        {
          link: "#",
          text: "Guide",
        },
      ],
    },
    {
      title: "Me",
      items: [
        {
          link: "#",
          text: "Post a Link",
        },
        {
          link: "#",
          text: "Sign In",
        },
        {
          link: "#",
          text: "Sign Up",
        },
      ],
    },
    {
      title: "Product",
      items: [
        {
          link: "#",
          text: "Features",
        },
        {
          link: "#",
          text: "Extension",
        },
        {
          link: "#",
          text: "Earn Credits",
        },
        {
          link: "#",
          text: "Invite Friends",
        },
        {
          link: "#",
          text: "Help",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          link: "#",
          text: "Job",
        },
        {
          link: "#",
          text: "Advertise",
        },
        {
          link: "#",
          text: "About Us",
        },
        {
          link: "#",
          text: "Media",
        },
      ],
    },
  ];

  const mapMenuColumnLinks = (items) =>
    items.map(({ link, text }) => (
      <li key={text}>
        <a href={link} className="footer-menu__menu-column-link">
          {text}
        </a>
      </li>
    ));

  const mapMenuColumns = menuItemObjects.map(({ title, items }) => (
    <div className="footer-menu__menu-column">
      <div className="footer-menu__menu-column-title">{title}</div>
      <ul className="footer-menu__menu-column-links">
        {mapMenuColumnLinks(items)}
      </ul>
    </div>
  ));

  return <div className="footer-menu">{mapMenuColumns}</div>;
};
