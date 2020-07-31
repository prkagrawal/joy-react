import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/read">Read</Link>
      <Link to="/favorites"> Favorites </Link>
    </div>
  );
}

export default Navbar;