import { createSelector } from 'reselect'

const selectCartReducer = (state) => state.cartReducer

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.cartItems
)

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((total, value) => total + value.quantity, 0)
)

export const selectCartDropdownHidden = createSelector(
  [selectCartReducer],
  (cartReducer) => cartReducer.hidden
)