import Home from "../src/pages/Home";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import DetailProperty from "./pages/DetailProperty";
import { PaymentHistory } from "./pages/payment/PaymentHistory";
import About from "./pages/about/About";
import CompleteProject from "./pages/complete/CompleteProject";
import Quotation from "./pages/quotation/Quotation";
import Blog from "./pages/blog/Blog";
import BlogDetail from "./pages/blogdetail/BlogDetail";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search/:param" element={<Search />} />
        <Route path="/detail/:id" element={<DetailProperty />} />
        <Route path="/user/payment" element={<PaymentHistory />} />
        <Route path="/complete-project" element={<CompleteProject />} />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
