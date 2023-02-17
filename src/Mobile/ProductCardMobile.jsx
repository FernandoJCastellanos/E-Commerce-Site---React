// Environment
import React, {useState, useContext} from "react";
import Carousel from 'react-bootstrap/Carousel';
import { ShopContext } from "../shop-context";

// CSS
import './ProductPageMobile.css';

// Components

// Buying Feature
import IconMinus from "../images/icon-minus.svg"
import IconPlus from "../images/icon-plus.svg"
import IconCart from "../images/icon-cart.svg"





const ProductCardMobile = (props) => {

    // Getting data from product
    const {companyName, productName, productDescription, img1, img2, img3, img4, productPrice, productDiscount, id} = props.data;

    // here we deconstruct and extract functions from Context.Provider wrapper
    const { addToCart, count, handleAddProduct, handleSubtractProduct, itemQuantity } = useContext(ShopContext);


    // Image Preview Feature   // Image Preview Feature  // Image Preview Feature
    // Carousel Image Rotation Index
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    
    // Shopping Price Setting
    const [price, setPrice] = useState(productPrice);
    const [discount, setDiscount] = useState(productDiscount);

    const actualPrice = price - (price * discount) / 100;





return (
    <div >

         {/* Carousel Image Tab */} {/* Carousel Image Tab */} {/* Carousel Image Tab */}
        <div className='CarouselContainer'>
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
                <Carousel.Item interval={30000}>
                  <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={30000}>
                  <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={30000}>
                  <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={30000}>
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
            <div className='ProductCompanyContainer'>
                <p className="ProductCompany">
                    {companyName}
                </p>
            </div>
            {/* Product Name */}
            <div  className='ProductNameContainer'>
                
                <p className="ProductName">
                    {productName}
                </p>
            </div>
            {/* Product Description */}
            <div className='ProductDescriptionContainer'>
                <p className="ProductDescription">
                    {productDescription}
                </p>
            </div>
        </div>


        {/* Product Price Feature */}  {/* Product Price Feature */}  {/* Product Price Feature */}
        {/* Price, Discount and Actual Price */}
        <div className='PricingContainer'>
          <div className='PriceActual'>
            <p>
              {"$" + actualPrice}
            </p>
          </div>

         
          <div className='PriceDiscount'>
          <div className='PriceDiscountBox'></div>
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

          <button className='CartButton' onClick={() => addToCart(id, count)}>
            <img className='CartIcon' src={IconCart} alt="Cart Icon" /> Add to Cart
          </button>

        </div>

    </div>


);


}
export default ProductCardMobile;