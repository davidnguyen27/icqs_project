import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../components/Header/Header";
import { Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getContractByUser } from "../../redux/actions/contractAction";
import { formatDate } from "../../Utils/FormatDate";
import { compareAsc } from "date-fns";

const Contract = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getContractByUser());
  }, []);
  const userContract = useSelector(
    (state) => state.contractReducer.contractData
  );
  const data = userContract?.data?.userContract;

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4" gutterBottom>
          Hợp đồng báo giá
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ngày báo giá</TableCell>
                <TableCell align="center">Ngày hoàn thành</TableCell>
                <TableCell align="center">Nội dung</TableCell>
                <TableCell align="center">Trạng thái</TableCell>
                <TableCell align="center">Hợp đồng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el) => (
                <TableRow
                  key={el.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {formatDate(el.createdAt)}
                  </TableCell>
                  <TableCell align="center">
                    {compareAsc(el.createdAtDate, el.updatedAtDate) === 0 ? (
                      <span>{formatDate(el.updatedAt)}</span>
                    ) : (
                      "chưa xác định"
                    )}
                  </TableCell>
                  <TableCell align="center">{el.title}</TableCell>
                  <TableCell align="center">{el.status}</TableCell>
                  <TableCell align="center">{el.contract}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Contract;
