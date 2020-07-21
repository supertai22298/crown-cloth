import { ShopActionTypes } from './shop.action-types'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
})
export const fetchCollectionsSuccess = (collections) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
})
export const fetchCollectionsFailure = (errorMessages) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessages,
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')

    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then(async (snapshot) => {
        const collections = convertCollectionSnapshotToMap(snapshot)
        dispatch(fetchCollectionsSuccess(collections))
      })
      .catch((error) => {
        dispatch(fetchCollectionsFailure(error.message))
      })
  }
}
