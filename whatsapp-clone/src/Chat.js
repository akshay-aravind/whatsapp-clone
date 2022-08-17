import { AttachFile, MoreVert, SearchOutlined } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import React, { useState } from 'react';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css';
import axios from './axios';

function Chat({ messages }) {
    const [input,setInput] = useState("");
    const sendMessage = async (e) =>{
        e.preventDefault();
    await axios.post('/messages/new',{
       message: input,
       name: "Kshay",
       timestamp: "9:30",
       received : true,
        });
      setInput('');
    };
  return (
    <div className='chat'>
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
            <h3>Room Name</h3>
            <p>Last Seen at ..</p>
        </div>
        <div className="chat__headerRight">
           <IconButton>
            <SearchOutlined />
           </IconButton> 
           <IconButton>
            <AttachFile />
           </IconButton> 
           <IconButton>
            <MoreVert />
           </IconButton> 
         </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
             <p className={`chat__message ${message.received && "chat__receiver" }`}>
             <span className="chat__name">{message.name}</span>
             {message.message}
             <span className="chat__timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>
    <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
            <input type="text" value={input} onChange= {e => setInput(e.target.value)}
            placeholder="Type a message" />
            <button onClick={sendMessage} type="submit">Send</button>
       </form>
        <MicIcon />
    </div>
    </div>
  )
}

export default Chat