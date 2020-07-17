import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import './user/user.reducer'
import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'],
}
const rootReducer = combineReducers({
  userReducer: userReducer,
  cartReducer: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
