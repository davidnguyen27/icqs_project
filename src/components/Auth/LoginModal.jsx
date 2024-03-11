import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/actions/authAction";
import "../../components/Auth/Auth.css";
import { toast } from "react-toastify";
import store from "../../store/ReduxStore";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, handleClose, setOpenLoginModal }) => {
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
    }),
    onSubmit: async (values) => {
      try {
        await dispatch(userLogin(values));
        const error = store.getState().authReducer.error;
        if (error) {
          toast.error(error);
        } else {
          handleCloseForm();
          toast.success("Đăng nhập thành công");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        toast.error("Đã xảy ra lỗi trong quá trình đăng nhập");
      }
    },
  });
  const handleCloseForm = () => {
    handleClose();
    formik.handleReset();
  };

  return (
    <div>
      <Modal open={open} onClose={handleCloseForm}>
        <Box sx={modalStyle}>
          <Typography variant="h5" component="div" fontWeight="700">
            Đăng nhập
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
            <Button type="submit">Đăng nhập</Button>
            <Button onClick={() => navigate("/register")}>
              Đăng kí tài khoản
            </Button>
            <Button onClick={handleCloseForm}>Hủy</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
