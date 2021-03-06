import { takeLatest, call, put } from 'redux-saga/effects'
import { ShopActionTypes } from './shop.action-types'
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions'

export function* fetchCollectionsStartAsync() {

  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)

    yield put(fetchCollectionsSuccess(collectionsMap))

  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollections() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsStartAsync
  )
}
