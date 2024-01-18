import { Modal, Box, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../redux/actions/authAction';

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
  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  
  }
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userLogin(user))
  }
  const userServer = useSelector((state) => state.authReducer.authData)


  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <form>
            <TextField label="Email" name='email' onChange={handleChange} fullWidth margin="normal" />
            <TextField label="Password" name='password' onChange={handleChange} type="password" fullWidth margin="normal" />
            {isAuth && <TextField label="Password" type="password" fullWidth margin="normal" />}

            {!isAuth && <span onClick={() => setIsAuth(true)}>Bạn chưa có tài khoản?</span>}
            {isAuth && <span onClick={() => setIsAuth(false)}>Bạn đã có tài khoản?</span>}
            <Button onClick={handleSubmit}>{isAuth ? 'Register' : 'Login'}</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModal;
