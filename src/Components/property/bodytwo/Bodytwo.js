import React from 'react'
import ImageGallery from './ImageGallery';
import './ImageGallery.css'

export default function Bodytwo() {
  const images = [
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 1' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 2' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 3' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 4' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 5' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 6' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 7' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 8' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 9' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 10' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 11' },
    { src: 'https://homehome.vn/wp-content/uploads/6-mau-hinh-anh-noi-that-nha-dep-theo-phong-cach-hien-dai-6.jpg', alt: 'Image 12' },
    // Add more images as needed
  ];

    
  return (
    <div>
    <hr/>
    <div className="a">Một số hình ảnh đẹp</div>
    <ImageGallery images={images} />
  </div>
  )
}
