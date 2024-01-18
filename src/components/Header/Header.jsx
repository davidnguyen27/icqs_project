import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContactsIcon from '@mui/icons-material/Contacts';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AppBar, Box, Button, Container, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import LoginModal from '../../Auth/LoginModal';
import { useSelector } from 'react-redux';

const navItems = [
  { icon: <FeedIcon className="nav-icons" />, name: 'News' },
  { icon: <AccountBoxIcon className="nav-icons" />, name: 'About' },
  { icon: <ContactsIcon className="nav-icons" />, name: 'Contact' },
  { icon: <LoginIcon className="nav-icons" />, name: 'Login' },
  
];

const navFilter = [
  'PRODUCT',
  'INTERIOR DESIGN',
  'INTERIOR CONSTRUCTION',
  'COMPLETE PROJECT',
  'DEPARTMENT',
  'SHOWROOM',
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const userServer = useSelector((state) => state.authReducer.authData)
  const check = userServer?.data.user.role === "ADMIN" ? true : false
  return (
    <div>
      <AppBar position="static" className="app-bar">
        <Container maxWidth="lg">
          <Toolbar style={{ padding: 0 }}>
            <Box display="flex" alignItems="center">
              <HomeIcon className="brand-icon" />
              <Typography variant="h4" component="div" noWrap fontWeight="700">
                MY HOUSE
              </Typography>
            </Box>
            {!isMobile && (
              <Box display="flex" flexGrow={1} alignItems="center" className="search-box">
                <div style={{ display: 'flex' }}>
                  <input type="text" placeholder="Enter keyword..." className="search-input" required />
                  <Button className="search-icon">
                    <SearchIcon style={{ position: 'absolute', top: '25px', right: '100%' }} />
                  </Button>
                </div>
              </Box>
            )}
            <Stack direction="row" spacing={2}>
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  className="nav-button"
                  color="inherit"
                  onClick={item.name === 'Login' ? () => setOpenLoginModal(true) : null}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Toolbar>
          <hr />
          <Stack direction="row" spacing={2} justifyContent="center">
            {navFilter.map((item) => (
              <Button key={item} color="inherit">
                {item} <ArrowDropDownIcon />
              </Button>
            ))}
            
          </Stack>
        </Container>
      </AppBar>
      <LoginModal open={openLoginModal} handleClose={() => setOpenLoginModal(false)} />
    </div>
  );
};

export default Header;
