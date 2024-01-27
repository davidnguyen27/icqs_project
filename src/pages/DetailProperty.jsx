import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import { Button, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './DetailProperty.css';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProperties } from '../redux/actions/propertyAction';

const DetailProperty = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const idProperty = useParams();
  const dispatch = useDispatch();
  const properties = useSelector((state) => state?.propertyReducer.propertyData);
  useEffect(() => {
    dispatch(getSearchProperties(''));
  }, [idProperty.id]);
  const property = properties?.data?.property.filter((item) => item.id === idProperty.id)[0];

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h4">Mẫu thiết kế nội thất {property.style} đẹp, ấn tượng nhất 2023</Typography>
        <div>
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
                  <KeyboardDoubleArrowRightIcon /> Xem thêm: &nbsp;{' '}
                  <Link>Mẫu thiết kế nội thất chung cư</Link>
                </span>
              </div>
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
                <Button variant="contained" color="warning">
                  Xem Thêm
                </Button>
              </Item>
            </Grid>
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default DetailProperty;
