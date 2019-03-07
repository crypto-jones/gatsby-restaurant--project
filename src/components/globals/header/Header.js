import React from 'react';
import '../../../sass/main.scss';

const HomeHeader = ({ children }) => {
  return (
    <header className="index-header index-header__home">{children}</header>
  );
};

const AboutHeader = ({ children }) => {
  return (
    <header className="index-header index-header__about">{children}</header>
  );
};

const MenuHeader = ({ children }) => {
  return (
    <header className="index-header index-header__menu">{children}</header>
  );
};

const ContactHeader = ({ children }) => {
  return (
    <header className="index-header index-header__contact">{children}</header>
  );
};

export { HomeHeader, AboutHeader, MenuHeader, ContactHeader };
