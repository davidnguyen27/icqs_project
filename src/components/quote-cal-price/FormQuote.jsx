import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Typography } from "@mui/material";
import ModalImage from "./ModalImage";

const FormQuote = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      product: "Gạch men cao cấp 1m6",
      description: "Gạch sạch bóng, mát mẻ",
      price: 30000,
      quantity: 0,
      wage: 1,
      image:
        "https://cmctiles.vn/wp-content/uploads/2022/07/gach-men-bong-tong-xam.jpg",
    },
    {
      id: 2,
      product: "Tủ bếp chất lượng cao",
      description: "Tủ bếp giá thành hợp lý",
      price: 20000,
      quantity: 0,
      wage: 1,
      image:
        "https://noithatnhadepnhaxinh.com/wp-content/uploads/2022/10/160220798_3944148468941684_5839494649473329038_n.jpg",
    },
    {
      id: 3,
      product: "Sàn gỗ hương",
      description: "Gỗ hương xuất xứ lào",
      price: 40000,
      quantity: 0,
      wage: 1,
      image:
        "https://noithatthoidai.com.vn/wp-content/uploads/2021/03/K9137_148268_01.jpg",
    },
    {
      id: 4,
      product: "Trần thạch cao",
      description: "Trần thạch cao hiện đại",
      price: 20000,
      quantity: 0,
      wage: 2,
      image:
        "https://thachcao.giabaonhieu1m2.com/wp-content/uploads/2024/01/tran-thach-cao-1.jpg",
    },
  ]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [check, setCheck] = React.useState(false);
  const [acreage, setAcreage] = React.useState({
    width: "",
    length: "",
  });
  const [imageId, setImageId] = React.useState();
  const handleChange = (e, index) => {
    const newQuantity = parseInt(e.target.value);
    const newData = [...data];
    newData[index].quantity = newQuantity;
    setData(newData);
  };

  const handleClick = () => {
    setCheck((prev) => !prev);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    data.forEach((item) => {
      totalPrice +=
        item.price * item.quantity * item.wage * acreage.length * acreage.width;
    });
    return totalPrice;
  };
  const handleChangeAcreage = (e) => {
    setAcreage({ ...acreage, [e.target.name]: e.target.value });
  };
  const handleOpenImage = (imageId) => {
    handleOpen();
    setImageId(imageId);
  };
  console.log(imageId);
  return (
    <>
      <div className="quote-price">
        <Typography variant="h5" gutterBottom>
          Giá tạm tính:
        </Typography>
        <Typography variant="h6" gutterBottom className="price">
          {getTotalPrice().toLocaleString()}
          <span className="price-text">
            {getTotalPrice() > 0 ? "có tính thêm tiền công" : ""}
          </span>
        </Typography>
      </div>
      <div className="quote-acreage">
        <input
          placeholder="chiều dài"
          type="number"
          name="length"
          value={acreage.length}
          onChange={(e) => handleChangeAcreage(e)}
        />
        <input
          placeholder="chiều rộng"
          type="number"
          name="width"
          value={acreage.width}
          onChange={(e) => handleChangeAcreage(e)}
        />
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sản phẩm</TableCell>
              <TableCell align="center">Mô tả</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Đơn giá</TableCell>
              <TableCell align="center">Thành tiền</TableCell>
              <TableCell align="center">Hình ảnh</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((el, index) => {
              return (
                <>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {el.product}
                    </TableCell>
                    <TableCell align="left">{el.description}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <input
                        type="number"
                        min={0}
                        value={el.quantity}
                        onChange={(e) => handleChange(e, index)}
                      />
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      {el.price.toLocaleString()}
                    </TableCell>
                    <TableCell align="center">
                      {" "}
                      {(el.price * el.quantity).toLocaleString()}
                    </TableCell>
                    <TableCell align="center">
                      <Avatar
                        alt={el.product}
                        src={el.image}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleOpenImage(el.id)}
                      />
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
            <ModalImage
              open={open}
              imageId={imageId}
              handleClose={handleClose}
              data={data}
            />
          </TableBody>
        </Table>
      </TableContainer>
      {check && (
        <Typography variant="text" gutterBottom className="note-quote">
          Báo giá trên chỉ mang tính chất tham khảo do chưa có số liệu công
          trình thực tế, và có tính thêm tiền công dựa vào diện tích công trình.
          Vui lòng liên hệ sale account qua Fanpage Nội thất My House:
          https://www.facebook.com/noithat.myhouse hoặc hotline/zalo:
          https://zalo.me/0703937521 để được tư vấn đo đạc chính xác nhất.
        </Typography>
      )}

      <div>
        <Button onClick={handleClick}>
          {check ? "Đã đọc xong" : "Xem thêm"}
        </Button>
      </div>
    </>
  );
};

export default FormQuote;
