import React from 'react';
import axios from 'axios';

const Joke = (props) => {
	// props.setJokes(props.jokes);
	return(

		<div className="joke-container">
			<span className="setup"> Setup : {props.jokes.setup}</span>
			<br/>
			<span className="delivery"> Delivery : {props.jokes.delivery}</span>
		</div>
	)
}

export default Joke;

// https://sv443.net/jokeapi/v2/joke/Any?type=twopart