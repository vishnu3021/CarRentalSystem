import React from 'react';

const Nav = () => {
  return (
    <div className='nav' style={{display:"flex" , justifyContent:"space-around"}}>
    <a href="#home">Home</a>
    <a href="#categories">Categories</a>
    <a href="#about">About</a>
    <a href="#help">Help Center</a>
  </div>
  );
};

export default Nav;
