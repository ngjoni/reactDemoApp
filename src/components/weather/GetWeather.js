import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getWeather } from '../../actions/weatherActions'
import Preloader from '../layout/Preloader'

const GetWeather = ({ weather: { location, loading }, getWeather }) => {
  useEffect(() => {
    getWeather()
    // eslint-disable-next-line
  }, [])
  const kelvin = 273.15
  let temp = ''

  if (loading || location === null) {
    return <Preloader />
  } else {
    temp = location.main.temp - kelvin
  }

  return (
    <div>
      {/* <pre>{JSON.stringify(location)}</pre> */}
      <div className='row'>
        <div className='col s12 m5'>
          <div className='card-panel blue'>
            <span className='white-text'>
              <h3>{location.name}</h3>
            </span>
            <span className='white-text'>
              <h4>
                {temp.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                &nbsp;°C
              </h4>
              <img
                src={`http://openweathermap.org/img/wn/${location.weather[0].icon}@2x.png`}
                alt='Icon'
              />
              <div>{location.weather[0].description}</div>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

GetWeather.propTypes = {
  weather: PropTypes.object.isRequired,
  getWeather: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  weather: state.weather,
})

export default connect(mapStateToProps, { getWeather })(GetWeather)
