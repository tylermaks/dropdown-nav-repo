import React, {useState} from "react"
import DropDown from "./DropDown"
import Login from "./Login"
import "../Assets/styles/NavBar/NavBar.css"

import logo from "../Assets/images/logo.svg"
import menu from "../Assets/images/icon-menu.svg"
import arrowIcon from "../Assets/images/icon-arrow-down.svg"



function NavBar(props){
    
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(true)

    const handleClick = i => {
        if(selected === i){ 
            setOpen(!open)
        } else if(selected !== i){
            setOpen(true)
        }
        
        setSelected(i)
    }

    return(
        <nav className="nav-bar">
            <div className="nav-inner nav-inner--left">
                <img className="logo" src={logo} alt="Logo" />
                <div className="list-container">
                    <ul className="list">
                        {
                            props.links.map((link, index) => {

                                const arrow = index <= 1 ? <img key={index} className="arrow" src={arrowIcon} alt="Arrow" /> :null;

                                return(
                                    <li key={index} className="nav-link" onClick={() => handleClick(index)}>
                                        {link} {arrow}
                                    </li>
                                )
                            })
                        }

                    </ul>

                        {
                            props.links.slice(0,2).map((link, index) => (
                                <DropDown
                                    key={index}
                                    id={index}
                                    link={link}
                                    selected={selected}
                                    open={open}
                                />
                            ))

                        }
                </div>
            </div>

            <div className="nav-inner nav-inner--right">
                <img 
                    onClick={props.clicked}
                    className="menu" 
                    src={menu} 
                    alt="Hamburger Menu" 
                />
                <Login id="desktop-login"/>
            </div>
       
        </nav>
    )
}

export default NavBar;