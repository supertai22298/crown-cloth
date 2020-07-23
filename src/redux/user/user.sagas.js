import { takeLatest, put, all, call } from 'redux-saga/effects'
import UserActionTypes from './user.action-types'
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils'
import { signInFailure, signInSuccess, signOutFailure,signOutSuccess } from './user.actions'

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

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()

    if (!userAuth) return

    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(signInFailure(error))
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signOutAsync() {
  try {
    yield auth.signOut()
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOutAsync)
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onSignInWithEmailAndPassword),
    call(onCheckUserSession),
    call(onSignOutStart),
  ])
}
