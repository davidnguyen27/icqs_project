import {
  Avatar,
  Divider,
  Grid,
  Pagination,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";
import { useSelector } from "react-redux";

const Feedback = () => {
  const user = useSelector((state) => state.authReducer.authData);

  const dataUser = [
    {
      name: "duchai123",
      rating: "4",
      comment: "Dự án quá tốt, làm chất lượng, nhân viên quan tâm phục vụ tốt",
      createAt: "28-01-2024",
    },
    {
      name: "theanh",
      rating: "3",
      comment: "Dự án quá tốt, làm chất lượng, nhân viên quan tâm phục vụ tốt",
      createAt: "12-08-2023",
    },
    {
      name: "nhutduy0206",
      rating: "1",
      comment: "Chất lượng phục vụ tệ, nội thất quá nhanh hỏng",
      createAt: "05-07-2023",
    },
  ];
  return (
    <div className="feedback-container">
      <Typography variant="h5" gutterBottom>
        Đánh giá dự án
      </Typography>
      <Divider />
      <br />
      {dataUser.map((user, index) => (
        <div key={index}>
          <div>
            <Grid container spacing={2} className="user-feedback">
              <Grid item xs={1}>
                <Avatar
                  alt={user.name}
                  src="/static/images/avatar/1.jpg"
                  style={{ height: "50px", width: "50px" }}
                />
              </Grid>
              <Grid item xs={11}>
                <div className="user-name-feedback">
                  <Typography variant="body2" gutterBottom>
                    {user.name}
                  </Typography>
                  <Rating name="simple-controlled" value={user.rating} />
                  <br />
                  <Typography variant="caption" gutterBottom>
                    {user.createAt}
                  </Typography>
                </div>
                <Typography variant="body1" gutterBottom>
                  {user.comment}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <br />
        </div>
      ))}
      <Divider />
      <br />
      <Stack spacing={2}>
        <Pagination count={10} color="primary" />
      </Stack>
      <br />
      {user && (
        <div>
          <Rating name="simple-controlled" value={1} />
          <div className="input-comment-feedback">
            <input placeholder="Comment" />
            <SendIcon className="icon-comment" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
