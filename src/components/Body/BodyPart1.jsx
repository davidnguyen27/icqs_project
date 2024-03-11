import { Container, Grid, Typography, Button } from "@mui/material";
import "./Body.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchProperties } from "../../redux/actions/propertyAction";
import { useNavigate } from "react-router-dom";

const BodyPart1 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [limit, setLimit] = useState(6);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSearchProperties("", page, limit));
  }, [page, limit]);
  const properties = useSelector(
    (state) => state?.propertyReducer.propertyData
  );
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container maxWidth="xl" style={{ padding: "20px 0" }}>
      <Typography
        variant="h5"
        component="div"
        textAlign="center"
        textTransform="uppercase"
        marginBottom="10px"
        noWrap
      >
        Dự án của chúng tôi
      </Typography>
      <Container maxWidth="xl">
        <Grid container spacing={2} justifyContent="center">
          {properties?.data?.property.rows.map((item, index) => (
            <Grid item xs={6} sm={4} md={4} lg={4} key={index}>
              <img
                src={item.images[0]}
                alt={`Image ${index}`}
                className="img-style"
                onClick={() => handleClick(item.id)}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          className="btn-view-more"
          onClick={() => navigate("/complete-project")}
        >
          Xem thêm
        </Button>
      </Container>
    </Container>
  );
};

export default BodyPart1;
