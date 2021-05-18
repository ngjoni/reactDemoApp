import axios from 'axios'
import { GET_WEATHER, SET_LOADING, WEATHER_ERROR } from './types'

export const getWeather = () => async (dispatch) => {
  //Nur Hamburg, am Besten
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=Hamburg&appid=0a78493a0f1a0043902ff86a8b716a49`
  try {
    setLoading()

    //Natürlich muss der API Key in einer .env sein
    axios
      .get(weatherUrl, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
      .then((res) => {
        // const data = JSON.stringify(res.data)
        const data = res.data

        dispatch({
          type: GET_WEATHER,
          payload: data,
        })
      })
  } catch (err) {
    dispatch({
      type: WEATHER_ERROR,
      payload: err.response.statusText,
    })
  }
}

export const searchWeather = (text) => async (dispatch) => {
  //Nur Hamburg, am Besten
  const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${text}&appid=0a78493a0f1a0043902ff86a8b716a49`
  try {
    setLoading()

    //Natürlich muss der API Key in einer .env sein
    axios
      .get(weatherUrl, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
      })
      .then((res) => {
        // const data = JSON.stringify(res.data)
        const data = res.data

        dispatch({
          type: GET_WEATHER,
          payload: data,
        })
      })
  } catch (err) {
    dispatch({
      type: WEATHER_ERROR,
      payload: err.response.statusText,
    })
  }
}

export const setLoading = () => {
  return {
    type: SET_LOADING,
  }
}
