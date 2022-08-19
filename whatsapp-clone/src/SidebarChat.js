import { Avatar } from '@mui/material'
import React from 'react'
import './SidebarChat.css'

function SidebarChat({ messages }) {
  console.log(messages.messages.length)
  return (
    <div className='sidebarChat'>
      <Avatar src='https://www.patterns.dev/img/reactjs/react-logo@3x.svg' />
      <div className='sidebarChat__info'>
        <h2>Group React</h2>
        <p>{messages.messages[messages.messages.length - 1]?.message}</p>
      </div>
    </div>
  )
}

export default SidebarChat
