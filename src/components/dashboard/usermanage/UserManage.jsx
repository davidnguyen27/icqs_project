import React, { useEffect, useState } from "react";
import { Button, Divider, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../../redux/actions/userAction";
import TableUser from "./TableUser";
import "./UserManage.css";

const UserManage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getUser(5, page + 1, email));
  }, [page, email]);
  const handlePagination = (e) => {
    e.preventDefault();
    const getPage = parseInt(e.target.innerText);
    setPage(getPage);
  };
  const [users, setUsers] = useState([]);
  const listUserData = useSelector((state) => state.userReducer.userData);
  useEffect(() => {
    setUsers(listUserData.data?.user?.rows);
  }, [listUserData]);

  return (
    <>
      <div className="user-title">Quản lý người dùng</div>
      <div>
        <div className="user-layer1">
          <input
            placeholder="Tìm kiếm..."
            className="user-input-search"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            className="user-button"
            onClick={() => navigate("/create-staff")}
          >
            Tạo nhân viên
          </Button>
        </div>
        <Divider />
        <div className="user-table">
          <TableUser listUser={users} page={page} email={email} />
        </div>
        <div className="user-pagination">
          <Pagination
            count={2}
            variant="outlined"
            onClick={(e) => handlePagination(e)}
          />
        </div>
      </div>
    </>
  );
};

export default UserManage;
