import React from "react";
import "./RequestQuote.css";
import TableRequest from "./TableRequest";
const RequestQuote = () => {
  return (
    <>
      <div className="request-quote-title">Khách hàng yêu cầu báo giá</div>
      <div className="request-quote-table">
        <TableRequest />
      </div>
    </>
  );
};

export default RequestQuote;
