import React from "react";
import "./SocialMediaIcons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaIcons() {
  const socialMediaLinks = [
    {
      url: "https://www.instagram.com/lanha.decor/6",
      icon: faInstagram,
      label: "Instagram",
    },
    {
      url: "https://www.facebook.com/lanhaapartment",
      icon: faFacebookF,
      label: "Facebook",
    },
    {
      url: "https://www.youtube.com/@NoithatLaNha",
      icon: faYoutube,
      label: "Youtube",
    },
  ];
  return (
    <div className="sticky-icon">
      {socialMediaLinks.map((link, index) => (
        <a key={index} href={link.url} className={link.label.toLowerCase()}>
          <FontAwesomeIcon icon={link.icon} /> {link.label}
        </a>
      ))}
    </div>
  );
}
