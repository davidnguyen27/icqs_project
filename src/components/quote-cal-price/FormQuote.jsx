import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ModalImage from "./ModalImage";

const FormQuote = () => {
  const [data, setData] = React.useState([
    {
      id: 1,
      type: "PENHOUSE",
      scale: "Phòng ngủ",
      product: "Gạch men cao cấp 1m6",
      description: "Gạch sạch bóng, mát mẻ",
      unit: "m2",
      price: 30000000,
      acreage: 0,
      wage: 350000,
      image:
        "https://cmctiles.vn/wp-content/uploads/2022/07/gach-men-bong-tong-xam.jpg",
    },
    {
      id: 2,
      type: "PENHOUSE",
      scale: "Phòng bếp",
      product: "Tủ bếp chất lượng cao",
      description: "Tủ bếp giá thành hợp lý",
      unit: "m2",
      price: 10000000,
      acreage: 0,
      wage: 1250000,
      image:
        "https://noithatnhadepnhaxinh.com/wp-content/uploads/2022/10/160220798_3944148468941684_5839494649473329038_n.jpg",
    },
    {
      id: 3,
      type: "DEPARTMENT",
      scale: "Phòng khách",
      product: "Sàn gỗ hương",
      description: "Gỗ hương xuất xứ lào",
      unit: "m2",
      price: 15000000,
      acreage: 0,
      wage: 500000,
      image:
        "https://noithatthoidai.com.vn/wp-content/uploads/2021/03/K9137_148268_01.jpg",
    },
    {
      id: 4,
      type: "HOUSE",
      scale: "Phòng làm việc",
      product: "Trần thạch cao",
      description: "Trần thạch cao hiện đại",
      unit: "m2",
      price: 20000000,
      acreage: 0,
      wage: 1000000,
      image:
        "https://thachcao.giabaonhieu1m2.com/wp-content/uploads/2024/01/tran-thach-cao-1.jpg",
    },
  ]);
  const [filterType, setFilterType] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [check, setCheck] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [imageId, setImageId] = React.useState();
  const handleChange = (e, index) => {
    const newQuantity = parseInt(e.target.value);
    const newData = [...filterType];
    newData[index].acreage = newQuantity;
    setFilterType(newData);
  };
  React.useEffect(() => {
    const filterData = data.filter((el) => el.type === type);
    setFilterType(filterData);
  }, [type]);

  const handleClick = () => {
    setCheck((prev) => !prev);
  };

  const handleOpenImage = (imageId) => {
    handleOpen();
    setImageId(imageId);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    filterType.forEach((item) => {
      totalPrice += item.wage * item.acreage;
    });
    return totalPrice;
  };

  return (
    <>
      <div className="quote-price">
        <Typography variant="h5" gutterBottom>
          Giá tạm tính:
        </Typography>
        <Typography variant="h6" gutterBottom className="price">
          {getTotalPrice().toLocaleString()}
          <span className="price-text">
            {/* {getTotalPrice() > 0 ? "có tính thêm tiền công" : ""} */}
          </span>
        </Typography>
      </div>
      <div>
        <Box sx={{ minWidth: 120, marginBottom: "30px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Công trình</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              name="type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value="PENHOUSE">Penthouse</MenuItem>
              <MenuItem value="DEPARTMENT">Chung cư</MenuItem>
              <MenuItem value="HOUSE">Nhà ở</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {filterType.length > 0 && (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Sản phẩm</TableCell>
                <TableCell align="center">Loại hình</TableCell>
                <TableCell align="center">Mô tả</TableCell>
                <TableCell align="center">Diện tích</TableCell>
                <TableCell align="center">Đơn vị</TableCell>
                <TableCell align="center">Thành tiền</TableCell>
                <TableCell align="center">Hình ảnh</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterType?.map((el, index) => {
                return (
                  <>
                    <TableRow
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {el.product}
                      </TableCell>
                      <TableCell align="center">{el.scale}</TableCell>
                      <TableCell align="center">{el.description}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <input
                          type="number"
                          min={0}
                          value={el.acreage}
                          onChange={(e) => handleChange(e, index)}
                        />
                      </TableCell>
                      <TableCell align="center"> {el.unit}</TableCell>
                      <TableCell align="center">
                        {" "}
                        {(el.wage * el.acreage).toLocaleString()}
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
      )}

      {check && (
        <Typography variant="text" gutterBottom className="note-quote">
          Báo giá trên chỉ mang tính chất tham khảo do chưa có số liệu công
          trình thực tế, và có tính thêm tiền công dựa vào diện tích công trình.
          Vui lòng liên hệ sale account qua Fanpage Nội thất My House:
          https://www.facebook.com/noithat.myhouse hoặc hotline/zalo:
          https://zalo.me/0703937521 để được tư vấn đo đạc chính xác nhất.
        </Typography>
      )}
      {filterType.length > 0 && (
        <div>
          <Button onClick={handleClick}>
            {check ? "Đã đọc xong" : "Xem thêm"}
          </Button>
        </div>
      )}
    </>
  );
};

export default FormQuote;
