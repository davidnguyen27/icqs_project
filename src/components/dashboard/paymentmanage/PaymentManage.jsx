import React, { useEffect, useState } from "react";
import TablePayment from "./TablePayment";
import "./PaymentManage.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentManage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="payment-title">Lịch sử báo giá</div>
      <div className="div-button">
        <input
          placeholder="Tìm kiếm..."
          className="payment-input-search"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          className="payment-button"
          onClick={() => navigate("/create-payment")}
        >
          Tạo giao dịch
        </Button>
      </div>
      <TablePayment title={title} />
    </>
  );
};

export default PaymentManage;
