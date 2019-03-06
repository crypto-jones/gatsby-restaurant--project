import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../../../sass/main.scss';

class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon " />,
        path: 'https://www.facebook.com',
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon " />,
        path: 'https://www.twitter.com',
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon " />,
        path: 'https://www.instagram.com',
      },
    ],
  };
  render() {
    return (
      <div className="icon-wrapper">
        {this.state.icons.map(item => {
          return (
            <a
              href={item.path}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          );
        })}
      </div>
    );
  }
}

export default NavbarIcons;
