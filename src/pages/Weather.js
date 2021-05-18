import React from 'react'
import WeatherSearchBar from '../components/layout/WeatherSearchBar'
import GetWeather from '../components/weather/GetWeather'

const Weather = () => {
  return (
    <div className='container'>
      <WeatherSearchBar />
      <GetWeather />
    </div>
  )
}

export default Weather
