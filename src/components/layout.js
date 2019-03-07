import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../sass/main.scss';
import Navbar from '../components/globals/navbar';
import Footer from '../components/globals/footer/Footer';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
