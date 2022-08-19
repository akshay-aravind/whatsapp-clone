import React, { useEffect, useState } from 'react'
import './App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'
import Pusher from 'pusher-js'
import axios from './axios'
import Login from './Login'
import { useStateValue } from './StateProvider'

function App() {
  const [{ user }] = useStateValue()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data)
    })
  }, [])
  useEffect(() => {
    const pusher = new Pusher('67bc4f57674ddd36fecd', {
      cluster: 'eu',
    })

    const channel = pusher.subscribe('messages')
    channel.bind('inserted', (newMesssage) => {
      // alert(JSON.stringify(newMesssage));
      setMessages([...messages, newMesssage])
    })
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
  console.log(messages)
  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar messages={messages} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  )
}

export default App
