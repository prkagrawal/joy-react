import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = (props) => {
	if (!props.open){
		return null;
	}
	return(
		<div className="side-nav">
			<Link className="nav-link" to="/"> Home </Link>
			<Link className="nav-link" to="/read">Read</Link>
			<Link className="nav-link" to="/favorites"> Favorites </Link>
		</div>

	)
}
	
	

export default SideNav;