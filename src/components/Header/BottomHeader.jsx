import "./BottomHeader.css";
import { useState, useRef } from "react";
import { Responsive } from "../../Utils/Responsive";
import { Stack, Button, Menu, MenuItem, Fade } from "@mui/material";
import { throttle } from "lodash";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const navFilter = [
  { label: "PRODUCT", options: ["Option 1", "Option 2"] },
  { label: "INTERIOR DESIGN", options: ["Option 1", "Option 2"] },
  { label: "INTERIOR CONSTRUCTION", options: ["Option 1", "Option 2"] },
  { label: "COMPLETE PROJECT", options: ["Option 1", "Option 2"] },
  { label: "DEPARTMENT", options: ["Option 1", "Option 2"] },
  { label: "SHOWROOM", options: ["Option 1", "Option 2"] },
];

const BottomHeader = () => {
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
            <Button className="header-bottom__button" color="inherit">
              {item.label}
            </Button>
          </div>
        ))}
      </Stack>
    </Responsive>
  );
};

export default BottomHeader;
