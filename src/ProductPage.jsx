// Environment
import React from 'react';

// CSS

// Components
import ProductPageMobile from "./Mobile/ProductPageMobile";
// import ProductPageDesktop from "./ProductPageDesktop";





function ProductPage() {
    return (
        <div>
            <ProductPageMobile  />
            {/* <ProductPageDesktop /> */}
        </div>
    );
}
// this gets exported to App.js
export default ProductPage;