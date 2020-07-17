import { createSelector } from 'reselect'

const selectDirectoryReducer = (state) => state.directoryReducer

export const selectSections = createSelector(
  [selectDirectoryReducer],
  ({ sections }) => sections // destructuring from state
)
