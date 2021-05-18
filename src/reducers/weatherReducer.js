import { GET_WEATHER, WEATHER_ERROR } from '../actions/types'

const initialState = {
  location: null,
  loading: false,
  error: null,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        location: action.payload,
        loading: false,
      }
    case WEATHER_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
