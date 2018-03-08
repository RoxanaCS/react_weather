import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './style.css';

// const days = [
//   'Lunes',
//   'Martes',
//   'Miércoles',
//   'Jueves',
//   'Viernes',
//   'Sábado',
//   'Domingo'
// ];
//
// const data = {
//   temperature: 10,
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal'
// };

const api_key = '5d8700d7f38831f87bd69f44431a2170';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null
    };
  }

  componentDidMount() {
    const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
    fetch(url_forecast).then(data => (data.json())
    ).then(weather_data => {
      console.log(weather_data);
      const forecastData = transformForecast(
        weather_data);
      console.log(forecastData);
      this.setState({forecastData})
    });
  }

  renderForecastItemDays() {
    return 'Render Items';
    // return days.map(day => (
    //   <ForecastItem key = {day} hour = {10} weekDay = {day} data = {data}></ForecastItem>
    // ));
    // <ForecastItem weekDay={'Miércoles'}></ForecastItem>
  }
  renderProgress = () => {
    return (<h3>Cargando pronótico extendido... </h3>);
  }
  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido para {city}</h2>
        {forecastData !== null ? this.renderForecastItemDays() :
          this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,

};
export default ForecastExtended;
