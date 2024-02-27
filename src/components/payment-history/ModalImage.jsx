import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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
const ModalImage = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Hình ảnh chuyển khoản
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <img
            src="https://kenh14cdn.com/203336854389633024/2023/4/5/bill-gia-1680693402068526066261.jpg"
            className="payment-image"
          />
        </Typography>
      </Box>
    </Modal>
  );
};

export default ModalImage;
