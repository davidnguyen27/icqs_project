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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createFeedback,
  getFeedbackType,
} from "../../redux/actions/feedbackAction";
import { format } from "date-fns";
import { formatDate } from "../../Utils/FormatDate";

const Feedback = ({ idProperty }) => {
  const user = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [page, setPage] = useState(2);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const handleComment = (e) => {
    e.preventDefault();
    const feedback = {
      rating: rating,
      comment: comment,
    };
    dispatch(createFeedback(feedback, idProperty.id));
    setRating(0);
    setComment("");
  };
  useEffect(() => {
    dispatch(getFeedbackType("", ""));
  }, [handleComment]);
  const feedbacks = useSelector((state) => state.feedbackReducer.feedbackData);
  const filterFeedback = feedbacks?.data?.feedback?.filter(
    (item) => item.property_id === idProperty.id
  );

  return (
    <div className="feedback-container">
      <Typography variant="h5" gutterBottom>
        Đánh giá dự án
      </Typography>
      <Divider />
      <br />
      {filterFeedback.map((el, index) => (
        <div key={index}>
          <div>
            <Grid container spacing={2} className="user-feedback">
              <Grid item xs={1}>
                <Avatar
                  alt={el.name}
                  src="/static/images/avatar/1.jpg"
                  style={{ height: "50px", width: "50px" }}
                />
              </Grid>
              <Grid item xs={11}>
                <div className="user-name-feedback">
                  <Typography variant="body2" gutterBottom>
                    {el.name}
                  </Typography>
                  <Rating name="simple-controlled" value={el.rating} />
                  <br />
                  <Typography variant="caption" gutterBottom>
                    {formatDate(el.createdAt)}
                  </Typography>
                </div>
                <Typography variant="body1" gutterBottom>
                  {el.comment}
                </Typography>
              </Grid>
            </Grid>
          </div>
          <br />
        </div>
      ))}
      <Divider />
      <br />
      {/* <Stack spacing={2}>
        <Pagination
          count={Math.ceil(filterFeedback?.length / 3) + 1}
          color="primary"
          onClick={(e) => setPage(parseFloat(e.target.innerText) + 1)}
        />
      </Stack> */}
      <br />
      {user && (
        <div>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <div className="input-comment-feedback">
            <input
              value={comment}
              placeholder="Comment"
              onChange={(e) => setComment(e.target.value)}
            />
            <SendIcon
              className="icon-comment"
              onClick={(e) => handleComment(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
