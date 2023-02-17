// Environment
import React from 'react';

// CSS
import "./NavBarDesktop.css"

// Components
import NavItemLogo from '../NavItemLogo';
import NavItemShoppingCartDesktop from './NavItemShoppingCartDesktop';
import NavItemProfileIcon from '../NavItemProfileIcon';



function NavBarDesktop() {
    return (
        <div className='NavBarDesktopContainer'>

            <div className='NavItemLogoContainer'>
                <NavItemLogo />
            </div>
            <div className='LinkContainer'>
                <a className="NavBarItemTextDeskop" href=''>
                    <p>
                        Collections
                    </p>
                </a>
                <a className="NavBarItemTextDeskop" href=''>
                    <p>
                        Men
                    </p>
                </a>
                <a className="NavBarItemTextDeskop" href=''>
                    <p>
                        Women
                    </p>
                </a>
                <a className="NavBarItemTextDeskop" href=''>
                    <p>
                        About
                    </p>
                </a>
                <a className="NavBarItemTextDeskop" href=''>
                    <p>
                        Contact
                    </p>
                </a>
            </div>
            <div className='NavItemShoppingContainer'>
                <NavItemShoppingCartDesktop />
            </div>
            <div className='NavItemProfileIconContainer'>
                <NavItemProfileIcon />
            </div>

            <hr className='NavDesktopHR'></hr>
     
        </div>

    );
}
// this gets exported to Navbar
export default NavBarDesktop;