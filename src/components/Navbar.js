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
      to="/characters"
      exact
      activeStyle={{
        color: '#FFF'
      }}
      > Your Characters</NavLink> |

      <NavLink
      to="/contact"
      exact
      activeStyle={{
        color: '#FFF'
      }}
      > Contact</NavLink>
    </div>
  )
}

export default Navbar
