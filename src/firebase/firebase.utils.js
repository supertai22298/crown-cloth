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
  // const collectionRef = firestore.collection('users')
  const snapShot = await userRef.get()

  // const collectionSnapshot = await collectionRef.get()

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd.forEach((object) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, object)
  })
  return await batch.commit()
}
export const convertCollectionSnapshotToMap = (collection) => {
  const transformCollection = collection.docs.map((doc) => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })
  return transformCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase
