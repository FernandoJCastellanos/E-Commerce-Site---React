// Enviroment
import React, {useState} from 'react';

// CSS
import './ProductPageMobile.css';

// Components
import IconMinus from "./images/icon-minus.svg"
import IconPlus from "./images/icon-plus.svg"
import IconCart from "./images/icon-cart.svg"


function ProductPricingFeaturesMobile() {

    // Shopping Item Counter Feature
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
    <div    className='ProductPricingContainer'>

      {/* Product Price Feature */}
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
  );
}

// this gets exported to ProductPageMobile
export default ProductPricingFeaturesMobile;