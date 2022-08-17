import React from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import {SearchOutlined} from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__header'>
            <Avatar 
            src='https://www.dailypioneer.com/uploads/2019/story/images/big/irfan-khan-back-in-india-2019-02-13.jpg' />
            <div className="sidebar__headerRight">
               <IconButton>
               <DonutLargeIcon />
               </IconButton>
               <IconButton>
               <ChatIcon />
               </IconButton>
               <IconButton>
               <MoreVertIcon />
               </IconButton>
             </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input type="text"
                placeholder='Search or start new chat' />
            </div>
        </div>

    <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
    </div>
    </div>
  )
}

export default Sidebar