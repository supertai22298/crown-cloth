import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.action-types'
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from '../../firebase/firebase.utils'
import { signInFailure, signInSuccess } from './user.actions'

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)

    const userSnapshot = yield userRef.get()
    yield put(
      signInSuccess({
        id: userSnapshot.id,
        ...userSnapshot.data(),
      })
    )
  } catch (error) {}
}
export function* signInWithGoogleAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)

    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogleAsync)
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)

    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onSignInWithEmailAndPassword() {
  yield takeLatest(
    UserActionTypes.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassword
  )
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart), call(onSignInWithEmailAndPassword)])
}
