import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD7qiNfnSY97YSZeoAZMJccub2X5WqTGkI',
  authDomain: 'whatsapp-clone-52414.firebaseapp.com',
  projectId: 'whatsapp-clone-52414',
  storageBucket: 'whatsapp-clone-52414.appspot.com',
  messagingSenderId: '562574707204',
  appId: '1:562574707204:web:e7fa0d8c3bcb9bafa14351',
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
export default db
