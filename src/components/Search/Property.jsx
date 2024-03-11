import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Property = ({ properties }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container className="container-notfound">
      <Typography variant="h4">Những thiết kế nội thất bạn tìm kiếm</Typography>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: "30px" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {properties?.data?.property.rows.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Card sx={{ maxWidth: 345 }} onClick={() => handleClick(item.id)}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.images[0]}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ maxHeight: "30px", overflow: "hidden" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ maxHeight: "20px", overflow: "hidden" }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Property;
