import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({footerText}) => {
    return <footer className="App-footer">
    {footerText}
  </footer>
}

Footer.propTypes = {
  footerText: PropTypes.string.isRequired
}
export default Footer;