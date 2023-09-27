// Environment
import React, {useContext, useState} from "react";


// CSS
import "./CartItemMobile.css"

// Components
import RemoveIcon from "../images/icon-delete.svg";
import { ShopContext } from "../shop-context";


import image1 from "../images/image-product-1.jpg"



// this gets exported to NavItemShoppingCartMobile
export default function CartItem(props) {


    // Getting data from product
    const {productName, images, productPrice, productDiscount, id} = props.data;
  
    // Setting Prices
    const actualPrice = (productPrice * productDiscount) / 100;

    // here we deconstruct and extract functions from Context.Provider wrapper
    const {cartItems, removeFromCart,   } = useContext(ShopContext);



    const totalPrice = actualPrice*cartItems[id];

    


  return (
    <div className='CartItemContainer'>
   
      <div >

        <div >
          <img className='CartItemImage' src={image1} alt="ProductImage" />
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
