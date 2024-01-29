import React from "react";
import "./Partone.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Partone() {
  return (
    <div className="partone">
      <div className="a">
        <h1>MIZUKI PARK- HIỆN ĐẠI - 100TR</h1>
        <time dateTime="??/??/??">??/??/?? | </time>
        <FontAwesomeIcon icon={faHouse} /> Là Nhà Team
      </div>

      <div className="image">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg"
          alt=""
          className="full-screen-image"
        ></img>
      </div>
    </div>
  );
}
