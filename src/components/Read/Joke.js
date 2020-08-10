import React from 'react';
import axios from 'axios';

const Joke = (props) => {
	return(

		<div className="joke-container">
			<div className="setup"> Setup : {props.jokes.setup}</div>
			<br/>
			<div className="delivery"> Delivery : {props.jokes.delivery}</div>
		</div>
	)
}

export default Joke;
