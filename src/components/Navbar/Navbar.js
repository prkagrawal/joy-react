import React from 'react';
import { Link } from 'react-router-dom'
import Burger from './Burger';
import TopNav from './TopNav';

function Navbar() {

  	return (
	  	<div className="header">
		    <Burger/>
		    <TopNav/>
	    </div>
  	);
}

export default Navbar;