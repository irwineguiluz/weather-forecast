import React, { Component } from 'react';
import Template from '../../components/complex/Template';

class WeatherDetail extends Component {
  constructor() {
    super();

    this.state = {}
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
  }

  render () {

    return (
      <Template title="Detail">
      </Template>
    );
  }
}

export default WeatherDetail;