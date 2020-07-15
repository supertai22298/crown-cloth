import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDMaucyZuD18us7uhjd3Q-ybdxPaAYWIRY',
  authDomain: 'crown-cloth-c5b55.firebaseapp.com',
  databaseURL: 'https://crown-cloth-c5b55.firebaseio.com',
  projectId: 'crown-cloth-c5b55',
  storageBucket: 'crown-cloth-c5b55.appspot.com',
  messagingSenderId: '719208016948',
  appId: '1:719208016948:web:26dc7d09e8993360a5ae61',
  measurementId: 'G-S1DEG9VFY4',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email, phoneNumber, photoURL } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        photoURL,
        displayName,
        email,
        phoneNumber,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  return userRef
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
