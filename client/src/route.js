import React, {Component} from 'react';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';

import {BrowserRouter as Router, Route ,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyRecipes from './components/MyRecipes';
import drinks from './components/Root/drinks';
import wine from './components/Root/wine';
import food from './components/Root/food';
import desserts from './components/Root/desserts';
import snacks from './components/Root/snacks';
import Search from './components/Search';


class Routes extends Component {
  render(){   
    return(
      <Router>
          <div >         
            <Route path="/" exact component={Home} />  
            <Route path="/discover" component={Main} /> 
            <Route path="/search" component={Search} /> 
            <Route path="/about" component={About} /> 
            <Route path="/MyRecipes" component={MyRecipes} />
            <Route path="/drinks" component={drinks} />
            <Route path="/wine" component={wine} />         
            <Route path="/food" component={food} />         
            <Route path="/snacks" component={snacks} />                
            <Route path="/desserts" component={desserts} />         
          </div>
          </Router>
     
    );
  }
}
export default Routes;
