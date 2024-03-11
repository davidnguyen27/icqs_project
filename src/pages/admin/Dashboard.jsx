import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BookIcon from "@mui/icons-material/Book";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import PaidIcon from "@mui/icons-material/Paid";
import BrushIcon from "@mui/icons-material/Brush";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import UserManage from "../../components/dashboard/usermanage/UserManage";
import BlogManage from "../../components/dashboard/blogmanage/BlogManage";
import { useDispatch, useSelector } from "react-redux";
import CreateUser from "../../components/dashboard/usermanage/CreateUser";
import RequestQuote from "../../components/dashboard/requestquote/RequestQuote";
import HelloAdmin from "./HelloAdmin";
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem } from "@mui/material";
import { userLogout } from "../../redux/actions/authAction";
import PaymentManage from "../../components/dashboard/paymentmanage/PaymentManage";
import CreatePayment from "../../components/dashboard/paymentmanage/CreatePayment";
import PropertyManage from "../../components/dashboard/propertymanage/PropertyManage";
const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const listItem = [
    {
      id: 1,
      title: "Quản lý người dùng",
      icon: <SupervisedUserCircleIcon />,
      path: "/usermanage",
    },
    {
      id: 2,
      title: "Quản lý dự án",
      icon: <HomeIcon />,
      path: "/propertymanage",
    },
    {
      id: 3,
      title: "Quản lý blog",
      icon: <BookIcon />,
      path: "/blogmanage",
    },
    {
      id: 4,
      title: "Yêu cầu báo giá",
      icon: <RequestQuoteIcon />,
      path: "/requestquote",
    },
    {
      id: 5,
      title: "Lịch sử giao dịch",
      icon: <PaidIcon />,
      path: "/paymentmanage",
    },
    {
      id: 6,
      title: "Thiết kế giao diện",
      icon: <BrushIcon />,
      path: "/design",
    },
  ];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    dispatch(userLogout());
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>Admin My House</span>
            {auth && (
              <div style={{ position: "absolute", right: "20px" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClick}>Đăng xuất</MenuItem>
                </Menu>
              </div>
            )}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {listItem.map((item, index) => (
            <ListItem
              key={item.id}
              disablePadding
              onClick={() => navigate(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/dashboard" element={<HelloAdmin />} />
          <Route path="/usermanage" element={<UserManage />} />
          <Route path="/create-staff" element={<CreateUser />} />
          <Route path="/propertymanage" element={<PropertyManage />} />
          <Route path="/requestquote" element={<RequestQuote />} />
          <Route path="/blogmanage" element={<BlogManage />} />
          <Route path="/paymentmanage" element={<PaymentManage />} />
          <Route path="/create-payment" element={<CreatePayment />} />
        </Routes>
      </Main>
    </Box>
  );
};

export default Dashboard;
