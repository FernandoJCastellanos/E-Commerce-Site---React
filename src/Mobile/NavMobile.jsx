// Environment
import React from 'react';

// CSS
import "./NavBarMobile.css"

// Components
import NavItemLogo from '../NavItemLogo';
import NavItemBurgerMobile from './NavItemBurgerMobile';
import NavItemShoppingCartMobile from './NavItemShoppingCartMobile';
import NavItemProfileIcon from '../NavItemProfileIcon';





function NavBarMobile() {
    return (
        <div className='NavBarContainerMobile'>
        
                <NavItemBurgerMobile />

            <div className='BrandLogo'>
                <NavItemLogo  />
            </div>
            
            <div className='ShoppingCartIconMobile'>
                <NavItemShoppingCartMobile />
            </div>
            
            <div className="ProfileIconMobile">
                <NavItemProfileIcon />
            </div>
        </div>

    );
}
// this is exported to NavBar
export default NavBarMobile;