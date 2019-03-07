import React from 'react';
import '../../../sass/main.scss';

const Banner = ({ title, subtitle, children }) => {
  return (
    <div className="banner-wrapper">
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </div>
  );
};

export default Banner;
