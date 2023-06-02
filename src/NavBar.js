import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/get-customer" activeClassName="active">Get BadgeById</NavLink>
        </li>
        <li>
          <NavLink to="/create-customer" activeClassName="active">Create Badge</NavLink>
        </li>
        <li>
          <NavLink to="/update-customer" activeClassName="active">Update Badge</NavLink>
        </li>
        <li>
          <NavLink to="/delete-customer" activeClassName="active">Delete Badge</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
