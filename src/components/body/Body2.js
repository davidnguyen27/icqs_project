import React from 'react';

const Body2 = () => {

  const handletdkstButtonClick = () =>{
    console.log("TRAO ĐỔI CÙNG KST");
  };
  const handleButtonClick = () => {
    console.log("NHẬN BÁO GIÁ NGAY");

  };

  const handledktvButtonClick = () =>{
    console.log("ĐĂNG KÍ TƯ VẤN");
  };

 



  return (
    <div className="Body2">
    <div className="Body2-row">
      <div className="Body2-column">
        <span className="icon-container">
          <img src="https://m.homeaz.vn/templates/themes/images/icon/interior-serviceb.svg" alt="Icon" />
        </span>
        <h1>Thiết kế nội thất miễn phí</h1>
        <div className="Body2">
          <p><strong>Bạn muốn xây nhà mới</strong> căn bảng về nội thất chi tiết từng không gian?</p>
         
          <button className="boostest" onClick={handletdkstButtonClick}>
            <strong>TRAO ĐỔI CÙNG KST</strong>
            </button>

        </div>
      </div>
      <div className="Body2-column">
        <span className="icon-container">
          <img src="https://noithatantin.com/wp-content/uploads/2023/01/icon-thiet-ke-noi-that-400x400.png" alt="Icon" />
        </span>
        <h1>Tìm đơn vị thi công uy tín</h1>
        <p><strong>Bạn muốn cải tạo nhà</strong> cần tìm đội ngũ tay nghề cao cam kết tiến độ và chất lượng</p>
       
        <button className="boostest" onClick={handleButtonClick}>
          <strong>NHẬN BÁO GIÁ NGAY</strong>
        </button>
      
      </div>
      <div className="Body2-column">
        <span className="icon-container">
          <img src="https://naikehouse.com/wp-content/uploads/2021/10/Artboard-1-20.jpg" alt="Icon" />
        </span>
        <h1>Tư vấn 1:1 cùng KTS</h1>
        <p><strong>Bạn đang lên ý tưởng</strong> cần định hình phong cách và nội thất phù hợp</p>
        <button className="boostest" onClick={handledktvButtonClick }>
          <strong>ĐĂNG KÍ TƯ VẤN</strong>
        </button>
      </div>
    </div>
  </div>
);
};

export default Body2;
