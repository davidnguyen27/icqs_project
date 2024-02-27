import React from "react";
import "./CompleteProject.css";
import Header from "../../components/Header/Header";
import { Container } from "@mui/material";
import BodyProject from "../../components/complete-project/BodyProject";
import BodyBanner from "../../components/complete-project/BodyBanner";
import BodyDescription from "../../components/complete-project/BodyDescription";
import Footer from "../../components/Footer/Footer";
const CompleteProject = () => {
  return (
    <>
      <Header />
      <Container>
        <div>
          <img src="https://www.lanha.vn/wp-content/uploads/2023/11/headline-web-2-3x-8-1300x243.png.webp" />
        </div>
        <div>
          <BodyProject />
        </div>
        <div className="container-banner">
          <BodyBanner />
        </div>
        <div className="container-description">
          <BodyDescription />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default CompleteProject;
