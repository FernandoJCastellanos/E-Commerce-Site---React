// Enviroment
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// CSS
import './ProductPageMobile.css';

// Components
import ImageProduct1 from "./images/image-product-1.jpg";
import ImageProduct2 from "./images/image-product-2.jpg";
import ImageProduct3 from "./images/image-product-3.jpg";
import ImageProduct4 from "./images/image-product-4.jpg";


function ProductImagePreviewMobile() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


   return (
    <div className='CarouselContainer'>
        <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
            <Carousel.Item interval={20000}>
                <img
                className="d-block w-100"
                src={ImageProduct1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={20000}>
                <img
                className="d-block w-100"
                src={ImageProduct2}
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={20000}>
                <img
                className="d-block w-100"
                src={ImageProduct3}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={20000}>
                <img
                className="d-block w-100"
                src={ImageProduct4}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

// this gets exported to ProductPageMobile
export default ProductImagePreviewMobile;