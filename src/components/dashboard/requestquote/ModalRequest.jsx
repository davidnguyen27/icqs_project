import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { formatDate } from "../../../Utils/FormatDate";
import { ref, uploadBytes } from "firebase/storage";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { storage } from "../../../Utils/Firebase";
import { pdfFile } from "../../../Utils/PdfFile";
import { useDispatch } from "react-redux";
import { editContract } from "../../../redux/actions/contractAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalRequest = ({ open, handleClose, contractId, listContract }) => {
  const dispatch = useDispatch();
  const filterContract = listContract?.data?.contract?.filter(
    (item) => item.id === contractId
  )[0];
  const [dataContract, setDataContract] = React.useState({});
  const [selectedFile, setSelectedFile] = React.useState(null);
  React.useEffect(() => {
    setDataContract({ ...filterContract });
  }, [contractId]);

  const handleChange = (e) => {
    setDataContract({ ...dataContract, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a PDF file to upload.");
      return;
    }
    const userId = filterContract?.userId;
    const storageRef = ref(storage, userId);
    try {
      await uploadBytes(storageRef, selectedFile);
      alert("Upload successful!");
      const linkPdf = pdfFile(userId);
      setDataContract({ ...dataContract, contract: `${linkPdf}` });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the file.");
    }
  };

  const handleEdit = (e) => {
    dispatch(editContract(dataContract, contractId));
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="text">
          Ngày gửi yêu cầu {formatDate(dataContract?.createdAt)}
        </Typography>
        <div className="form">
          <TextField
            id="outlined-required"
            label="Tên"
            margin="normal"
            fullWidth
            value={dataContract?.name}
          />
          <TextField
            className="mr-l-20"
            id="outlined-required"
            label="Địa chỉ"
            margin="normal"
            fullWidth
            value={dataContract?.address}
          />
        </div>
        <div className="form mr-t-20">
          <TextField
            required
            id="outlined-required"
            label="Số điện thoại"
            margin="normal"
            fullWidth
            value={dataContract?.phone}
          />
          <TextField
            className="mr-l-20"
            required
            id="outlined-required"
            label="Quy mô"
            margin="normal"
            fullWidth
            value={dataContract?.scale}
          />
        </div>
        <div className="form mr-t-20">
          <TextField
            required
            id="outlined-required"
            label="Công trình"
            margin="normal"
            fullWidth
            value={dataContract?.construction}
          />
          <TextField
            className="mr-l-20"
            required
            id="outlined-required"
            label="Tài chính"
            margin="normal"
            fullWidth
            value={dataContract?.budget}
          />
        </div>
        <div className="form mr-t-20">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Trạng thái
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={dataContract?.status}
              fullWidth
              margin="normal"
              name="status"
              onChange={(e) => handleChange(e)}
            >
              <MenuItem value="PENDING">Pending</MenuItem>
              <MenuItem value="FINISHED">Finished</MenuItem>
              <MenuItem value="CANCEL">Cancel</MenuItem>
            </Select>
          </FormControl>
          <div className="contract mr-l-20">
            <span>
              Hợp đồng:
              <a href={dataContract?.contract}>
                {" "}
                {dataContract?.contract ? "download" : "Chưa có hợp đồng"}{" "}
              </a>
            </span>

            <input
              type="file"
              accept=".pdf"
              className="mr-l-20"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <Button onClick={handleUpload}>Nộp hợp đồng</Button>
        <Button onClick={handleEdit}>Chỉnh sửa</Button>
      </Box>
    </Modal>
  );
};

export default ModalRequest;
