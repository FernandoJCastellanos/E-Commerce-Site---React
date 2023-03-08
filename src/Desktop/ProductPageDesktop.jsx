// Environment
import React from 'react';
// import Test from "./test.jsx"

// CSS
import './ProductPageDesktop.css';

// Components

import ProductList  from "../data.json";
import ProductCardDesktop from './ProductCardDesktop.jsx';




function ProductPageDesktop() {
    return (
        <div>
            {ProductList.map((product)=>(
                <ProductCardDesktop data={product} key={product.id}  />
            ))}
        </div>
    );
}
// this gets exported to ProductPage
export default ProductPageDesktop;