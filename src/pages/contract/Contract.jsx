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
import { getToken } from "../../Utils/Token";
import { Link } from "react-router-dom";
import PublishIcon from "@mui/icons-material/Publish";

const Contract = () => {
  const dispatch = useDispatch();
  const token = getToken();
  React.useEffect(() => {
    dispatch(getContractByUser());
  }, [dispatch, token]);
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
                <TableCell align="center">Nộp bản hợp đồng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((el) => (
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
                  <TableCell
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
                  </TableCell>
                  <TableCell align="center">
                    {el.contract && <Link to={el.contract}>Hợp đồng</Link>}
                  </TableCell>
                  <TableCell align="center">
                    <PublishIcon />
                  </TableCell>
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
