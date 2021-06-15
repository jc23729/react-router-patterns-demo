import React from 'react';
import Food from './Food';
import FoodNav from './FoodNav';
import Routes from './Routes';
import Nav from "./Nav";

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <FoodNav />
        //so this is just like express/food route/:name is the parameter 
        <Route path="/food/:name">
          <Food />
        </Route> */}
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
