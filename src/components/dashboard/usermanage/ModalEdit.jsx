import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../redux/actions/userAction";
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
const ModalEdit = ({ open, handleClose, idUser }) => {
  const dispatch = useDispatch();
  const listUser = useSelector((state) => state.userReducer.userData);
  console.log(listUser.data.user);
  const filterUser = listUser?.data?.user?.rows.filter(
    (item) => item.id === idUser
  )[0];
  const [dataUpdate, setDataUpdate] = React.useState({});

  useEffect(() => {
    setDataUpdate({ ...filterUser });
  }, idUser);
  const handleChange = (e) => {
    setDataUpdate({ ...dataUpdate, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    dispatch(editUser(dataUpdate, idUser));
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Thông tin người dùng
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Email"
            margin="normal"
            value={dataUpdate?.email}
            name="email"
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Số điện thoại"
            margin="normal"
            name="phone"
            value={dataUpdate?.phone}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Họ và tên"
            margin="normal"
            name="name"
            value={dataUpdate?.name}
            onChange={(e) => handleChange(e)}
          />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Chức vụ
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={dataUpdate?.role}
              fullWidth
              margin="normal"
              name="role"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value="ADMIN">Admin</MenuItem>
              <MenuItem value="STAFF">Staff</MenuItem>
              <MenuItem value="USER">User</MenuItem>
            </Select>
          </FormControl>
        </Typography>
        <Button onClick={(e) => handleEdit(e)}>Chỉnh sửa</Button>
      </Box>
    </Modal>
  );
};

export default ModalEdit;
