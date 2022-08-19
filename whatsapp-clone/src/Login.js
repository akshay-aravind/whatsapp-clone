import { Button } from '@mui/material'
import React from 'react'
import './Login.css'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { provider } from './firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

function Login() {
  const [dispatch] = useStateValue()
  const auth = getAuth()
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://www.freepnglogos.com/uploads/whatsapp-png-logo-1.png'
          alt=''
        />
        <div className='logn__text'>
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default Login
