import { Container, Grid, Typography, Button } from '@mui/material';
import './Body.css';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchProperties } from '../../redux/actions/propertyAction';
import { useNavigate } from 'react-router-dom';
const urlImg = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1668485966810-bcaa10f47781?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1621525278689-4779d647a9f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1635899076834-5c8989a82d6d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://images.unsplash.com/photo-1601288496920-b6154fe3626a?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const BodyPart1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchProperties('', page, limit));
  }, [page, limit]);
  const properties = useSelector((state) => state?.propertyReducer.propertyData);
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <Container maxWidth="xl" style={{ padding: '20px 0' }}>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        textTransform="uppercase"
        marginBottom="10px"
        noWrap
      >
        Implemented Project
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          {properties?.data?.property.rows.map((item, index) => (
            <Grid item xs={6} sm={4} md={4} lg={4} key={index}>
              <img
                src={item.images}
                alt={`Image ${index}`}
                className="img-style"
                onClick={() => handleClick(item.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Button className="btn-view-more" onClick={() => navigate('/complete-project')}>
          Xem thêm
        </Button>
      </Container>
    </Container>
  );
};

export default BodyPart1;