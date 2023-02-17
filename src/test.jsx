// Enviroment
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


// CSS
import './ProductPageMobile.css';

// Components


// Buying Feature
import IconMinus from "./images/icon-minus.svg"
import IconPlus from "./images/icon-plus.svg"
import IconCart from "./images/icon-cart.svg"




const ProductCardMobile = ( {props} ) => {

  // Getting data from product
  const {companyName, productName, productDescription, img1, img2, img3, img4} = props.data;



  // Image Preview Feature   // Image Preview Feature  // Image Preview Feature
  // Carousel Image Rotation Index
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };




 // Shopping Item Counter Feature // Shopping Item Counter Feature // Shopping Item Counter Feature
//  Set Counter Add Subtract Count
 const [count, setCount] = useState(0);

 const handleAddProduct = () => {
   setCount(count + 1);
 };

 const handleSubtractProduct = () => {
   if (count > 0) {
     setCount(count - 1);
   }
 };


 // Shopping Price Setting
 const [price, setPrice] = useState(250);
 const [discount, setDiscount] = useState(50);

 const actualPrice = price;
 const discountedPrice = price - (price * discount) / 100;

 

 // Add to Item to Cart Feature
 const handleAddToCart = () => {
   console.log(`Added ${count} product(s) to the cart.`);
 };




  return (
    <div className='CardContainer'>

    {/* Carousel Image Tab */} {/* Carousel Image Tab */} {/* Carousel Image Tab */}
      <div className='CarouselContainer'>
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
              <Carousel.Item interval={20000}>
                  <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                  />
              </Carousel.Item>
              <Carousel.Item interval={20000}>
                  <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  />
              </Carousel.Item>
              <Carousel.Item interval={20000}>
                  <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                  />
              </Carousel.Item>
              <Carousel.Item interval={20000}>
                  <img
                  className="d-block w-100"
                  src={img4}
                  alt="Third slide"
                  />
              </Carousel.Item>
          </Carousel>
      </div>

      {/* Product Information Tab */} {/* Product Information Tab */} {/* Product Information Tab */}
      <div  className='ProductInformationContainer'>

        {/* Product Brand */}
        <div className='ProductCompany'>

          <p>
            {companyName}
          </p>

        </div>

        {/* Product Name */}
        <div  className='ProductName'>

          <p>
            {productName}
          </p>

        </div>

        {/* Product Description */}
        <div className='ProductDescription'>

          <p>
            {productDescription}
          </p>

        </div>



        {/* Product Price Feature */}  {/* Product Price Feature */}  {/* Product Price Feature */}
        {/* Price, Discount and Actual Price */}
        <div className='PricingContainer'>

          <div className='PriceActual'>
            <p>
              {"$" + discountedPrice}
            </p>
          </div>

          <div className='PriceDiscountBox'>

          </div>
          <div className='PriceDiscount'>
            <p>
              {discount + "%"} 
            </p>
          </div>

          <div className='PriceOld'>
            <p>
              {"$" + price}
            </p>
          </div>

        </div>

        {/* Product Add and Subtract */}
      <div className='ItemCounterContainer'>
        <div className='ItemCounterBackground'></div>

            <div className='MinusButton'>
            <button onClick={handleSubtractProduct}><img src={IconMinus} alt="Subtract Icon"/></button>
            </div>

            <p className='Count'>
            <span>{count}</span>
            </p>

            <div className='PlusButton'>
            <button onClick={handleAddProduct}><img src={IconPlus} alt="Add Icon" /></button>
            </div>

        </div>

        {/* Product Add to Cart */}
        <div className='CartButtonContainer'>

            <button className='CartButton' onClick={handleAddToCart}> <img className='CartIcon' src={IconCart} alt="Cart Icon" /> Add to Cart</button>

        </div>



        
      </div>

    </div>
  );
}

// this gets exported to ProductPageMobile
export default ProductCardMobile;