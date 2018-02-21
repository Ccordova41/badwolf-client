import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      activeStyle={{
        color: '#ffa700'
      }}
      > Home </NavLink> | 

      <NavLink
      to="/"
      exact
      activeStyle={{
        color: '#ffa700'
      }}
      > Doctors</NavLink>





    </div>
  )
}

export default Navbar
