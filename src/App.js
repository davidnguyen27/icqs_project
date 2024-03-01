import Home from "../src/pages/Home";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Search from "./pages/Search";
import DetailProperty from "./pages/DetailProperty";
import { PaymentHistory } from "./pages/payment/PaymentHistory";
import About from "./pages/about/About";
import CompleteProject from "./pages/complete/CompleteProject";
import Quotation from "./pages/quotation/Quotation";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blogdetail/BlogDetail";
import { useSelector } from "react-redux";
import Dashboard from "./pages/admin/Dashboard";
import QuoteCalculation from "./pages/quote-calculation/QuoteCalculation";
import Contract from "./pages/contract/Contract";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  const checkAuth =
    user?.data?.user?.role === "ADMIN" || user?.data?.user?.role === "STAFF"
      ? true
      : false;
  return (
    <React.Fragment>
      {checkAuth ? <Dashboard /> : ""}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:param" element={<Search />} />
        <Route path="/detail/:id" element={<DetailProperty />} />
        <Route path="/user/payment" element={<PaymentHistory />} />
        <Route path="/user/contract" element={<Contract />} />
        <Route path="/complete-project" element={<CompleteProject />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/quote-calculation" element={<QuoteCalculation />} />
        <Route
          path="/dashboard"
          element={checkAuth ? <Dashboard /> : <Navigate to={"/"} />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
