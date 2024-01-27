import { styled } from '@mui/material/styles';

export const Responsive = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    '.brand-text': {
      fontSize: '1.525rem',
      fontWeight: '500 !important',
    },
    '.brand-icon': {
      fontSize: '2.5rem !important',
    },
    '.nav-icons': {
      fontSize: '20px !important',
    },
    '.search-box': {
      margin: '0 85px',
    },
    '.search-input': {
      padding: '8px 10px',
      width: '200px',
    },
    '.search-icon': {
      right: '16px',
    },
    '.toggle-menu': {
      display: 'none',
    },
  },
  [theme.breakpoints.down('md')]: {
    '.nav-menu': {
      display: 'none !important',
    },
    '.toggle-menu': {
      display: 'flex !important',
      fontSize: '1.2rem',
    },
    '.toggle-menu:hover': {
      backgroundColor: '#fff',
      color: '#ffc814',
    },
    '.search-box': {
      marginLeft: 0,
      marginRight: 0,
    },
    '.search-icon': {
      left: '163px',
    },
  },
  [theme.breakpoints.down('sm')]: {
    '.search-box': {
      display: 'none',
    },
  },
}));
