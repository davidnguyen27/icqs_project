
import React, { useState } from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import './ImageGallery.css'

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Grid container spacing={2}>
      {images.map((image, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Card
            className={`image-card ${index === selectedImage ? 'selected' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <CardMedia
              component="img"
              alt={image.alt}
              height="140"
              image={image.src}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ImageGallery;
