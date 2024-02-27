import * as React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./PaymentHistory.css";
import TablePayment from "../../components/payment-history/TablePayment";
import { Pagination } from "@mui/material";

export const PaymentHistory = () => {
  return (
    <>
      <Header />
      <div className="payment-container">
        <TablePayment />
      </div>
    </>
  );
};
