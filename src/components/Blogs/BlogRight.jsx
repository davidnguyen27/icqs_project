import React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
const BlogRight = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <Item className="container-bodyright">
        <img
          src="https://noithatmanhhe.vn/media/26730/dang-ki-nhan-bao-gia-noi-that-manh-he.png"
          className="image-bodyright"
        />
        <div className="form-bodyright">
          <form action="/action_page.php">
            <input type="text" id="fname" name="fname" placeholder="Họ và tên" />
            <br />

            <input type="text" id="lname" name="lname" placeholder="Số điện thoại" />
            <br />
            <br />
            <Button variant="contained" color="success">
              {' '}
              Liên hệ tư vấn
            </Button>
          </form>
        </div>
      </Item>
    </>
  );
};

export default BlogRight;
