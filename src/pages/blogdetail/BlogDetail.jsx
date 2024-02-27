import React from "react";
import Header from "../../components/Header/Header";
import { Container, Typography } from "@mui/material";
import "./BlogDetail.css";
import Footer from "../../components/Footer/Footer";
const BlogDetail = () => {
  const data = [
    {
      title: "Phong cách thiết kế nội thất biệt thự hiện đại",
      content: [
        {
          text: "Thiết kế đơn giản, dứt khoát, ưu tiên những mảng hình khối đường thẳng song song, nhưng không gò bó theo tỷ lệ hay đối xứng nhau mà được sáng tạo, thiết kế tự do.",
          image:
            "https://noithatmanhhe.vn/media/32547/thiet-ke-noi-that-phong-an-3.jpg?rmode=max&width=1200",
        },
        {
          text: "Màu sắc ưu tiên sử dụng cho nội thất biệt thự hiện đại là những gam màu sáng như vàng, trắng, xám… Nếu muốn tạo điểm nhấn bạn có thể thêm các tone màu đỏ, cam,... nhưng chỉ nên sử dụng theo kiểu điểm xuyến không nên quá lạm dụng sẽ gây rối mắt.",
          image:
            "https://noithatmanhhe.vn/media/32509/thiet-ke-noi-that-phong-bep-1.jpg?rmode=max&width=1200",
        },
        {
          text: "Nội thất thường được ứng dụng các chất liệu như gỗ tự nhiên (gỗ Sồi, gỗ Óc Chó, gỗ Gõ Đỏ,...) hay gỗ công nghiệp phủ melamine, acrylic, laminate cùng với kính, vách CNC....",
          image:
            "https://noithatmanhhe.vn/media/32585/thiet-ke-noi-that-phong-khach-2.jpg?rmode=max&width=1200",
        },
      ],
    },

    {
      title: "Phong cách thiết kế nội thất biệt thự tân cổ điển",
      content: [
        {
          text: "Thiết kế nội thất biệt thự tân cổ điển mang lại vẻ uy nghi bề thế, vừa là nét đẹp khỏe khoắn, tươi tiến của hơi hướng hiện đại vừa giữ được hơi thở của thời gian. Nét đẹp cổ kính thường được ghi dấu trên mặt phẳng tường nhà cùng những đường cong sắc sảo, nhấn nhá trong từng chi tiết. ",
          image:
            "https://noithatmanhhe.vn/media/h0hnhjdw/thiet-ke-noi-that-phong-khach-biet-thu-1.jpg?rmode=max&width=1200&height=900",
        },
        {
          text: "Chú ý “tỷ lệ vàng” khi ngăn các ô, các mảng . Mái vòm bán nguyệt là yếu tố đặc trưng thường thấy trong thiết kế biệt thự tân cổ điển. Chú tâm đến các đường cong uyển chuyển, những ô cửa sổ bao quanh bốn phía với các lớp kính trong suốt, tinh tế, đem lại cảm giác về một không gian rộng rãi thoải mái. ",
          image:
            "https://noithatmanhhe.vn/media/aaibvdzl/thiet-ke-noi-that-phong-khach-biet-thu-4.jpg?rmode=max&width=1200&height=900",
        },
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Container className="container-blogdetail">
        <div>
          <Typography variant="h4" gutterBottom>
            5 Phong Cách Thiết Kế Nội Thất Biệt Thự HOT Nhất Năm 2024
          </Typography>
          <span>28-01-2024</span>
        </div>
        <div className="intro-blogdetail lineheight">
          <span>
            Thiết kế nội thất biệt thự với phong cách nào là sang trọng và không
            lỗi thời nhất? Là câu hỏi được nhiều gia chủ quan tâm để kiến tạo
            cho không gian sống đẳng cấp của mình. Thực ra với diện tích rộng
            rãi, biệt thự thường phù hợp với hầu hết các phong cách thiết kế.
            Tuy nhiên, các phong cách thiết kế nội thất biệt thự dưới đây sẽ đảm
            bảo đem lại cho bạn một tổ ấm ấn tượng nhất.{" "}
          </span>
        </div>
        {data.map((item, index) => (
          <div className="body-blogdetail" key={index}>
            <Typography variant="h5" gutterBottom>
              {item.title}
            </Typography>
            <Container>
              <ul>
                {item.content.map((el) => (
                  <li>
                    <span className="lineheight">{el.text}</span>
                    <img src={el.image} className="image-body-blogdetail" />
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default BlogDetail;
