import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Typography } from "@mui/material";
import ModalImage from "./ModalImage";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPayment,
  getPaymentByAccount,
} from "../../redux/actions/paymentAction";
import { formatDate } from "../../Utils/FormatDate";
import { getToken } from "../../Utils/Token";

const TablePayment = () => {
  const dispatch = useDispatch();
  const token = getToken();
  useEffect(() => {
    dispatch(getPaymentByAccount());
  }, [dispatch, token]);

  const payments = useSelector((state) => state.paymentReducer.paymentData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container>
      <Typography variant="h4" style={{ margin: "30px 0" }}>
        Lịch sử thanh toán
      </Typography>
      {payments?.data?.userPay?.length !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ngày</TableCell>
                <TableCell align="center">Nội dung</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
                <TableCell align="center">Hình ảnh</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments?.data?.userPay?.map((item) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {formatDate(item.createdAt)}
                  </TableCell>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell
                    align="center"
                    style={{
                      color:
                        item.status == "FINISHED"
                          ? "green"
                          : item.status == "PENDING"
                          ? "orange"
                          : "red",
                    }}
                  >
                    {item.status}
                  </TableCell>
                  <TableCell align="center">
                    <Button onClick={handleOpen}>Xem chi tiết</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px",
          }}
        >
          Bạn không có lịch sử giao dịch nào
        </div>
      )}

      <ModalImage open={open} handleClose={handleClose} />
    </Container>
  );
};

export default TablePayment;
