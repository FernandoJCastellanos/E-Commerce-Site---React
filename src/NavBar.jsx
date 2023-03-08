// Environment
import React, { useContext } from 'react';

// CSS


// Components
import NavMobile from './Mobile/NavMobile';
import NavDesktop from './Desktop/NavDesktop';

import { ShopContext } from "./shop-context";


function NavBar() {

    const { isMobile } = useContext(ShopContext);



    return (
        <div>
        {/* <NavMobile  /> */}
            { isMobile ? (
                <NavMobile  />
            ) : (
                <NavDesktop />
            )}
        </div>
    );
}
// this gets exported App.js
export default NavBar;