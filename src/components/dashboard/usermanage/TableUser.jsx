import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ModalEdit from "./ModalEdit";

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

const TableUser = ({ listUser, page }) => {
  const [open, setOpen] = React.useState(false);
  const [idUser, setIdUser] = React.useState(undefined);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleEdit = (id) => {
    handleOpen();
    setIdUser(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Tên người dùng</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Số điện thoại</StyledTableCell>
            <StyledTableCell align="right">Role</StyledTableCell>
            <StyledTableCell align="right">Chức năng</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listUser?.map((el) => (
            <StyledTableRow key={el.id}>
              <StyledTableCell component="th" scope="row">
                {el.name}
              </StyledTableCell>
              <StyledTableCell align="right">{el.email}</StyledTableCell>
              <StyledTableCell align="right">{el.phone}</StyledTableCell>
              <StyledTableCell align="right">{el.role}</StyledTableCell>
              <StyledTableCell align="right">
                <div>
                  {/* <span>
                    <DeleteIcon className="delete-icon" />
                  </span> */}
                  <span onClick={() => handleEdit(el.id)}>
                    <EditIcon className="edit-icon" />
                  </span>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ModalEdit
        open={open}
        handleClose={handleClose}
        idUser={idUser}
        page={page}
      />
    </TableContainer>
  );
};

export default TableUser;
