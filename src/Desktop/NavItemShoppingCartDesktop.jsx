// Environment
import React, {useState, useContext} from 'react';

// CSS
import "./NavBarDesktop.css"; 

// Components
import iconCart from "../images/icon-cart.svg"
import { ShopContext } from "../shop-context";
import CartItemDesktop from "./CartItemDesktop";
import ProductList from "../data";



function NavItemShoppingCartDesktop() {

    const { cartItems, itemQuantity, ItemQuantityContainerVisibility   } = useContext(ShopContext);

    // ShoppingCart Class to hide/show menu
    const [ShoppingCartMenuVisibility, setShoppingCartMenuVisibility] = useState("ShoppingCartHidden");

    // ShoppingCart BaseStatus
    const [ShoppingCartStatus, setShoppingCartStatus] = useState(false);


    // ShoppingCart Trigger Function
    const ShoppingCartTrigger = () => {
        // Trigger is showing the menu
        if(!ShoppingCartStatus) {
            setShoppingCartMenuVisibility("ShoppingCartMenuShow")

        }
        // Trigger is hiding the menu
        else {
            setShoppingCartMenuVisibility("ShoppingCartHidden")
        }

        // ShoppingCart Status Switcher
        setShoppingCartStatus(!ShoppingCartStatus)
    };



   
    


    return (
    <div >
        <button  onClick={ShoppingCartTrigger}>
                {/* Item Quantity Badge */}
                {itemQuantity > 0 ? (
                <div>
                    <p className='ItemQuantity'>{itemQuantity}</p>
                </div>
                ) : (
                    <div></div>
                )}
            <img  src={iconCart} alt="Shopping Cart Icon" />
        </button>
            
  


        <div className={ShoppingCartMenuVisibility}>
            <div className='ShoppingCartMenuBox'>
                <div className='ShoppingCartMenuTitle'>
                    <p>
                        Cart
                    </p>             
                </div>
                <hr className='CartHR'/>
                <div className='ShoppingCartMenuCart'>
                        {/* turned off for bug, turn back on */}
                        {ProductList.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItemDesktop data={product}/>
                            } else {
                                return <p className='ShoppingCartNoItems'>No items in cart.</p>
                            }
                            
                        })}
                </div>
            </div>
        </div>



    </div>
    );
}
// this gets exported NavMobile
export default NavItemShoppingCartDesktop;