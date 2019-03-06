import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import './layout.css';

const Layout = ({ children }) => {
  return <Fragment>{children}</Fragment>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
