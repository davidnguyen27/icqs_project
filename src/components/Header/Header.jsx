import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FeedIcon from "@mui/icons-material/Feed";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactsIcon from "@mui/icons-material/Contacts";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Responsive } from "../../Utils/Responsive";
import { useState, useEffect } from "react";
import LoginModal from "../../Auth/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import BottomHeader from "./BottomHeader";
import { useTheme } from "@emotion/react";
import DrawerHeader from "./DrawerHeader";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { userLogout } from "../../redux/actions/authAction";
const navItems = [
  { icon: <FeedIcon className="nav-icons" />, name: "Blogs" },
  { icon: <AccountBoxIcon className="nav-icons" />, name: "About" },
  { icon: <ContactsIcon className="nav-icons" />, name: "Contact" },
  { icon: <LoginIcon className="nav-icons" />, name: "Login" },
];

const navItemsAuth = [
  { icon: <FeedIcon className="nav-icons" />, name: "Blogs" },
  { icon: <AccountBoxIcon className="nav-icons" />, name: "About" },
  { icon: <ContactsIcon className="nav-icons" />, name: "Contact" },
  { icon: <PersonIcon className="nav-icons" />, name: "Auth" },
];
const settings = ["Profile", "History payment", "Logout"];

const Header = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [search, setSearch] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  const toggleDrawer = (open) => (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const theme = useTheme();
  const isResponsive = useMediaQuery(theme.breakpoints.down("md"));

  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate(`/search/${search}`);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(userLogout());
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Responsive>
        <AppBar position="static" className="app-bar">
          <Container maxWidth="lg">
            <Toolbar className="sub-nav">
              <Box className="brand-box" onClick={() => navigate("/")}>
                <HomeIcon className="brand-icon" />
                <Typography
                  variant="h4"
                  component="div"
                  noWrap
                  className="brand-text"
                >
                  MY HOUSE
                </Typography>
              </Box>
              <Box className="search-box">
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    placeholder="Enter keyword..."
                    className="search-input"
                    required
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => handleSearch(e)}
                  />
                  <SearchIcon
                    className="search-icon"
                    onClick={(e) => handleClick(e)}
                  />
                </div>
              </Box>
              <Stack className="nav-menu" direction="row" spacing={2}>
                {!user &&
                  navItems.map((item, index) => (
                    <Button
                      key={index}
                      className="nav-button"
                      color="inherit"
                      onClick={() => {
                        setOpenLoginModal(item.name === "Login");
                        {
                          item.name === "About" && navigate("/about");
                        }
                        {
                          item.name === "Blogs" && navigate("/blogs");
                        }
                      }}
                    >
                      {item.icon}
                      {item.name}
                    </Button>
                  ))}

                {user &&
                  navItemsAuth.map((item, index) => (
                    <Button
                      key={index}
                      className="nav-button"
                      color="inherit"
                      onClick={(e) => {
                        {
                          item.name === "About" && navigate("/about");
                        }
                        {
                          item.name === "Blogs" && navigate("/blogs");
                        }
                      }}
                    >
                      {item.name === "Auth" ? (
                        <>
                          <Tooltip title="Open settings">
                            <IconButton
                              onClick={handleOpenUserMenu}
                              sx={{ p: 0 }}
                            >
                              <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/2.jpg"
                              />
                            </IconButton>
                          </Tooltip>
                          <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                          >
                            {settings.map((setting) => (
                              <MenuItem
                                key={setting}
                                onClick={(e) => {
                                  {
                                    handleCloseUserMenu(e);
                                  }
                                  {
                                    setting === "Logout" && handleLogout(e);
                                  }
                                  {
                                    setting === "History payment" &&
                                      navigate("/user/payment");
                                  }
                                }}
                              >
                                <Typography textAlign="center">
                                  {setting}
                                </Typography>
                              </MenuItem>
                            ))}
                          </Menu>
                        </>
                      ) : (
                        <>
                          {item.icon}
                          {item.name}
                        </>
                      )}
                    </Button>
                  ))}
              </Stack>
              <IconButton className="toggle-menu" onClick={toggleDrawer(true)}>
                <MenuIcon /> Menu
              </IconButton>
            </Toolbar>
            <hr />
          </Container>
          {isResponsive ? (
            <Stack
              className={`header-bottom ${isScrolled ? "bottom-fixed" : ""}`}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  color="inherit"
                  onClick={() => {
                    setOpenLoginModal(item.name === "Login");
                  }}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </Stack>
          ) : (
            <BottomHeader className={isScrolled ? "bottom-fixed" : ""} />
          )}
        </AppBar>
      </Responsive>

      <LoginModal
        open={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
        handleClose={() => setOpenLoginModal(false)}
      />

      <DrawerHeader open={isDrawerOpen} onClose={toggleDrawer(false)} />
    </div>
  );
};

export default Header;
