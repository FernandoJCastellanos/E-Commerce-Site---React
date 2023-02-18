// Environment
import React from 'react';

// CSS


// Components
import NavMobile from './Mobile/NavMobile';
// import NavDesktop from './Desktop/NavDesktop';




function NavBar() {
    return (
        <div>
            <NavMobile  />
            {/* <NavDesktop /> */}
        </div>
    );
}
// this gets exported App.js
export default NavBar;