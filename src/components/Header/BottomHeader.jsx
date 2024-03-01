import "./BottomHeader.css";
import { useState, useRef } from "react";
import { Responsive } from "../../Utils/Responsive";
import { Stack, Button, Menu, MenuItem, Fade } from "@mui/material";
import { throttle } from "lodash";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const navFilter = [
  { label: "quote calculation", url: "/quote-calculation" },
  { label: "INTERIOR DESIGN", url: "interior-design" },
  { label: "INTERIOR CONSTRUCTION", url: "interior-construction" },
  { label: "COMPLETE PROJECT", url: "complete-project" },
  { label: "DEPARTMENT", url: "department" },
  { label: "SHOWROOM", url: "showroom" },
];

const BottomHeader = () => {
  const navigate = useNavigate();
  return (
    <Responsive>
      <Stack
        className="header-bottom"
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        {navFilter.map((item, index) => (
          <div key={item.label}>
            <Button
              className="header-bottom__button"
              color="inherit"
              onClick={() => {
                item.label === "quote calculation" && navigate(`${item.url}`);
              }}
            >
              {item.label}
            </Button>
          </div>
        ))}
      </Stack>
    </Responsive>
  );
};

export default BottomHeader;
