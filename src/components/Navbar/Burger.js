import React from 'react';
import SideNav from './SideNav';

const Burger = () => {
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<div className="burger-icon" onClick={() => setOpen(!open)}>
		    	<span></span>
		    	<span></span>
		    	<span></span>
			</div>
			<SideNav open={open}/>
		</>
	)
}
	


export default Burger;