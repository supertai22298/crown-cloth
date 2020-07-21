import { ShopActionTypes } from "./shop.action-types"
import SHOP_DATA from './shop.data'
const INITIAL_STATE = {
  collections: null,
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.SET_COLLECTIONS_FROM_FIRESTORE: 
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state
  }
}
export default shopReducer
