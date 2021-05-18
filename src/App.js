import { Fragment, useEffect } from 'react'
import Navbar from './components/layout/NavBar'
import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import './App.css'

const App = () => {
  // Alternative side effect to componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    // Initialize materialzie javascript
    M.AutoInit()
  })
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
      </Fragment>
    </Provider>
  )
}

export default App
