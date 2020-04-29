import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Moment from 'react-moment';

const TabMain = (props) => (
  <div className="tab-container">
    <div className="tab-main">
      <div className="title">
        <h2 className="city">{props.weatherData.name}, {props.weatherData.sys.country}</h2>
        <div className="coords">
          Geo coords: <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://openweathermap.org/weathermap?zoom=8&lat=${props.weatherData.coord.lat}&lon=${props.weatherData.coord.lon}`}
          >[{props.weatherData.coord.lat}, {props.weatherData.coord.lon}]</a>
        </div>
      </div>
      <div className="temperature">
        {Math.round(props.weatherData.main.temp)}°C
        <div className="feels-like">Feels like: {Math.round(props.weatherData.main.feels_like)}°C</div>
        <div className="temp-detail">
          <div className="min"><ArrowDownwardIcon /> {Math.round(props.weatherData.main.temp_min)}°C</div>
          <div className="max"><ArrowUpwardIcon /> {Math.round(props.weatherData.main.temp_max)}°C</div>
        </div>
      </div>
      <div className="description">{props.weatherData.weather[0].description}</div>
      <div>
        <img src={`/icons/${props.weatherData.weather[0].icon}.png`} width="250" className="icon" alt="icon" />
      </div>
      <div className="item"><Moment unix format="dddd, MMMM Do YYYY, HH:mm">{props.weatherData.dt}</Moment></div>
    </div>
  </div>
);

export default TabMain;