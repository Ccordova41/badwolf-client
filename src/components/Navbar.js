import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      activeStyle={{
        color: '#FFF'
      }}
      > Home </NavLink> |

      <NavLink
      to="/doctors"
      exact
      activeStyle={{
        color: '#FFF'
      }}
      > Doctors</NavLink> |

      <NavLink
      to="/reports"
      exact
      activeStyle={{
        color: '#FFF'
      }}
      > Your Characters</NavLink> 



    </div>
  )
}

export default Navbar
