import React from "react";
import "./Parttwo.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Parttwo() {
  return (
    <div className="bodytwo">
     
        <div className="product-rating-overview">
          <div className="product-rating-overview__briefing">
            <div className="product-rating-overview__score-wrapper">
              <span className="product-rating-overview__rating_score">4.9</span>
              <span className="product-rating-overview__rating-score-out-of">
                {" "}
                to 5
              </span>
              <div>
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
                <FontAwesomeIcon icon={faStar} color="red" />
              </div>
            </div>
          </div>
        
      </div>
      <hr />
      <div className="customer_total">
        <div className="customer_rate">
          <div className="customer_infor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/50/50050.png"
              width="10%"
              alt=""
            ></img>
            <div className="customer_information">
              <div>Người dùng đánh giá</div>
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <div className="product-rating__time">
                2021-12-14 16.05 | Type: ??
              </div>
              <div className="feedback">
                giaoo nhanh , chưa sài thử nên tui chưa biếtt , nhma giá rẻ mà
                nhiều mask lắm ( hình ảnh mang tính chất nhận xu )
              </div>
            </div>
          </div>
        </div>
        <div className="customer_rate">
          <div className="customer_infor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/50/50050.png"
              width="10%"
              alt=""
            ></img>
            <div className="customer_information">
              <div>Người dùng đánh giá</div>
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <div className="product-rating__time">
                2021-12-14 16.05 | Type: ??
              </div>
              <div className="feedback">
                giaoo nhanh , chưa sài thử nên tui chưa biếtt , nhma giá rẻ mà
                nhiều mask lắm ( hình ảnh mang tính chất nhận xu )
              </div>
            </div>
          </div>
        </div>
        <div className="customer_rate">
          <div className="customer_infor">
            <img
              src="https://cdn-icons-png.flaticon.com/512/50/50050.png"
              width="10%"
              alt=""
            ></img>
            <div className="customer_information">
              <div>Người dùng đánh giá</div>
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <FontAwesomeIcon icon={faStar} color="red" />
              <div className="product-rating__time">
                2021-12-14 16.05 | Type: ??
              </div>
              <div className="feedback">
                giaoo nhanh , chưa sài thử nên tui chưa biếtt , nhma giá rẻ mà
                nhiều mask lắm ( hình ảnh mang tính chất nhận xu )
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
