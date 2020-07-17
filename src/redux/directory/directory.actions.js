import { DirectoryActionTypes } from './directory.action-types'

export const someAction = (somePayload) => ({
  type: DirectoryActionTypes.SOME_ACTION_TYPE,
  payload: somePayload,
})
