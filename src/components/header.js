import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="header-nav">
      <nav class='container is-fullhd nav'>
        <div class='level'>
          <p class='level-item f-w'>
            <Link to='/page-2/' className="hover-block-transition">about</Link>

          </p>
          <p class='level-item f-f f-w'><a className="hover-block-transition">Distribiution info</a></p>
          <p class='level-item f-w'><a className="hover-block-transition">Cast & Filmmakers</a></p>
          <p class='level-item f-w'><a className="hover-block-transition">Reviews</a></p>
          <p class='level-item f-w'><a className="hover-block-transition">Contact</a></p>
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
