import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5,
}

const selectShopReducer = (state) => state.shopReducer

export const selectCollections = createSelector(
  [selectShopReducer],
  ({ collections }) => collections
)

export const makeSelectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
