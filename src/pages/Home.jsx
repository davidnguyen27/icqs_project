import { ThemeProvider, createTheme } from '@mui/material';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import BodyPart1 from '../components/Body/BodyPart1';
import BodyPart2 from '../components/Body/BodyPart2';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Slider />
      <BodyPart1 />
      <BodyPart2 />
    </ThemeProvider>
  );
};

export default Home;
