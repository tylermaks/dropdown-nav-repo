import React from 'react'
import DropDown from '../Components/DropDown';
import Login from "../Components/Login"

import "../Assets/styles/MobileMenu/MobileMenu.css"
import closeMenu from "../Assets/images/icon-close-menu.svg"
import arrow from "../Assets/images/icon-arrow-up.svg"

function MobileMenu(props) {

    const checkMenu = props.mobileMenu ? "mobile-menu-container mobile-menu-container--active" : "mobile-menu-container"

    return(
        <div className={checkMenu}>
            <div className="mobile-menu">
                <img 
                    onClick={props.clicked}
                    className="close-menu-btn" 
                    src={closeMenu} 
                    alt="Close Menu" 
                />
                
                {
                    props.links.map((link, index) => {

                        const upArrow = <img src={arrow} alt="Arrow" />
                        const dropDown = <DropDown id={index} selected={index} open={true}/>

                        return(
                            <div className='link-container'>
                                <span>{link}</span>
                                {index < 2 ? upArrow && dropDown : null}
                            </div>
                        )
                    })
                }
                
                <Login />
            </div>
        </div>
    )
}

export default MobileMenu;