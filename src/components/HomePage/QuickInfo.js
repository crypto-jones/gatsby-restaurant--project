import React, { Component } from 'react';
import Title from './Title';
import '../../sass/main.scss';

class QuickInfo extends Component {
  state = {};
  render() {
    return (
      <section className="section">
        <Title message="let us tell you" title="our mission" />
      </section>
    );
  }
}

export default QuickInfo;
