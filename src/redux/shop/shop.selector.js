import { createSelector } from 'reselect'

const selectShopReducer = (state) => state.shopReducer

export const selectCollections = createSelector(
  [selectShopReducer],
  ({ collections }) => collections
)
