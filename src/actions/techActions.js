import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
} from './types'

//Im Prinzip dasselbe wie die Service Files bei Angular

// Get techs from server
export const getTechs = () => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/techs')
    const data = await res.json()

    // Dispatch gibt den Type für den Switch Case mit dem gefetchtem payload an den Reducer weiter
    dispatch({
      type: GET_TECHS,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Add technican to server
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading()

    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()

    // Dispatch gibt den Type fürs switch Case mit dem gefetchtem payload an den Reducer weiter
    dispatch({
      type: ADD_TECH,
      payload: data,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    })
  }
}

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading()

    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    })

    // Dispatch gibt den Type fürs switch Case mit dem gefetchtem payload an den Reducer weiter
    dispatch({
      type: DELETE_TECH,
      payload: id,
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
