// Environment
import React, {useContext, useState} from "react";


// CSS
import "./CartItemDesktop.css";


// Components
import RemoveIcon from "../images/icon-delete.svg";
import { ShopContext } from "../shop-context";

import image1 from "../images/image-product-1.jpg"
import image2 from "../images/image-product-2.jpg"
import image3 from "../images/image-product-3.jpg"
import image4 from "../images/image-product-4.jpg"
export default function CartItem(props) {


    // Getting data from product
    const {companyName, productName, productDescription, productPrice, productDiscount, id} = props.data;
    const images = [image1, image2, image3,image4 ]

    // Setting Prices
    const actualPrice = (productPrice * productDiscount) / 100;

    // here we deconstruct and extract functions from Context.Provider wrapper
    const {cartItems, removeFromCart,   } = useContext(ShopContext);


    const totalPrice = actualPrice*cartItems[id];


    const image = images[0]
    

  return (
    <div className='CartItemContainer'>
   
      <div >

        <div >
          <img className='CartItemImage' src={image} alt="ProductImage" />
        </div>
        
        <div className='CartItemNameContainer'>
          <p className='CartItemName'>{productName}</p>
        </div>

        <div className="CartItemPriceContainer">
          <p className='CartItemPrice'>${actualPrice}.00 x {cartItems[id]} ${totalPrice}</p>
        </div>

        <div>
          <button className='CartItemRemoveIcon' onClick={() => removeFromCart(id)} >
            <img  src={RemoveIcon} alt='RemoveProductIcon'/>
          </button>
        </div>

      </div>
    </div>
  )
}
