// Environment
import React, {useState, useContext} from "react";
import { ShopContext } from "../shop-context";



import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"

// CSS
import './ProductPageDesktop.css';

// Components

// Buying Feature
import IconMinus from "../images/icon-minus.svg"
import IconPlus from "../images/icon-plus.svg"
import IconCart from "../images/icon-cart.svg"



const ProductCardMobile = (props) => {

    // Getting data from product
    const {companyName, productName, productDescription, productPrice, productDiscount, id} = props.data;

    const images = [image1, image2, image3,image4 ]
    // here we deconstruct and extract functions from Context.Provider wrapper
    const { addToCart, count, handleAddProduct, handleSubtractProduct } = useContext(ShopContext);


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
    
    const FirstImage = images[0]
    const setFirstImage = FirstImage

    const [ mainImageState, setMainImageState ] = useState(setFirstImage);

    const HandleSetMainImageState = (url) => {
        setMainImageState(url)
    }


return (
    <div className="ProductPageContainerDesktop" >
        {/* Image Container */}{/* Image Container */}{/* Image Container */}
        <div className="ImageContainerDesktop">
            <div  >
                <img className="MainImageDesktop" src={mainImageState} alt="MainImageDisplay" />
            </div>
            <div className="SmallImageContainerDesktop" >
                {images.map((j) => {
                    return (
                    <div >
                        <button className="ButtonImageDesktop" onClick={() => HandleSetMainImageState(j)}  >
                            <img className="SmallImageDesktop" src={j} alt=" shoe" />
                        </button>
                    </div>
                    )})}
            </div>
        </div>

        <div className="ProductContainerDesktop" >
            {/* Product Information Tab */} {/* Product Information Tab */} {/* Product Information Tab */}
            <div className='ProductInformationContainerDesktop'  >
                {/* Product Brand */}
                <div>
                    <p className="ProductCompanyDesktop">
                        {companyName}
                    </p>
                </div>
                {/* Product Name */}
                <div  className='ProductNameContainerDesktop'>
                    <p className="ProductNameDesktop">
                        {productName}
                    </p>
                </div>
                {/* Product Description */}
                <div className='ProductDescriptionContainerDesktop'>
                    <p className="ProductDescriptionDesktop">
                        {productDescription}
                    </p>
                </div>
            </div>


            {/* Product Price Feature */}  {/* Product Price Feature */}  {/* Product Price Feature */}
            {/* Price, Discount and Actual Price */}
            <div className='PricingContainerDesktop'>
                <div className='PriceActualDesktop'>
                    <p>
                    {"$" + actualPrice}
                    </p>
                </div>

                
                <div className='PriceDiscountDesktop'>
                    <div className='PriceDiscountBoxDesktop'></div>
                        <p>
                        {discount + "%"} 
                        </p>
                    </div>

                    <div className='PriceOldDesktop'>
                        <p>
                        {"$" + price}
                        </p>
                    </div>
                </div>


            {/* Product Add and Subtract */}
            <div className="ShoppingContainerDesktop">
                <div className='ItemCounterContainerDesktop'>
                    <div className='ItemCounterBackgroundDesktop'></div>

                        <div className='MinusButtonDesktop'>
                            <button onClick={handleSubtractProduct}><img src={IconMinus} alt="Subtract Icon"/></button>
                        </div>

                        <p className='CountDesktop'>
                            <span>{count}</span>
                        </p>

                        <div className='PlusButtonDesktop'>
                            <button onClick={handleAddProduct}><img src={IconPlus} alt="Add Icon" /></button>
                        </div>
                    </div>

                    {/* Product Add to Cart */}
                    <div className='CartButtonContainerDesktop'>

                        <button className='CartButtonDesktop' onClick={() => addToCart(id, count)}>
                            <img className='CartIconDesktop' src={IconCart} alt="Cart Icon" /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
    </div>

);


}
// this exports to ProductPageDesktop
export default ProductCardMobile;