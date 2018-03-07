import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './style.css';

class ForecastExtended extends Component {
  renderForecastItemDays() {
    return (
      <ForecastItem weekDay={'Miércoles'}></ForecastItem>
    );
  }
  render() {
    const { city } = this.props;
    return (
      <div>
        <h2 className="forecastTitle">Pronóstico extendido para {city}</h2>
        {this.renderForecastItemDays()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,

};
export default ForecastExtended;
