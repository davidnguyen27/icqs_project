import Home from '../src/pages/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import DetailProperty from './pages/DetailProperty';
import { PaymentHistory } from './pages/payment/PaymentHistory';
import About from './pages/about/About';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/search/:param" element={<Search />} />
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailProperty />} />
        <Route path="/user/payment" element={<PaymentHistory />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
