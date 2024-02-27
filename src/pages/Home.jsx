import { Container, ThemeProvider, createTheme } from "@mui/material";
import Header from "../components/Header/Header";
import Slider from "../components/Slider/Slider";
import BodyPart1 from "../components/Body/BodyPart1";
import BodyPart2 from "../components/Body/BodyPart2";
import BodyPart3 from "../components/Body/BodyPart3";
import "./Home.css";
import Footer from "../components/Footer/Footer";
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
      <div className="bodypart3-container">
        <BodyPart3 />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
