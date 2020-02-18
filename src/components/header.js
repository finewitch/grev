import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: '1rem 0'
    }}
  >
      <nav class='container is-fullhd nav'>
        <div class='level'>
          <p class='level-item f-w'><a>About</a></p>
          <p class='level-item f-w'><a>Distribiution info</a></p>
          <p class='level-item f-w'><a>Cast & Filmmakers</a></p>
          <p class='level-item f-w'><a>Reviews</a></p>
          <p class='level-item f-w'><a>Contact</a></p>
        </div>
      </nav>
      
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ''
}

export default Header
