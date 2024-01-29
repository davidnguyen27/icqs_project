import React from 'react'
import {  Paper, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import "./ProductSlider.css"
export default function ProductSlider() {
    const products = [
        { id: 1, name: 'Product 1', image: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg' },
        { id: 2, name: 'Product 2', image: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-2.jpg' },
        { id: 3, name: 'Product 3', image: 'https://noithattrevietnam.com/uploaded/2018/08/1-mau-nha-dep-noi-that-hien-dai-can-80m2%20%281%29.jpg' },
        { id: 4, name: 'Product 4', image: 'https://neohouse.vn/wp-content/uploads/2017/07/thiet-ke-noi-that-biet-thu-hien-dai-anh-bia.jpg' },
        { id: 5, name: 'Product 5', image: 'https://hoaphatmiennam.vn/wp-content/uploads/2020/10/anh-noi-that-dep-17.jpg' },
        { id: 6, name: 'Product 6', image: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai.jpg' },
        // Add more products as needed
      ];
    
  const settings = {
    // Set the number of slides to scroll
    slidesToScroll: 3,
    // Customize other settings as needed
    autoPlay: true,
    animation: 'slide',
  };
    return (
        <div className="Image">
                 <Carousel {...settings}>
        {products.map((product) => (
          <Paper key={product.id}>
            <img src={product.image} alt={product.name} />
            <Typography variant="h6">{product.name}</Typography>
          </Paper>
        ))}
        
      </Carousel>
        </div>
       
  )
}
