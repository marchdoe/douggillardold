import { FETCH_POSITIONS } from '../actions/index'

const INITIAL_STATE = { all: [], positions: null }

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSITIONS:
      return { ...state, all: action.payload.data.items }
    default:
      return state
  }
}
