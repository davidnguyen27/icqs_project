import "./BottomHeader.css";
import { useState, useRef } from "react";
import { Responsive } from "../../Utils/Responsive";
import { Stack, Button, Menu, MenuItem, Fade } from "@mui/material";
import { throttle } from "lodash";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const navFilter = [
  { label: "Tính giá dự kiến", url: "/quote-calculation" },
  { label: "Thiết kế nội thất", url: "interior-design" },
  { label: "Báo giá nội thất", url: "/quotation" },
  { label: "Dự án đã hoàn thành", url: "/complete-project" },
  { label: "Chung cư", url: "department" },
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
                {
                  item.label === "Tính giá dự kiến" && navigate(`${item.url}`);
                }
                {
                  item.label === "Báo giá nội thất" && navigate(`${item.url}`);
                }
                {
                  item.label === "Dự án đã hoàn thành" &&
                    navigate(`${item.url}`);
                }
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
