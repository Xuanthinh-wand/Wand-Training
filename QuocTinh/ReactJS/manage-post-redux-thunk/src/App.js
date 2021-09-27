import React, { Component } from 'react';
import Menu from './components/Menu/Menu'
import './App.css';
import PostList from './components/PostList/PostList';
import routes from './routes';
// import { Router } from 'react-router';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />

          <div className="container">
            <div className="row">
              {this.showContentMenus(routes)}
            </div>
          </div>

        </div>
      </Router>

    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      })

    }
    return <Switch>{result}</Switch>
  }
}


export default App;
