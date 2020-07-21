import { ShopActionTypes } from './shop.action-types'

export const setCollectionsFromFirestore = (collections) => ({
  type: ShopActionTypes.SET_COLLECTIONS_FROM_FIRESTORE,
  payload: collections,
})
