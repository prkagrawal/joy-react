import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Read/Joke';
import Options from './Read/Options';



function Read() {

	let [jokes, setJokes] = useState([]);
	let [count, setCount] = useState(0);
	
	useEffect(() => {
		const fetchData = async () => {
			const resp = await axios.get('https://sv443.net/jokeapi/v2/joke/Any?type=twopart')
			const jokes = await resp.data;
			setJokes(jokes);		
		};
		fetchData();
	},[count]);
	
	
  	return (
	    <div className="container">	    		    	
	    	<Joke jokes={jokes}/>	    	
	    	<Options count={count} setCount={setCount}/>
	    </div>
  	);
}

export default Read;
