import React, { useState } from "react";
import Header from "../../components/Header/Header";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./Quotation.css";
import { useDispatch } from "react-redux";
import { createContract } from "../../redux/actions/contractAction";
function Quotation() {
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const [contractData, setContractData] = useState({
    title: "",
    name: "",
    address: "",
    phone: "",
    construction: "",
    scale: "",
    budget: "",
  });
  const handleClick = () => {
    dispatch(createContract(contractData));
    setCheck(true);
    setContractData({
      title: "",
      name: "",
      address: "",
      phone: "",
      construction: "",
      scale: "",
      budget: "",
    });
  };
  const handleChange = (e) => {
    setContractData({ ...contractData, [e.target.name]: e.target.value });
  };
  console.log(contractData);
  return (
    <>
      <Header />
      <Container>
        <div>
          <Typography variant="h5" gutterBottom>
            Báo giá theo yêu cầu
          </Typography>
        </div>
        <div className="form-quotaion">
          <div>
            <label className="label-title">NỘI DUNG</label>
            <br />
            <input
              type="text"
              className="w-100 input-style"
              name="title"
              value={contractData.title}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-information">
            <div className="row">
              <label className="label-title">Tên</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="name"
                value={contractData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="margin-l">
              <label className="label-title">Địa chỉ</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="address"
                value={contractData.address}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="margin-l">
              <label className="label-title">Số điện thoại</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="phone"
                value={contractData.phone}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="form-select">
            <div className="row">
              <label className="label-title">Công trình</label>
              <br />
              <select
                name="construction"
                className="w-300"
                value={contractData.construction}
                onChange={(e) => handleChange(e)}
              >
                <option value=""> -- công trình -- </option>
                <option value="Chung cư">Chung cư</option>
                <option value="Biệt thự">Biệt thự</option>
                <option value="Nhà phố">Nhà phố</option>
              </select>
            </div>
            <div className="margin-l">
              <label className="label-title">Quy mô </label>
              <br />
              <select
                name="scale"
                className="w-300"
                value={contractData.scale}
                onChange={(e) => handleChange(e)}
              >
                <option value=""> -- quy mô -- </option>
                <option value="1 phòng ngủ">1 phòng ngủ</option>
                <option value="2 phòng ngủ">2 phòng ngủ</option>
                <option value="3 phòng ngủ">3 phòng ngủ</option>
              </select>
            </div>
            <div className="margin-l">
              <label className="label-title">Ngân sách</label>
              <br />
              <select
                name="budget"
                className="w-300 select"
                value={contractData.budget}
                onChange={(e) => handleChange(e)}
              >
                <option value=""> -- ngân sách -- </option>
                <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                <option value="Từ 50 đến 100 triệu">Từ 50 đến 100 triệu</option>
                <option value="Trên 100 triệu">Trên 100 triệu</option>
              </select>
            </div>
          </div>
          {check && (
            <p className="alert-text">
              Bạn vui lòng chờ chúng tôi trong vòng 24 giờ sẽ có người liên hệ
              lại bạn. Xin chân thành cảm ơn vì đã chọn chúng tôi !
            </p>
          )}

          <Button
            className="button"
            variant="contained"
            color="success"
            onClick={() => handleClick()}
          >
            Gửi yêu cầu
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Quotation;
