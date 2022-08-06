import React, {useState} from "react"

import DropDown from "./DropDown"

import logo from "../Assets/images/logo.svg"
import menu from "../Assets/images/icon-menu.svg"
import arrowIcon from "../Assets/images/icon-arrow-down.svg"



function NavBar(){
    const links = ["Features", "Company", "Career", "About"];

    const [selected, setSelected] = useState(null)

    const handleClick = i => {
        if(i > 1){ 
            return null
        }

        setSelected(i)
        console.log(selected)
    }

    return(
        <nav className="nav-bar">
            <div className="nav-inner nav-inner--left">
                <img className="logo" src={logo} alt="Logo" />
                <ul className="list">

                    {links.map((link, index) => {
                        const arrow = index <=1 ? <img className="arrow" src={arrowIcon} alt="Arrow" /> : null;

                        return(

                            <li onClick={() => handleClick(index)} className="link">
                                <a  id={index} href=".main">{link}{arrow}</a>
                            </li>
                            )
                        })
                    }
                   
                </ul>
            </div>

            <div className="nav-inner nav-inner--right">
                <img className="menu" src={menu} alt="Hamburger Menu" />
                <a href=".main">Login {selected}</a>
                <button className="register-btn">Register</button>
            </div>

            <DropDown
                navSelect={selected}
            />
        </nav>
    )
}

export default NavBar;