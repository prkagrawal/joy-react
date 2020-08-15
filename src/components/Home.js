import React from 'react';
import Bkm from '../assets/images/b1.png';
import {Link} from 'react-router-dom';
var sectionStyle = {
  zIndex: "1",
  overflow: "hidden",
  backgroundImage: `url(${Bkm})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  opacity: "0.7",
};

function Home() {
  return (
  	<div style={ sectionStyle }>
  		<div className="home">
	    <div className="container">
	      	<h1 className="main-heading">Welcome</h1>
          <p className="home-content">Are you bored and want to get refreshed ?
            <br/> Or, just want to read some funny jokes ?
            <br/><br/> Then you have come at the right place
          </p> 
          <Link className="read-link" to="/read">Read</Link>
	    </div>
	    </div>
    </div>
  );
}

export default Home;

