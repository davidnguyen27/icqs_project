import { Container, ThemeProvider, createTheme } from '@mui/material';
import Header from '../components/Header/Header';
import Slider from '../components/Slider/Slider';
import BodyPart1 from '../components/Body/BodyPart1';
import BodyPart2 from '../components/Body/BodyPart2';
import BodyPart3 from '../components/Body/BodyPart3';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1200,
      xl: 1536,
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
      <Container>
        <BodyPart3 />
      </Container>
    </ThemeProvider>
  );
};

export default Home;
