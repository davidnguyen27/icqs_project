import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./QuoteCalculation.css";
import { Button, Container, Typography } from "@mui/material";
import FormQuote from "../../components/quote-cal-price/FormQuote";

const QuoteCalculation = () => {
  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom className="quote-title">
          Tính giá dự kiến
        </Typography>
        <div>
          <FormQuote />
        </div>
      </Container>
    </>
  );
};

export default QuoteCalculation;
