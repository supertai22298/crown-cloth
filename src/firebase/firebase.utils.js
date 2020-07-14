import firebase from 'firebase/app'
import 'firebase/analytics';
import 'firebase/storage'
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
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.storage()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
