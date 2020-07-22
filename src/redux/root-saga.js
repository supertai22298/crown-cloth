import { all, call } from "redux-saga/effects";
import { fetchCollections } from "./shop/shop.sagas";

export function* rootSaga() {
  yield all([
    call(fetchCollections)
  ])
}
