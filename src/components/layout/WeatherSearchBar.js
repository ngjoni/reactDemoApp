import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchWeather } from '../../actions/weatherActions'

const WeatherSearchBar = ({ searchWeather }) => {
  const [timer, setTimer] = useState(null)
  const text = useRef('')

  const onChange = (text) => {
    if (timer) {
      clearTimeout(timer)
      setTimer(null)
    }
    setTimer(
      setTimeout(() => {
        searchWeather(text)
      }, 1200)
    )
  }

  return (
    <nav style={{ marginBottom: '30px' }} className='blue'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Nach Wetterort suchen...'
              ref={text}
              onChange={(e) => {
                onChange(e.target.value)
              }}
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

WeatherSearchBar.propTypes = {
  searchWeather: PropTypes.func.isRequired,
}

//null because we do not need any state
export default connect(null, { searchWeather })(WeatherSearchBar)
