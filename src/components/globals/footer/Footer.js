import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../../../sass/main.scss';

class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: `http://www.facebook.com`,
      },
      {
        id: 2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: `http://www.twitter.com`,
      },
      {
        id: 3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: `http://www.instagram.com`,
      },
    ],
  };

  render() {
    return (
      <footer className="footer-wrapper">
        <div className="title">eatery</div>
        <div className="icons">
          {this.state.icons.map(item => {
            return (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noref"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
        <p className="copyright">copyright &copy; 2019 eatery</p>
      </footer>
    );
  }
}

export default Footer;
