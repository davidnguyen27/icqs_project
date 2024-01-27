import { Box, Container, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

const NotFoundSearch = () => {
  return (
    <>
      <Typography variant="h4">Những thiết kế nội thất bạn tìm kiếm</Typography>
      <Container className="container-notfound">
        <SearchIcon className="search-icon-notfound" />
        <Typography variant="h6">
          <b>Nothing Found</b>
        </Typography>
        <Typography variant="subtitle1">
          Apologies, but no results were found. Perhaps searching will help find a related post.
        </Typography>
      </Container>
    </>
  );
};

export default NotFoundSearch;
