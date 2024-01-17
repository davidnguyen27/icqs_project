import { Modal, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, handleClose }) => {
  const [isAuth, setIsAuth] = useState(false);
  // const check = () => {
  //   isAuth ? setIsAuth(true) : setIsAuth(false);
  // };
  console.log(isAuth);
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <TextField label="Username" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          {isAuth && <TextField label="Password" type="password" fullWidth margin="normal" />}

          {!isAuth && <span onClick={() => setIsAuth(true)}>Bạn chưa có tài khoản?</span>}
          {isAuth && <span onClick={() => setIsAuth(false)}>Bạn đã có tài khoản?</span>}
          <Button onClick={handleClose}>{isAuth ? 'Register' : 'Login'}</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
