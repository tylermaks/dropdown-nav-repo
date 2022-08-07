import React from "react"

import dropdownData from "./dropdownData"

function DropDown(props) {

    const dataSet = props.id === 0 ? dropdownData.slice(0,4) : dropdownData.slice(4)
    const hideImg = props.id === 1 ? {display:"none"} : null

    return(
        <nav id={props.link} className={(props.open && props.id === props.selected) ? "dropdown dropdown--active" : "dropdown"}>
            <ul>
                {
                    dataSet.map(data => {
                        return(
                            <li className="dropdown-link">
                                <img className="icon" src={data.icon} alt="" style={hideImg}/>
                                {data.name}
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default DropDown;