import React from 'react';

const Options = (props) => {

	return(
		<div className="options">
			<button className="next-btn" onClick={() => props.setCount(props.count + 1)}>Next</button>
		</div>
	)
}

export default Options;