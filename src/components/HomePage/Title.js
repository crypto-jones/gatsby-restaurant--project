import React from 'react';
import '../../sass/main.scss';

const Title = ({ title, message }) => {
  return (
    <div className="title-wrapper">
      <h3 className="message">{message}</h3>
      <h1 className="title">{title}</h1>
      <div className="underline" />
    </div>
  );
};

export default Title;
