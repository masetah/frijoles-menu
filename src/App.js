import React, {Component} from 'react';
import Home from './views/home/home';
import Menu from './views/menu/menu';
import Gallery from './views/gallery/gallery';
import Survey from './views/survey/survey';
import Nav from "./components/nav";
import Footer from "./components/footer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  render(){
    return (
      <div className="App" style={{maxWidth:'100%', overflowX:'hidden'}}>
        <Router>
          <Nav/>
            <Switch>
              <Route path='/' exact component={Menu}/>
              <Route path='/menu' exact component={Menu}/>
              <Route path='/gallery' component={Gallery}/>
              <Route path='/survey' component={Survey}/>
            </Switch>
        </Router>
      <Footer/>
      </div>
    )
  }
}

export default App;
