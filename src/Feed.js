import React from 'react'
import './Feed.css';
import Post from './Post';
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from './InputOption';
import  SubscriptionsIcon  from '@material-ui/icons/Subscriptions';
import  EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay';

function Feed() {
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text"/>
                            <button type= 'submit'>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} 
                    title='Photo' 
                    color="#70B5F9"/>

                     <InputOption Icon={SubscriptionsIcon} 
                    title='VVideo' 
                    color="#e7A33E"/>

                     <InputOption Icon={EventNoteIcon} 
                    title='Event' 
                    color="#C0CBCD"/> 
                    
                    <InputOption Icon={CalendarViewDayIcon} 
                    title='Write Article' 
                    color="#7FC15E"/>


                    

                </div>
            </div>

            {/* Posts */}

            <Post name="marvin" description ='this is a test' message ='new message'  />
        </div>
    )
}

export default Feed
