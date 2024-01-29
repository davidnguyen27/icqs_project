import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useNavigate, Link } from 'react-router-dom';
import Feedback from './FeedBack';

const IntroDetailProperty = ({ property }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#cccc',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();
  return (
    <div className="marginT-30 marginB-150">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img src={property.images} className="image-detailproperty" />
          <div className="inline">
            <span className="blue-detailproperty bold fs-20">
              Thiết kế nội thất <span className="black-detailproperty fs-16">{property.description}</span>
            </span>
          </div>
          <div className="">
            <span className="inline marginT-30">
              <KeyboardDoubleArrowRightIcon /> Xem thêm: &nbsp; <Link>Mẫu thiết kế nội thất chung cư</Link>
            </span>
          </div>
          <Feedback />
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h5" className="black-detailproperty">
              Dự án liên quan
            </Typography>
            <div className="related-box">
              <img
                src="https://noithatibizvietnam.vn/wp-content/uploads/2021/07/TANG-1-KHACH-BEP-11.png"
                className="image-related"
              />
              <Typography variant="h6">Mẫu thiết kế nội thất shophouse đẹp</Typography>
            </div>
            <div className="related-box">
              <img
                src="https://noithatibizvietnam.vn/wp-content/uploads/2021/07/TANG-1-KHACH-BEP-11.png"
                className="image-related"
              />
              <Typography variant="h6">Mẫu thiết kế nội thất shophouse đẹp</Typography>
            </div>
            <Button variant="contained" color="warning" onClick={() => navigate('/quotation')}>
              Báo giá ngay
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default IntroDetailProperty;
