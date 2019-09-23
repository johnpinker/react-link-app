import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return <footer className="App-footer">
    {props.footerText}
  </footer>
}

Footer.propTypes = {
  footerText: PropTypes.string.isRequired
}
export default Footer;