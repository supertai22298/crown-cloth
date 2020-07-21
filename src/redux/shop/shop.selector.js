import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

const selectShopReducer = (state) => state.shopReducer

export const selectCollections = createSelector(
  [selectShopReducer],
  ({ collections }) => collections
)
export const selectCollectionsArray = createSelector(
  [selectCollections],
  (collections) => (collections ? Object.values(collections) : [])
  //(collections) => Object.keys(collections).map(key => collections[key])
)
export const makeSelectCollection = memoize((collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
)
