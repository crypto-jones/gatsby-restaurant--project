import React, { Component } from 'react';
import { Link } from 'gatsby';
import Title from './Title';
import '../../sass/main.scss';

class QuickInfo extends Component {
  state = {};
  render() {
    return (
      <section className="section">
        <Title message="let us tell you" title="our mission " />
        <div className="quick-info-wrapper">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            dicta cum quo in, corporis provident illo et aliquid. Cupiditate
            architecto temporibus repudiandae sed iusto debitis iste consectetur
            nihil provident earum?
          </p>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <button className="button button__section">about</button>
          </Link>
        </div>
      </section>
    );
  }
}

export default QuickInfo;
