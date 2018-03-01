import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
import {CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../../constant/weather';

const WeatherData = () => (
  <div className = 'weatherDataCont'>
    <WeatherTemperature temperature = {23}
      weatherState = {CLOUDY}/>
    <WeatherExtraInfo humidity = {80} wind = {'10 m/s'}/>
  </div>
);

export default WeatherData;
