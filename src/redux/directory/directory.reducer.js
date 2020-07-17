import { DirectoryActionTypes } from './directory.action-types'

const { sections } = require('../../components/directory/directory.data')

const INITIAL_STATE = {
  sections,
  someState: null
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.SOME_ACTION_TYPE: 
    return {
      ...state,
      someState: action.payload
    }
    default:
      return state
  }
}

export default directoryReducer
