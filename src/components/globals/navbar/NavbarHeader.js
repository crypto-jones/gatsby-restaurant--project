import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import '../../../sass/main.scss';

class NavbarHeader extends Component {
  state = {};
  render() {
    const { handleNavbar } = this.props;
    return (
      <div className="header-wrapper">
        <Link to="/">
          <img src={logo} alt="Company Name" />
        </Link>
        <FaAlignRight
          className="toggle-icon"
          onClick={() => {
            handleNavbar();
          }}
        />
      </div>
    );
  }
}

export default NavbarHeader;
