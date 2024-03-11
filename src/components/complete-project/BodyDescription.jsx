import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { OtherHouses } from "@mui/icons-material";
const BodyDescription = () => {
  const dataDescription = [
    {
      id: 1,
      title: "Thi công nội thất trọn gói",
      text: "Dịch vụ này bao gồm cả tư vấn, gợi ý lựa chọn phong cách. Sau khi đã thống nhất được ý tưởng và phong cách, My House sẽ gửi đến bạn bản vẽ thiết kế nội thất chi tiết. Từ bảng thiết kế đó chúng tôi sẽ bắt đầu đánh giá hiện trạng, đưa ra các hạng mục cần cải tạo, ước tính chi phí chính xác. Và cuối cùng là đem đến cho bạn công trình hoàn thiện, đảm bảo chất lượng, tính thẩm mỹ theo đúng bản vẽ và những gì My House đã cam kết.",
    },
    {
      id: 2,
      title: "Thi công nội thất theo yêu cầu ",
      text: "Ngoài dịch vụ thiết kế thi công trọn gói, My House cũng nhận thi công nội thất theo yêu cầu của khách hàng như thi công nội thất phòng khách, phòng ngủ, phòng bếp và thi công nội thất văn phòng với đa dạng diện tích và nhu cầu. Với My House, việc hoàn thiện một phần nhỏ của căn nhà cũng sẽ phải đồng nhất với không gian toàn bộ căn nhà, đảm bảo các yếu tố phong cách, màu sắc, phong thuỷ…",
    },
    {
      id: 3,
      title: "Thi công nội thất phần thô",
      text: "Thi công nội thất phần thô là bước đầu tiên trong quy trình thi công nội thất, bao gồm tạo vách ngăn, trát lại tường, sơn tường, dán tường, làm trần thạch cao, lát sàn... Trong quá trình thi công nội thất, My House sẽ tiến hành các bước sau: ",
    },
  ];
  const listRequired = [
    { title: "Phong cách hiện đại", url: "hien-dai" },
    { title: "Phong cách tối giản", url: "toi-gian" },
    { title: "Phong cách Châu Âu", url: "chau-au" },
    { title: "Phong cách luxury", url: "luxury" },
  ];
  const construction = [
    "Kiểm tra tổng thể mặt bằng, hiện trạng các hạng mục, thống kê các hạng mục cần chỉnh sửa",
    "Trao đổi, thống nhất với khách hàng những hạng mục cần cải tạo lại",
    "Tiến hành tháo dỡ các phần hạng mục cần thiết kế lại",
    "Thi công, thiết kế lại các hạng mục đã tháo dỡ",
  ];
  return (
    <>
      {dataDescription.map((item) => (
        <div className="box-text">
          <Typography variant="h4" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {item.text}
            {item.id === 2 && (
              <div className="list-required">
                <NavigateNextIcon /> Các phong cách thiết kế nội thất tiêu biểu
                tại My House:
                <ul>
                  {listRequired.map((item) => (
                    <li>
                      <Link to={item.url}>{item.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {item.id === 3 && (
              <div className="list-required">
                <ul>
                  {construction.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </Typography>
        </div>
      ))}
    </>
  );
};

export default BodyDescription;
