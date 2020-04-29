import React, { Component } from 'react';
import Moment from 'react-moment';
import Template from '../../components/complex/Template';
import { weatherForecast } from '../../../constants/app';

class WeatherDetail extends Component {
  constructor() {
    super();

    this.state = {
      cityWeatherInfo: {},
      cityWeatherMain: {},
      cityWeather: {},
      cityWeatherSys: {},
      cityWeatherGeo: {},
    }
  }

  componentDidMount() {
    fetch(`${weatherForecast.API_URL}/data/2.5/weather?q=${this.props.match.params.city}&APPID=${weatherForecast.API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        this.setState({
          cityWeatherInfo: response,
          cityWeatherMain: response.main,
          cityWeather: response.weather[0],
          cityWeatherSys: response.sys,
          cityWeatherGeo: response.coord,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
  }

  render () {
    const {
      cityWeather,
      cityWeatherInfo,
      cityWeatherMain,
      cityWeatherSys,
      cityWeatherGeo,
    } = this.state;

    return (
      <Template title="Detail">
        <h2>{cityWeatherInfo.name}, {cityWeatherSys.country}</h2>
        <img class="weather-widget__img" src={`https://openweathermap.org/img/wn/${cityWeather.icon}@2x.png`} alt="icon" width="50" height="50"></img>
        <p>{cityWeather.description}</p>
        <p><Moment unix format="dddd, MMMM Do YYYY, HH:mm">{cityWeatherInfo.dt}</Moment></p>
        <p>Sunrise: <Moment unix format="HH:mm">{cityWeatherSys.sunrise}</Moment></p>
        <p>Sunset: <Moment unix format="HH:mm">{cityWeatherSys.sunset}</Moment></p>
        <br />
        <p>Geo coords: <a target="_blank" rel="noopener noreferrer" href={`https://openweathermap.org/weathermap?zoom=8&lat=${cityWeatherGeo.lat}&lon=${cityWeatherGeo.lon}`}>[{cityWeatherGeo.lat}, {cityWeatherGeo.lon}]</a></p>
        <p>Temperature: {cityWeatherMain.temp}</p>
        <p>Feels like: {cityWeatherMain.feels_like}</p>
        <p>Pressure: {cityWeatherMain.pressure}</p>
        <p>Humidity: {cityWeatherMain.humidity}</p>
        <p>Temperature Min.: {cityWeatherMain.temp_min}</p>
        <p>Temperature Max.: {cityWeatherMain.temp_max}</p>
        <p>Timezone: {cityWeatherInfo.timezone}</p>
      </Template>
    );
  }
}

export default WeatherDetail;