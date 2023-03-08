// Environment
import React from 'react';
// import Test from "./test.jsx"

// CSS
import './ProductPageMobile.css';

// Components

import ProductList  from "../data.json";
import ProductCardMobile from './ProductCardMobile.jsx';




function ProductPageMobile() {

    return (
        <div>
            {ProductList.map((product)=>(
                <ProductCardMobile data={product} key={product.id}  />
            ))}
        </div>
    );
}
// this gets exported to ProductPage
export default ProductPageMobile;