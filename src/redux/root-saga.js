import { all, call } from "redux-saga/effects";
import { fetchCollections } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export function* rootSaga() {
  yield all([
    call(fetchCollections),
    call(userSagas)
  ])
}
