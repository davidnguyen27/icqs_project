import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTiktok , faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';


export default function footer() {
  return (
 <div className="main-footer">
  <div className="container">
    <div className="row">
      {/* Column1 */}
      <div className="col">
      <h4>THÔNG TIN LIÊN HỆ</h4>
      <ul className="list-unstyled">
        <li>Showroom: Số 55 Đinh Thị Thi 
        (KDC Vạn Phúc) Hiệp Bình Phước, TP. Thủ Đức, TPHCM</li>
        <li>Xưởng: Số 10VP, đường C4, Quận 8, TPHCM</li>       
      </ul>
      <h4>Thời gian làm việc:</h4>
      <ul className="list-unstyled">
      <li>Thứ 2 đến CN: Từ 8h đến 17h</li>
      <li>Online: Hỗ trợ 24/7</li>
      </ul>
      <strong>Hotline</strong>: 0703 937 521
      <br/>
      <strong>Email:</strong> info@lanha.vn
      </div>
      {/* Column2 */}
      <div className="col">
      <h4>DỊCH VỤ NỔI BẬT</h4>
      <ul className="list-unstyled">
        <li>Thiết kế nội thất</li>
        <li>Thiết kế nội thất chung cư</li>
        <li>Thiết kế nội thất nhà phố</li>
        <li>Thiết kế nội thất biệt thự</li>
        <li>Thi công nội thất</li> 
      </ul>
      <strong>HỖ TRỢ KHÁCH HÀNG</strong> 
      <ul className="list-unstyled">
      <li>Quy trình và Bảo hành</li>
      <li>Chính sách trả góp</li>
      </ul>
      </div>
      {/* Column3 */}
      <div className="col">
      <h4>BÀI VIẾT NỔI BẬT</h4>
      <ul className="list-unstyled">
        <li>Mẫu tủ bếp đẹp</li>
        <li>Mẫu nhà bếp nhỏ đẹp đơn giản</li>
        <li>Phòng ngủ đẹp cho nữ màu xanh</li>
        <li>Phòng ngủ màu hồng đẹp</li>
        <li>Thi công nội thất biệt thự</li>
        <li>Thi công nội thất văn phòng</li>
        <li>Thi công nội thất chung cư TPHCM</li>
        <li>Thiết kế phòng khách chung cư</li>
        <li>Thiết kế phòng khách nhà ống</li>
        <li>Thi công nội thất phòng khách</li>
      </ul>
      </div>
      {/* Column4*/}
   <div className='col'>
   <img src="https://hungvietme.vn/wp-content/uploads/2021/06/he-thong-dien-nhe.jpeg" width="300px" alt='Value'></img>
   <p>
      <FontAwesomeIcon icon={faFacebook} size="lg" shake width="30px"/>
      <FontAwesomeIcon icon={faTiktok} size="lg" shake width="30px"/>
      <FontAwesomeIcon icon={faFacebookMessenger} size="lg" shake width="30px"/> 
    </p>
   </div>

    </div>

    <hr/>
    <div className="row">
      <p className="col-sm">
        &copy;{new Date().getFullYear()}
      </p>
    </div>

  </div>
 </div>
  )
}
