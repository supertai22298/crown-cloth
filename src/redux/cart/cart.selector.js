import { createSelector } from 'reselect'

const selectCart = (state) => state.cartReducer

export const selectCartItems = createSelector(
  [selectCart],
  (cartReducer) => cartReducer.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, value) => total + value.quantity, 0)
)
