// Environment
import React, {createContext, useState} from "react";
import { useMediaQuery } from '@material-ui/core';
// CSS


// Components
import  ProductList  from "./data";

// Creating ShopContext empty Object to inject into the return(), this is the Empty Context
export const ShopContext = createContext(null);


// This is the standard empty cart
// This is an empty cart until we add the ID into the object
const getDefaultCart = () => {
    let cart = {};

    for (let i = 1; i < ProductList.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}





const ShopContextProvider = (props) => {

    // Set Initial Cart State
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const [itemQuantity, setItemQuantity ] = useState(0);


    // Add and Remove Functionality from C0art
    const addToCart = (itemId, count) => {
        setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] + count}));
        setItemQuantity (itemQuantity + count);
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        setItemQuantity (itemQuantity - 1);
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

   


    const isMobile = useMediaQuery('(max-width: 1020px)');



    


    // this is how we export and import functions to other components with ContextAPI
    const contextValue = { removeFromCart, cartItems, addToCart, count, handleAddProduct, handleSubtractProduct, itemQuantity, isMobile };

        console.log(cartItems);
    return(
        // You pass down contextValue object that has other functions injected into it
        // You pass it down as a value attribute so you can deconstruct it in other components
        // this is how we package and transfer functions from components
        <ShopContext.Provider value={contextValue} >
        {props.children}
        </ShopContext.Provider>
    )
};
export default ShopContextProvider