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

import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"




const ProductCardMobile = (props) => {

    // Getting data from product
    const {companyName, productName, productDescription, img1, productPrice, productDiscount, id} = props.data;
    const images = [image1, image2, image3,image4 ]
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


  // console.log(images);


return (
    <div >

         {/* Carousel Image Tab */} {/* Carousel Image Tab */} {/* Carousel Image Tab */}
        <div className='CarouselContainerMobile'>

      
          <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>

            {images.map((j) => (
            <Carousel.Item interval={30000}>
                <img
                className="d-block w-100"
                src={j}
                alt="shoe" />
            </Carousel.Item>
            ))}

            </Carousel>
        </div>


        {/* Product Information Tab */} {/* Product Information Tab */} {/* Product Information Tab */}
        <div  className='ProductInformationContainerMobile'>
            {/* Product Brand */}
            <div>
                <p className="ProductCompanyMobile">
                    {companyName}
                </p>
            </div>
            {/* Product Name */}
            <div  className='ProductNameContainerMobile'>
                
                <p className="ProductNameMobile">
                    {productName}
                </p>
            </div>
            {/* Product Description */}
            <div className='ProductDescriptionContainerMobile'>
                <p className="ProductDescriptionMobile">
                    {productDescription}
                </p>
            </div>
        </div>


        {/* Product Price Feature */}  {/* Product Price Feature */}  {/* Product Price Feature */}
        {/* Price, Discount and Actual Price */}
        <div className='PricingContainerMobile'>
          <div className='PriceActualMobile'>
            <p>
              {"$" + actualPrice}
            </p>
          </div>

         
          <div className='PriceDiscountMobile'>
          <div className='PriceDiscountBoxMobile'></div>
            <p>
              {discount + "%"} 
            </p>
          </div>

          <div className='PriceOldMobile'>
            <p>
              {"$" + price}
            </p>
          </div>

        </div>


        {/* Product Add and Subtract */}
        <div className='ItemCounterContainerMobile'>
            <div className='ItemCounterBackgroundMobile'></div>

                <div className='MinusButtonMobile'>
                    <button onClick={handleSubtractProduct}><img src={IconMinus} alt="Subtract Icon"/></button>
                </div>

                <p className='CountMobile'>
                    <span>{count}</span>
                </p>

                <div className='PlusButtonMobile'>
                    <button onClick={handleAddProduct}><img src={IconPlus} alt="Add Icon" /></button>
                </div>
        </div>

        {/* Product Add to Cart */}
        <div className='CartButtonContainerMobile'>

          <button className='CartButtonMobile' onClick={() => addToCart(id, count)}>
            <img className='CartIconMobile' src={IconCart} alt="Cart Icon" /> Add to Cart
          </button>

        </div>

    </div>


);


}
// this gets exported to ProductPageMobile
export default ProductCardMobile;