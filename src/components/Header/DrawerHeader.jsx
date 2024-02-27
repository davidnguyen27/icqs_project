import "./DrawerHeader.css";
import {
  Drawer,
  Box,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const navFilter = [
  { name: "PRODUCT", icon: <ChevronRightIcon /> },
  { name: "INTERIOR DESIGN", icon: <ChevronRightIcon /> },
  { name: "INTERIOR CONSTRUCTION", icon: <ChevronRightIcon /> },
  { name: "COMPLETE PROJECT", icon: <ChevronRightIcon /> },
  { name: "DEPARTMENT", icon: <ChevronRightIcon /> },
  { name: "SHOWROOM", icon: <ChevronRightIcon /> },
];

const DrawerHeader = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box role="presentation">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "8px",
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <input
            type="text"
            placeholder="Enter keyword..."
            className="search-text"
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <Divider />
        <List style={{ backgroundColor: "#f5f5f5" }}>
          {navFilter.map((item, index) => (
            <ListItem
              key={index}
              sx={{ justifyContent: "space-between", marginBottom: "5px" }}
            >
              <ListItemText
                primary={item.name}
                sx={{ my: 0, py: 0, flex: "none" }}
              />
              <ListItemIcon sx={{ minWidth: "auto", mr: 0 }}>
                {item.icon}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerHeader;
