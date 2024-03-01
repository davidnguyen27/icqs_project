import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./UserManage.css";
import { useDispatch } from "react-redux";
import { createAccount } from "../../../redux/actions/authAction";

const CreateUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataRegister, setDataRegister] = React.useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  });

  const handleChange = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAccount(dataRegister));
    setDataRegister({
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "",
    });
  };
  return (
    <>
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
        <ArrowBackIosIcon />
      </div>
      <div className="form-create">
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Email"
          margin="normal"
          value={dataRegister.email}
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Số điện thoại"
          margin="normal"
          name="phone"
          value={dataRegister.phone}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Họ và tên"
          margin="normal"
          name="name"
          value={dataRegister.name}
          onChange={(e) => handleChange(e)}
        />
        <TextField
          required
          fullWidth
          id="outlined-required"
          label="Mật khẩu"
          margin="normal"
          name="password"
          value={dataRegister.password}
          onChange={(e) => handleChange(e)}
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Chức vụ</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={dataRegister.role}
            fullWidth
            margin="normal"
            name="role"
            onChange={(e) => handleChange(e)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ADMIN">Admin</MenuItem>
            <MenuItem value="STAFF">Staff</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="outlined"
        className="create-button"
        onClick={(e) => handleSubmit(e)}
      >
        Tạo
      </Button>
    </>
  );
};

export default CreateUser;
