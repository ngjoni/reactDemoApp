/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Weather from '../../pages/Weather'
import Logger from '../../pages/Logger'

const NavBar = () => {
  useEffect(() => {
    var sidenav = document.querySelectorAll('.sidenav')
    M.Sidenav.init(sidenav, {})
  }, [])

  return (
    <Router>
      <nav className='blue'>
        <div className='nav-wrapper'>
          <a href='#!' className='brand-logo'>
            Demo
          </a>
          <a href='#' data-target='mobile-demo' className='sidenav-trigger'>
            <i className='material-icons'>menu</i>
          </a>
          <ul className='right hide-on-med-and-down'>
            <li>
              <Link to='/'>Eintragsapp</Link>
            </li>
            <li>
              <Link to='/weather'>Wettersuche</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul className='sidenav' id='mobile-demo'>
        <li>
          <Link to='/'>Main</Link>
        </li>
        <li>
          <Link to='/weather'>Wettersuche</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <Logger />
        </Route>
        <Route path='/weather'>
          <Weather />
        </Route>
      </Switch>
    </Router>
  )
}

export default NavBar
