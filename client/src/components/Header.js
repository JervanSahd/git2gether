import React from 'react';
import coverImage from '../assets/cover/header.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>git2gether</h1>
      <img src={coverImage} alt="working group"></img>
      {props.children}
    </header>
  );
}

export default Header;
