import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/home';
import WeatherDetail from './screens/weatherDetail';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/:city' component={WeatherDetail} />
        </Switch>
      </main>
    )
  }
}

export default Main;