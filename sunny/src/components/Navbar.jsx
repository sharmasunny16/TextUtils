import React from 'react'
import {Link} from 'react-router-dom'

function navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About Us</Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link " to="/">Contact Us</Link>
      </li>
    </ul>
    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
</div>
<div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglegreen26} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable GreenMode</label>
</div>
  </div>
</nav>
    </div>
  )
}

export default navbar
