// Environment
import React, {useState, useContext} from 'react';

// CSS
import "./NavBarMobile.css";

// Components
import iconCart from "../images/icon-cart.svg";
import { ShopContext } from "../shop-context";
import CartItemMobile from "./CartItemMobile";
import ProductList from "../data";



function NavItemShoppingCartMobile() {

    const { cartItems, itemQuantity, ItemQuantityContainerVisibility   } = useContext(ShopContext);

    // ShoppingCart Class to hide/show menu
    const [ShoppingCartMenuVisibility, setShoppingCartMenuVisibility] = useState("ShoppingCartHiddenMobile");

    // ShoppingCart BaseStatus
    const [ShoppingCartStatus, setShoppingCartStatus] = useState(false);


    // ShoppingCart Trigger Function
    const ShoppingCartTrigger = () => {
        // Trigger is showing the menu
        if(!ShoppingCartStatus) {
            setShoppingCartMenuVisibility("ShoppingCartMenuShowMobile")
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
        <button onClick={ShoppingCartTrigger}>
                {/* Item Quantity Badge */}
                {itemQuantity > 0 ? (
                <div>
                    <p className='ItemQuantityMobile'>{itemQuantity}</p>
                </div>
                ) : (
                    <div></div>
                )}
            <img  src={iconCart} alt="Shopping Cart Icon" />
        </button>
            
  


        <div className={ShoppingCartMenuVisibility}>
            <div className='ShoppingCartMenuBoxMobile'>
                <div className='ShoppingCartMenuTitleMobile'>
                    <p>
                        Cart
                    </p>             
                </div>
                <hr className='CartHRMobile'/>
                <div className='ShoppingCartMenuCartMobile'>
                        {/* turned off for bug, turn back on */}
                        {ProductList.map((product) => {
                            if (cartItems[product.id] !== 0) {
                                return <CartItemMobile data={product}/>
                            } else {
                                return <p className='ShoppingCartNoItemsMobile'>No items in cart.</p>
                            }
                            
                        })}
                </div>
            </div>
        </div>



    </div>
    );
}
// this gets exported NavMobile
export default NavItemShoppingCartMobile;