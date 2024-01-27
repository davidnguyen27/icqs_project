import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function FbPage() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div className='Item-list'>
    
    <Carousel responsive={responsive}>
            <div className="card">
              <img className="product--image"
              src="https://perfectdesign.vn/uploads/source/quy-trinh-lam-viec/chuyen-dung-do-hoa-noi-that-can-3d-studio.png" 
                    alt="product "></img>
              <h2>HOME</h2>
              <p className="price">1$</p>
              <p>Some desc</p>
              <p>
                <button>Add to cart</button>
              </p>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
    </Carousel>
    </div>
  
  );
}
