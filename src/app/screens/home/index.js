import React, { Component } from 'react';
import Template from '../../components/complex/Template';
import { Button } from '@material-ui/core';
import { weatherForecast } from '../../../constants/app';
import WeatherDetail from '../weatherDetail';
import SearchInput from '../../components/base/SearchInput';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      keyword: '',
      weatherData: null,
    }
  }

  handleChange = e => {
    this.setState({keyword: e.target.value});
  };

  handleSearch = () => {
    fetch(`${weatherForecast.API_URL}/data/2.5/weather?q=${this.state.keyword}&APPID=${weatherForecast.API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          weatherData: response,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render () {
    const {
      keyword,
      weatherData,
    } = this.state;

    return (
      <Template title="Weather Forecast App">
        <SearchInput
          id="standard-name"
          label="Search by city"
          value={keyword}
          margin="normal"
          fullWidth
          onChange={this.handleChange}
          handleClick={this.handleSearch}
        />
        {weatherData && <WeatherDetail weatherData={weatherData} />}
      </Template>
    );
  }
}

export default Home;