import React from "react";
import ProductSlider from "./bodyfour/ProductSlider";
import FeedbackDetail from "./bodyone/FeedbackDetail";
import Bodythree from "./bodythree/Bodythree";
import Bodytwo from "./bodytwo/Bodytwo";


export default function DetailProperty() {
  return (
    <div className="Detail-Property">
      <FeedbackDetail />
      <Bodytwo />
      <Bodythree />
      <ProductSlider />
      
    </div>
  );
}
