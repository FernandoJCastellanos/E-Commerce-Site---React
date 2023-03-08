// Environment
import React, {useContext, useState} from "react";


// CSS
import "./CartItemDesktop.css";


// Components
import RemoveIcon from "../images/icon-delete.svg";
import { ShopContext } from "../shop-context";


export default function CartItem(props) {


    // Getting data from product
    const {companyName, productName, productDescription, images, productPrice, productDiscount, id} = props.data;
  
    // Setting Prices
    const actualPrice = (productPrice * productDiscount) / 100;

    // here we deconstruct and extract functions from Context.Provider wrapper
    const {cartItems, removeFromCart,   } = useContext(ShopContext);


    const totalPrice = actualPrice*cartItems[id];


    const image1 = images[0]
    

  return (
    <div className='CartItemContainer'>
   
      <div >

        <div >
          <img className='CartItemImage' src={process.env.PUBLIC_URL + image1.url} alt="ProductImage" />
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
