// Enviroment
import React, { useState } from 'react';

// CSS
import './NavBarMobile.css';

// Components

// Assets
import BurgerImage from "../images/icon-menu.svg";
import CloseIcon from "../images/icon-close.svg";


function NavItemBurgerMobile() {


    
    // Burger useState class
    const [BurgerVisibility, setBurgerMenu] = useState('NavBarHidden');
    const [GreyBackgroundVisibility, setGreyBackgroundVisibility] = useState('GrayBackgroundOff');

    // Burger Trigger to setBurgerMenu
    const [burgerStatus, setBurgerStatus] = useState(false);
   
        // Burger Click Function to Setoff Trigger
        const BurgerClick = () => {
            if(!burgerStatus) {
                // Classes to apply to setBurgerMenu
                setBurgerMenu("NavBarBurgerShow")
                setGreyBackgroundVisibility("GrayBackgroundOn")
            }
            else {
                // Classes to apply to setBurgerMenu
                setBurgerMenu("NavBarHidden")
                setGreyBackgroundVisibility("GrayBackgroundOff")
            }

            // Burger Status Switcher
            setBurgerStatus(!burgerStatus)
        };




    return (
    <div className='BurgerContainerMobile'>

        <div className='BurgerIconMobile'>
            <button onClick={BurgerClick}>
                <img  src={BurgerImage} alt="Dropdown Menu"/>
            </button>
        </div>
       
        <div className={BurgerVisibility}>
            <nav className="BurgerMenuMobile">
                <div>
                    <button className='NavBarItemCloseMobile' onClick={BurgerClick}>
                        <img  src={CloseIcon} alt="Dropdown Menu"/>
                    </button>
                    <a className="NavBarItemTextMobile" href=''>
                        <p>
                            Collections
                        </p>
                    </a>
                    <a className="NavBarItemTextMobile" href=''>
                        <p>
                            Men
                        </p>
                    </a>
                    <a className="NavBarItemTextMobile" href=''>
                        <p>
                            Women
                        </p>
                    </a>
                    <a className="NavBarItemTextMobile" href=''>
                        <p>
                            About
                        </p>
                    </a>
                    <a className="NavBarItemTextMobile" href=''>
                        <p>
                            Contact
                        </p>
                    </a>
                </div>
            </nav>
        </div>
  
        <div className={GreyBackgroundVisibility}>

        </div>

    </div>

    );
}
// this gets exported NavMobile
export default NavItemBurgerMobile;