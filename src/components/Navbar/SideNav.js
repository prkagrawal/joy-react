import React from 'react';
import {Link} from 'react-router-dom';

const SideNav = (props) => {
	if (!props.open){
		document.body.style.backgroundColor = "rgba(251,251,251,1)";
		return null;
	}
	if (props.open){
		// document.body
		document.body.style.backgroundColor = "rgba(0,0,0,0.2)";

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