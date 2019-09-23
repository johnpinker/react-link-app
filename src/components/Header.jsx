import React from 'react'
import PropTypes from 'prop-types';

const Header = (props) => {
    return <header className="App-header">
    <h1>{props.title}</h1>
  </header>
}

Header.propTyoes = {
  title: PropTypes.string.isRequired
}
export default Header;