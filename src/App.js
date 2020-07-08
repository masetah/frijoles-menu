import React, {Component} from 'react';
import Menu from './views/menu/menu';
import Gallery from './views/gallery/gallery';
import Survey from './views/survey/survey';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Menu}/>
            <Route path='/gallery' component={Gallery}/>
            <Route path='/survey' component={Survey}/>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;
