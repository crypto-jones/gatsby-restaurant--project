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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            corporis tempore voluptate repellat cupiditate. Quam modi quo
            officia vitae? Velit architecto est ipsum possimus qui alias ipsa
            quibusdam mollitia officia obcaecati rem accusantium animi assumenda
            amet necessitatibus nobis minus nesciunt, rerum quo. Veniam eos
            magnam labore voluptas dolorem dolores vel.
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
