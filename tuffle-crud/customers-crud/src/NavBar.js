import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/get-all-customers" activeClassName="active">Get All Customers</NavLink>
        </li>
        <li>
          <NavLink to="/get-customer" activeClassName="active">Get Customer</NavLink>
        </li>
        <li>
          <NavLink to="/create-customer" activeClassName="active">Create Customer</NavLink>
        </li>
        <li>
          <NavLink to="/update-customer" activeClassName="active">Update Customer</NavLink>
        </li>
        <li>
          <NavLink to="/delete-customer" activeClassName="active">Delete Customer</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
