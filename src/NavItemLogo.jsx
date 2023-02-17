// Environment
import React from 'react';

// CSS

// Components
import logo from './images/logo.svg';



function NavItemLogo() {
    return (
            <picture>
                <img src={logo} alt="Sneaker-Logo" />
            </picture>
    );
}
// this gets exported NavMobile
export default NavItemLogo;