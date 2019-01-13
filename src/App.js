import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar /> 
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/about" component={About}/>
            <Route  path="/contact" component={Contact}/>
            <Route path="/:post_id" component={Post}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;



/*
remember whenevr we click on a link we set the url and the react router constantly sees what is the url
so if it is contact thenm it wld set contact component

note : link sets the url and router renders the component based on the url
*/
// Swtch says ki at any point render only one component
