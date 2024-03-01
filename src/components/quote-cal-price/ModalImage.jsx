import { Box, Modal, Typography } from "@mui/material";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const ModalImage = ({ open, handleClose, imageId, data }) => {
  const product = imageId && data.filter((item) => item.id === imageId)[0];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img
              src={product?.image}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ModalImage;
