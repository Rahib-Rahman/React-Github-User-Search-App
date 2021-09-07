import React from 'react'

import PropTypes from 'prop-types'

import {Link} from 'react-router-dom'

const Navbar = ({icon, title}) => {

      return (

      <nav className="navbar bg-primary">
        <h2><i className={icon}></i> {title}</h2>

        <ul>

          <li>
            <Link to="/React-Github-User-Search-App">Home</Link>
          </li>

          <li>
            <Link to="/React-Github-User-Search-App/about">Info</Link>
          </li>

        </ul>

      </nav>
    )  
}

Navbar.defaultProps = {

  title: 'Github Finder',
  icon: 'fab fa-github'

}

Navbar.propTypes = {

  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired

}


export default Navbar
