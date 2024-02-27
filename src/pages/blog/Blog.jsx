import React from "react";
import Header from "../../components/Header/Header";
import { Container, Grid, Pagination, Stack } from "@mui/material";
import BlogLeft from "../../components/blogs/BlogLeft";
import BlogRight from "../../components/blogs/BlogRight";
import "./Blog.css";
import Footer from "../../components/Footer/Footer";
const Blog = () => {
  return (
    <>
      <Header />
      <Container className="blog-container">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <BlogLeft />
            <Stack spacing={2}>
              <Pagination count={10} color="primary" />
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <BlogRight />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Blog;
