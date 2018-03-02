import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import {CLOUD,
  CLOUDY,
  SUN,
  RAIN,
  SNOW,
  WINDY
} from './../../constant/weather';

const data = {
  temperature: 10,
  weatherState: SNOW,
  humidity: 2,
  wind: '10 m/s',
};

const WeatherLocation = () => (
  <div>
    <Location city = {`Santiago`}/>
    <WeatherData data = {data}/>
  </div>
);

export default WeatherLocation;
