import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch, useSelector } from "react-redux";
import { getContractByStaff } from "../../../redux/actions/contractAction";
import ModalRequest from "./ModalRequest";
import { getToken } from "../../../Utils/Token";

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
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableRequest = () => {
  const [open, setOpen] = React.useState(false);
  const [contractId, setContractId] = React.useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getContractByStaff("", ""));
  }, []);
  const listContract = useSelector(
    (state) => state.contractReducer.contractData
  );
  const handleClick = (id) => {
    handleOpen();
    setContractId(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Trạng thái</StyledTableCell>
            <StyledTableCell align="center">Nội dung</StyledTableCell>
            <StyledTableCell align="center">Tên</StyledTableCell>
            <StyledTableCell align="center">Địa chỉ</StyledTableCell>
            <StyledTableCell align="center">Số điện thoại</StyledTableCell>
            <StyledTableCell align="center">Chi tiết</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listContract?.data?.contract?.map((el) => (
            <StyledTableRow key={el.id}>
              <StyledTableCell
                component="th"
                scope="row"
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
              <StyledTableCell align="center">{el.title}</StyledTableCell>
              <StyledTableCell align="center">{el.name}</StyledTableCell>
              <StyledTableCell align="center">{el.address}</StyledTableCell>
              <StyledTableCell align="center">{el.phone}</StyledTableCell>
              <StyledTableCell
                align="center"
                onClick={() => handleClick(el.id)}
              >
                <VisibilityIcon />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <ModalRequest
          open={open}
          handleClose={handleClose}
          contractId={contractId}
          listContract={listContract}
        />
      </Table>
    </TableContainer>
  );
};

export default TableRequest;
