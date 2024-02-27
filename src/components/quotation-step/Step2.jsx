import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Step2 = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isQuotation, setIsQuotation] = useState(false);
  const [checkedItems, setCheckedItems] = useState({
    itemone: false,
    itemtwo: false,
    itemthree: false,
  });
  const [data, setData] = useState({
    type: "",
    width: "",
    height: "",
    itemone: "",
    itemtwo: "",
    itemthree: "",
  });
  const [priceType, setPriceType] = useState(0);
  const [priceItem1, setPriceItem1] = useState(0);
  const [priceItem2, setPriceItem2] = useState(0);
  const [priceItem3, setPriceItem3] = useState(0);
  const arrayType = [
    { type: "PENHOUSE", money: 3000000 },
    { type: "HOUSE", money: 1500000 },
    { type: "APARTMENT", money: 500000 },
  ];
  const priceItem = [
    { item: "vận chuyển khó khăn", money: 5000000 },
    { item: "tiêu chí 2", money: 1000000 },
    { item: "tiêu chí 3", money: 2000000 },
  ];

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    arrayType.map((item) => {
      if (item.type === data.type) {
        setPriceType(item.money);
      }
    });
    priceItem.map((el) => {
      if (el.item === data.itemone) {
        setPriceItem1(el.money);
      }
      if (el.item === data.itemtwo) {
        setPriceItem2(el.money);
      }
      if (el.item === data.itemthree) {
        setPriceItem3(el.money);
      }
    });
    setIsQuotation(true);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setData({
      type: "",
      width: "",
      height: "",
      itemone: "",
      itemtwo: "",
      itemthree: "",
    });
    setPriceType(0);
    setPriceItem1(0);
    setPriceItem2(0);
    setPriceItem3(0);
    setIsQuotation(false);
  };

  const amount =
    priceItem1 + priceItem2 + priceItem3 + data.width * data.height * priceType;
  const formattedAmount = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);

  return (
    <>
      <Container>
        <form>
          <div className="form1-quotation">
            <div className="form1-left">
              <label for="fname">Loại dự án</label>
              <select value={data.type} name="type" onChange={handleChange}>
                <option value=""> -- Loại -- </option>
                <option value="PENHOUSE">Penhouse</option>
                <option value="HOUSE">House</option>
                <option value="APARTMENT">Apartment</option>
              </select>
            </div>

            <input
              type="number"
              min={1}
              name="height"
              value={data.height}
              onChange={handleChange}
              placeholder="Chiều dài"
            />
            <input
              type="number"
              min={1}
              name="width"
              value={data.width}
              onChange={handleChange}
              placeholder="Chiều rộng"
            />
          </div>
          <div className="form2-quotation">
            <input
              type="checkbox"
              name="itemone"
              value={"vận chuyển khó khăn"}
              onChange={handleChange}
            />
            <label for="listone"> Di chuyển vận chuyển khó khăn</label>
            <br />
            <input
              type="checkbox"
              name="itemtwo"
              value={"tiêu chí 2"}
              onChange={handleChange}
            />
            <label for="itemtwo"> Tiêu chí 2</label>
            <br />
            <input
              type="checkbox"
              name="itemthree"
              value={"tiêu chí 3"}
              onChange={handleChange}
            />
            <label for="itemthree"> Tiêu chí 3</label>
          </div>
        </form>
        <div>
          <Typography variant="h6" gutterBottom>
            Dự án minh họa
          </Typography>
          <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://www.lanha.vn/wp-content/uploads/2023/07/thi-cong-noi-that-thumb-1-1067x800.jpg.webp"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Penhouse
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {isQuotation &&
            (amount > 0 ? (
              <div className="step2-money">
                <Typography variant="h6" gutterBottom>
                  Báo giá tạm tính
                </Typography>
                <Typography variant="body1" gutterBottom>
                  {formattedAmount}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  <Typography variant="h6" gutterBottom>
                    Danh mục
                  </Typography>
                  <ul className="list-item">
                    <li>
                      <b>Loại:</b> {data.type}
                    </li>
                    <li>
                      <b>Diện tích:</b> {data.width * data.height} m2
                    </li>
                    <li>{!data.itemone ? "<Trống>" : data.itemone}</li>
                    <li>{!data.itemtwo ? "<Trống>" : data.itemtwo}</li>
                    <li>{!data.itemthree ? "<Trống>" : data.itemthree}</li>
                  </ul>
                </Typography>
              </div>
            ) : (
              <div className="step2-money text-error">
                Không thể báo giá. Vui lòng điền các trường trên
              </div>
            ))}

          <div>
            <Button
              variant="contained"
              color="success"
              className="button-quotation-step2"
              onClick={(e) => handleSubmit(e)}
            >
              Báo giá
            </Button>
            <Button
              color="secondary"
              className="button-quotation-step2"
              onClick={(e) => handleReset(e)}
            >
              Reset
            </Button>
            <></>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src="https://www.lanha.vn/wp-content/uploads/2023/07/thi-cong-noi-that-thumb-1-1067x800.jpg.webp"
              className="image-modal-quotation"
            />
          </Box>
        </Modal>
      </Container>
    </>
  );
};

export default Step2;
