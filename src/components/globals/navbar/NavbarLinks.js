import React, { Component } from 'react';
import { Link } from 'gatsby';
import '../../../sass/main.scss';

class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: '/',
        name: 'home',
      },
      {
        id: 1,
        path: '/about',
        name: 'about',
      },
      {
        id: 2,
        path: '/menu',
        name: 'menu',
      },
      {
        id: 3,
        path: '/contact',
        name: 'contact',
      },
    ],
  };

  render() {
    let innerWidth;

    if (typeof window !== 'undefined') {
      innerWidth = window.innerWidth;
    }

    let toggleNav;

    if (this.props.navbarOpen) {
      toggleNav = 'link-wrapper';
    } else if (window.innerWidth >= 768 || innerWidth >= 768) {
      toggleNav = 'link-wrapper';
    } else {
      toggleNav = 'link-wrapper--disabled';
    }

    return (
      <ul className={toggleNav} open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NavbarLinks;
