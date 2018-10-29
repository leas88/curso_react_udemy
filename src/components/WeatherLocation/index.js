import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData'
const WeatherLocation = () => (  //Arrow functión de ECMAScript
      <div>
            <Location city="Mexico City"></Location>
            <WeatherData></WeatherData>
      </div>
);

export default WeatherLocation;
