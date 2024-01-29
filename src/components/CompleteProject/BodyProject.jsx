import { Button, Container, Grid } from '@mui/material';
import React from 'react';

function BodyProject() {
  return (
    <div className="container-bodyimage">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <div className="box-bodyimage">
              <div className="image-container">
                <img src="https://www.lanha.vn/wp-content/uploads/2024/01/dsc03249-hdr-1200x800.jpg.webp" />
              </div>
              <span className="text-bodyimage">VINHOME Q9 - HIỆN ĐẠI - 100TR</span>
            </div>
          </Grid>
        ))}
      </Grid>
      <Button className="button-bodyimage">XEM THÊM</Button>
    </div>
  );
}

export default BodyProject;
