import React from 'react'
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return <header className="App-header">
    <h1>{title}</h1>
  </header>
}

Header.propTyoes = {
  title: PropTypes.string.isRequired
}
export default Header;