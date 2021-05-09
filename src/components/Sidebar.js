import React from 'react';
import "./sidebar.css";
import SideBarRow from "./SideBarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat"
import StoreFrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideBarRow src="" title="Adil" />
            <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 information Center" />
            <SideBarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SideBarRow Icon={PeopleIcon} title="Friends" />
            <SideBarRow Icon={ChatIcon} title="Messanger" />
            <SideBarRow Icon={StoreFrontIcon} title="Marketplace" />
            <SideBarRow Icon={VideoLibraryIcon} title="Videos" />
            <SideBarRow Icon={ExpandMoreOutlinedIcon} title="More" />

        </div>
    )
}


export default Sidebar