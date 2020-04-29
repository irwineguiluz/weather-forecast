import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { weatherForecast } from '../../../constants/app';
import WeatherDetail from '../weatherDetail';
import SearchInput from '../../components/base/SearchInput';
import Template from '../../components/complex/Template';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      keyword: '',
      weatherData: null,
      spinner: false,
    }
  }

  notify = () => {
    toast.warning('Please, try again with another city', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }

  handleChange = e => {
    this.setState({keyword: e.target.value});
  };

  handleSearch = () => {
    this.setState({ spinner: true });

    fetch(`${weatherForecast.API_URL}/data/2.5/weather?q=${this.state.keyword}&APPID=${weatherForecast.API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        if (response.cod == 200) {
          this.setState({
            weatherData: response,
          });
        } else {
          this.notify();

          this.setState({
            weatherData: null,
          });
        }

        this.setState({ spinner: false });
      })
      .catch(error => {
        this.setState({
          spinner: false,
          weatherData: null,
        });
      });
  }

  render () {
    const {
      keyword,
      spinner,
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
        {!spinner && weatherData && <WeatherDetail weatherData={weatherData} />}
        {spinner && <CircularProgress className="circular-progress" />}
        <ToastContainer />
      </Template>
    );
  }
}

export default Home;