import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useNavigate, Link } from "react-router-dom";
import Feedback from "./Feedback";
const IntroDetailProperty = ({ property, idProperty }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#cccc",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const navigate = useNavigate();

  return (
    <div className="marginT-30 marginB-150">
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img src={property.images[0]} className="image-detailproperty" />
          <div className="inline">
            <Typography variant="h6" className="black-detailproperty">
              Thiết kế nội thất &nbsp;{" "}
              <Typography variant="subtitle1" className="black-detailproperty">
                {property.description}
              </Typography>
            </Typography>
          </div>
          <div className="">
            <span className="inline marginT-30">
              <KeyboardDoubleArrowRightIcon /> Xem thêm: &nbsp;{" "}
              <Link>Mẫu thiết kế nội thất chung cư</Link>
            </span>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Vật liệu công trình
              <img
                src={property.material[0]}
                className="image-detailproperty"
              />
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Báo giá combo
              <img src={property.combo[0]} className="image-detailproperty" />
            </Typography>
          </div>
          <Feedback idProperty={idProperty} />
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Typography variant="h5" className="black-detailproperty">
              Dự án liên quan
            </Typography>
            <div className="related-box">
              <img src={property.images[1]} className="image-related" />
              <Typography variant="h6">Bản mẫu thiết kế nội thất</Typography>
            </div>
            <div className="related-box">
              <img src={property.images[2]} className="image-related" />
              <Typography variant="h6">Bản mẫu thiết kế nội thất</Typography>
            </div>
            <Button
              variant="contained"
              color="warning"
              onClick={() => navigate("/quotation")}
            >
              Báo giá ngay
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default IntroDetailProperty;
