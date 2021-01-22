import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import HomeIcon from "@material-ui/icons/Home";
import SupevisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {useDispatch} from "react-redux";
import {auth} from "./firebase";
import {logout} from "./features/userSlice";
function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
           dispatch(logout());
            auth.signOut();
    } 

    return (
        <div className ="header">


            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

                <div className="header__search">
                    {/* material ui search icon */}

                    <SearchIcon />

                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption  Icon ={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupevisorAccountIcon} title='My Network'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
               <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOption avatar="https://avatars3.githubusercontent.com/u/5193842?s=460&u=f648333ff92bd185712e7bc0f19cfbf8ede85eab&v=4" title="me" onCLick={logoutOfApp}/>


            </div>
        </div>
    )
}

export default Header
