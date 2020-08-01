import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Read from './components/Read';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/read" component={Read} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
