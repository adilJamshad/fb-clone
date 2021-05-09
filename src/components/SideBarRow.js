import { Avatar } from '@material-ui/core';
import React from 'react'
import "./sidebarrow.css"

const SideBarRow = ( {src, title, Icon}) => {
    return (
        <div className="side-bar-row">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    )
}

export default SideBarRow;