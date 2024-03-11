import React from "react";
import "./Profile.css";
import Header from "../../components/Header/Header";
import { Button, Container, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Profile = () => {
  const usercurrent = useSelector((state) => state.authReducer.authData);
  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={usercurrent.data.user?.avatar}
              className="image-profile"
            />
          </Grid>
          <Grid item xs={8}>
            <Item>
              <TextField
                id="outlined-basic"
                label="Họ và tên"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Điện thoại"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <Item>Avatar</Item>
                </Grid>
                <Grid item xs={6}>
                  <Button>Upload</Button>
                </Grid>
              </Grid>

              <Button
                variant="outlined"
                color="error"
                fullWidth
                style={{ marginTop: "30px" }}
              >
                Chỉnh sửa
              </Button>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Profile;
