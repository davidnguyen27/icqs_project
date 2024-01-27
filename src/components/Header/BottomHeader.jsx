import './BottomHeader.css';
import { useState, useRef } from 'react';
import { Responsive } from '../../Utils/Responsive';
import { Stack, Button, Menu, MenuItem, Fade } from '@mui/material';
import { throttle } from 'lodash';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const navFilter = [
  { label: 'PRODUCT', options: ['Option 1', 'Option 2'] },
  { label: 'INTERIOR DESIGN', options: ['Option 1', 'Option 2'] },
  { label: 'INTERIOR CONSTRUCTION', options: ['Option 1', 'Option 2'] },
  { label: 'COMPLETE PROJECT', options: ['Option 1', 'Option 2'] },
  { label: 'DEPARTMENT', options: ['Option 1', 'Option 2'] },
  { label: 'SHOWROOM', options: ['Option 1', 'Option 2'] },
];

const BottomHeader = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const menuRef = useRef(null);

  const handleMouseEnter = throttle((event, index) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  }, 100);

  const handleMouseLeave = () => {
    if (!menuRef.current.contains(document.activeElement)) {
      setAnchorEl(null);
      setSelectedIndex(null);
    }
  };

  return (
    <Responsive>
      <Stack className="header-bottom" direction="row" spacing={2} justifyContent="center">
        {navFilter.map((item, index) => (
          <div
            key={item.label}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <Button className="header-bottom__button" color="inherit">
              {item.label} <ArrowDropDownIcon />
            </Button>
            <div ref={menuRef}>
              <Menu
                id={`menu-${item.label}`}
                anchorEl={anchorEl}
                open={Boolean(anchorEl) && selectedIndex === index}
                onClose={handleMouseLeave}
                MenuListProps={{ onMouseLeave: handleMouseLeave }}
                TransitionProps={{
                  onEnter: (node) => {
                    node.style.opacity = 0;
                    node.classList.add('menu-enter');
                  },
                  onEntering: (node) => {
                    node.classList.add('menu-enter-active');
                  },
                  onExit: (node) => {
                    node.classList.add('menu-exit');
                  },
                  onExited: (node) => {
                    node.classList.remove('menu-exit', 'menu-exit-active');
                  },
                }}
                TransitionComponent={Fade}
                transitionDuration={300}
                style={{ position: 'absolute', zIndex: 1000 }}
              >
                {item.options.map((option, optionIndex) => (
                  <MenuItem key={optionIndex}>{option}</MenuItem>
                ))}
              </Menu>
            </div>
          </div>
        ))}
      </Stack>
    </Responsive>
  );
};

export default BottomHeader;
