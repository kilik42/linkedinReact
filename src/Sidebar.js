import React from 'react';
import "./Sidebar.css";
import {Avatar} from "@material-ui/core";
function Sidebar() {

    const recentItem = (topic) => {
        <div className="sidebar__recentItem" >
            <span className="sidebar__hash"> # </span>
            <p>{topic}</p>
        </div>       
    }
    return (
        <div className='sidebar'>
            {/* <h1>I am a sidebar</h1> */}

            <div className="sidebar__top">
                <img src="https://urbanarray.org/wp-content/uploads/2018/08/IMG_20180806_130403-495x400.jpg" alt=""/>
                <Avatar className='sidebar__avatar' />
                <h2>Marvin Evins</h2>
                <h4>marvinevins@gmail.com</h4>

            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                 <div className="sidebar__stat">
                    <p>Views on Post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>


            <div className="sidebar__bottom">
                <p>Recent</p>
                
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software engineering")}
                {recentItem("design")}
                {recentItem("developer")}


            </div>
        </div>
    )
}

export default Sidebar
