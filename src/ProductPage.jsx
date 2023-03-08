// Environment
import React, { useContext } from 'react';

// CSS

// Components
import ProductPageMobile from "./Mobile/ProductPageMobile";
import ProductPageDesktop from "./Desktop/ProductPageDesktop";

import { ShopContext } from "./shop-context";



function ProductPage() {

    const { isMobile } = useContext(ShopContext);


    return (
        <div>
            {/* <ProductPageMobile  /> */}

            { isMobile ? (
                <ProductPageMobile  />
            ) : (
                <ProductPageDesktop />
            )}
            
        </div>

    );
}
// this gets exported to App.js
export default ProductPage;