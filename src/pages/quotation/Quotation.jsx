import React, { useState } from "react";
import { Button, Container, Grid, Typography, colors } from "@mui/material";
import "./Quotation.css";
import { useDispatch, useSelector } from "react-redux";
import { createContract } from "../../redux/actions/contractAction";
import { Bounce, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import Header from "../../components/Header/Header";

function Quotation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const user = useSelector((state) => state.authReducer.authData);

  const formik = useFormik({
    initialValues: {
      title: "",
      name: "",
      address: "",
      phone: "",
      construction: "",
      scale: "",
      budget: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Vui lòng nhập nội dung"),
      name: Yup.string().required("Vui lòng nhập tên"),
      address: Yup.string().required("Vui lòng nhập địa chỉ"),
      phone: Yup.string()
        .required("Vui lòng nhập số điện thoại")
        .matches(/^[0-9]+$/, "Chỉ chứa số")
        .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
        .max(15, "Số điện thoại không được vượt quá 15 chữ số"),
      construction: Yup.string().required("Vui lòng chọn công trình"),
      scale: Yup.string().required("Vui lòng chọn quy mô"),
      budget: Yup.string().required("Vui lòng chọn ngân sách"),
    }),
    onSubmit: (values) => {
      if (!user) {
        toast.error("Vui lòng đăng nhập mới gửi yêu cầu báo giá!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        return;
      } else {
        dispatch(createContract(values));
        setCheck(true);
        toast.success("báo giá thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setTimeout(() => navigate("/"), 3000);
      }
      formik.handleReset();
    },
  });

  return (
    <>
      <Header />
      <Container>
        <div>
          <Typography variant="h5" gutterBottom>
            Báo giá theo yêu cầu
          </Typography>
        </div>
        <form onSubmit={formik.handleSubmit} className="form-quotaion">
          <div>
            <label className="label-title">NỘI DUNG</label>
            <br />
            <input
              type="text"
              className="w-100 input-style"
              name="title"
              value={formik.values.title}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.errors.title && formik.touched.title && (
              <small style={{ color: "red" }}>{formik.errors.title}</small>
            )}
          </div>
          <div className="form-information">
            <div className="row">
              <label className="label-title">Họ và tên</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.name && formik.touched.name && (
                <small style={{ color: "red" }}>{formik.errors.name}</small>
              )}
            </div>
            <div className="margin-l">
              <label className="label-title">Địa chỉ</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="address"
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.address && formik.touched.address && (
                <small style={{ color: "red" }}>{formik.errors.address}</small>
              )}
            </div>
            <div className="margin-l">
              <label className="label-title">Số điện thoại</label>
              <br />
              <input
                type="text"
                className="input-style w-300"
                name="phone"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone && (
                <small style={{ color: "red" }}>{formik.errors.phone}</small>
              )}
            </div>
          </div>
          <div className="form-select">
            <div className="row">
              <label className="label-title">Công trình</label>
              <br />
              <select
                name="construction"
                className="w-300"
                value={formik.values.construction}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option value=""> -- công trình -- </option>
                <option value="Chung cư">Chung cư</option>
                <option value="Biệt thự">Biệt thự</option>
                <option value="Nhà phố">Nhà phố</option>
              </select>
              {formik.errors.construction && formik.touched.construction && (
                <small style={{ color: "red" }}>
                  {formik.errors.construction}
                </small>
              )}
            </div>
            <div className="margin-l">
              <label className="label-title">Quy mô </label>
              <br />
              <select
                name="scale"
                className="w-300"
                value={formik.values.scale}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option value=""> -- quy mô -- </option>
                <option value="1 phòng ngủ">1 phòng ngủ</option>
                <option value="2 phòng ngủ">2 phòng ngủ</option>
                <option value="3 phòng ngủ">3 phòng ngủ</option>
              </select>
              {formik.errors.scale && formik.touched.scale && (
                <small style={{ color: "red" }}>{formik.errors.scale}</small>
              )}
            </div>
            <div className="margin-l">
              <label className="label-title">Ngân sách</label>
              <br />
              <select
                name="budget"
                className="w-300 select"
                value={formik.values.budget}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              >
                <option value=""> -- ngân sách -- </option>
                <option value="Dưới 50 triệu">Dưới 50 triệu</option>
                <option value="Từ 50 đến 100 triệu">Từ 50 đến 100 triệu</option>
                <option value="Trên 100 triệu">Trên 100 triệu</option>
              </select>
              {formik.errors.budget && formik.touched.budget && (
                <small style={{ color: "red" }}>{formik.errors.budget}</small>
              )}
            </div>
          </div>
          {check && (
            <p className="alert-text">
              Bạn vui lòng chờ chúng tôi trong vòng 24 giờ sẽ có người liên hệ
              lại bạn. Xin chân thành cảm ơn vì đã chọn chúng tôi !
            </p>
          )}

          <Button
            type="submit"
            className="button"
            variant="contained"
            color="success"
          >
            Gửi yêu cầu
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Quotation;
