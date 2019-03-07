import React from 'react';
import '../../../sass/main.scss';

const HomeHeader = ({ children }) => {
  // console.log(img);
  return (
    <header className="index-header">
      {/* <img src={img} alt="" /> */}
      {children}
    </header>
  );
};

export default HomeHeader;
