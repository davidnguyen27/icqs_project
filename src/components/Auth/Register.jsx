import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Box, Container, Typography } from "@mui/material";
import "../../components/Auth/Auth.css";
import { useNavigate } from "react-router-dom";
import { values } from "lodash";
import { useDispatch } from "react-redux";
import { createAccount } from "../../redux/actions/authAction";
import store from "../../store/ReduxStore";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không đúng định dạng")
        .required("Vui lòng điền email"),
      password: Yup.string()
        .required("Vui lòng nhập mật khẩu")
        .min(8, "Mật khẩu ít nhất 8 kí tự")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Mật khẩu ít nhất bao gồm 1 kí tự in Hoa, 1 kí tự thường, 1 chữ số và 1 kí tự đặc biệt"
        ),
      name: Yup.string().required("Vui lòng điền tên"),

      phone: Yup.string()
        .matches(/^[0-9]+$/, "Chỉ chứa số")
        .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
        .max(15, "Số điện thoại không được vượt quá 15 chữ số"),
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(createAccount(values));
        navigate("/");
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Đã xảy ra lỗi trong quá trình đăng ký");
      }
    },
  });

  return (
    <>
      <Container>
        <div className="box-register">
          <Typography
            variant="h5"
            component="div"
            fontWeight="700"
            textAlign="center"
          >
            Đăng kí
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              label="Email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              fullWidth
              margin="normal"
            />
            {formik.errors.email && formik.touched.email && (
              <p className="message-error">{formik.errors.email}</p>
            )}
            <TextField
              label="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              fullWidth
              margin="normal"
            />
            {formik.errors.password && formik.touched.password && (
              <p className="message-error">{formik.errors.password}</p>
            )}

            <TextField
              label="Họ và tên"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              fullWidth
              margin="normal"
            />
            {formik.errors.name && formik.touched.name && (
              <p className="message-error">{formik.errors.name}</p>
            )}

            <TextField
              label="Phone"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              type="text"
              fullWidth
              margin="normal"
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="message-error">{formik.errors.phone}</p>
            )}

            <Button type="submit" className="registerStyle">
              Đăng kí
            </Button>
            <Button onClick={() => navigate("/")} className="registerStyle">
              Trở về
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default Register;
