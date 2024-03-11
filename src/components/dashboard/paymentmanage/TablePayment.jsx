import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ModalEdit from "./ModalEdit";
import ModalImage from "./ModalImage";
import { useDispatch, useSelector } from "react-redux";
import { getAllPayment } from "../../../redux/actions/paymentAction";
import { formatDate } from "../../../Utils/FormatDate";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// const data = [
//   {
//     id: 1,
//     createdAt: "04/23/2024",
//     title: "Chị quyên chuyển khoản",
//     money: 300000000,
//     status: "PENDING",
//     image:
//       "https://inkythuatso.com/uploads/thumbnails/800/2023/03/hinh-anh-chuyen-tien-thanh-cong-vietcombank-1-07-12-28-47.jpg",
//   },
// ];

const TablePayment = ({ title }) => {
  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  const [openImage, setOpenImage] = React.useState(false);
  const handleOpenImage = () => setOpenImage(true);
  const handleCloseImage = () => setOpenImage(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllPayment(5, "", title));
  }, [title]);
  const payments = useSelector((state) => state.paymentReducer.paymentData);
  const data = payments?.data?.payment?.rows;

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ngày giao dịch</StyledTableCell>
              <StyledTableCell align="center">Số tiền</StyledTableCell>
              <StyledTableCell align="center">Nội dung</StyledTableCell>
              <StyledTableCell align="center">Trạng thái</StyledTableCell>
              <StyledTableCell align="left">Hình ảnh</StyledTableCell>
              <StyledTableCell align="center">Cập nhật</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((el) => (
              <StyledTableRow key={el.id}>
                <StyledTableCell component="th" scope="row">
                  {formatDate(el.createdAt)}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {el.money.toLocaleString()}
                </StyledTableCell>
                <StyledTableCell align="center">{el.title}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  style={{
                    color:
                      el.status === "PENDING"
                        ? "orange"
                        : el.status === "FINISHED"
                        ? "green"
                        : "red",
                    fontWeight: "bold",
                  }}
                >
                  {el.status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Avatar src={el.image} onClick={handleOpenImage} />
                </StyledTableCell>
                <StyledTableCell align="center" onClick={handleOpenEdit}>
                  <EditIcon />
                </StyledTableCell>
              </StyledTableRow>
            ))}
            <ModalImage open={openImage} handleClose={handleCloseImage} />
            <ModalEdit open={openEdit} handleClose={handleCloseEdit} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablePayment;
