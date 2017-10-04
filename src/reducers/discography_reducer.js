import { FETCH_DISCOGRAPHY } from '../actions/index'

const INITIAL_STATE = { all: [], post: null }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DISCOGRAPHY:
      return { ...state, all: action.payload.data.items }
    default:
      return state
  }
}
