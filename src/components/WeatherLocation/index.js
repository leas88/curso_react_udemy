import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

import {
      CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from './../../constants/weathers';
import { escapeComponent } from 'uri-js';

const location = 'Ciudad Nezahualcoyotl,mx';
const apiKey = 'ad9acfcd3a9217e0e4be6a80d6226c1c';
const base_url_weather = 'http://api.openweathermap.org/data/2.5/weather';
const api_weather = `${base_url_weather}?q=${location}&appid=${apiKey}`;//Ruta completa para la busqueda 

const data = {
      temperature: 10,
      weatherState: CLOUDY,
      humidity: 20,
      wind: '10 m/s',
}

class WeatherLocation extends Component {
      typeCity = true;

      constructor() {
            super();
            this.state = {
                  city: 'Mexico City',
                  data: data,
            };
      }
      getWeatherState = weather_data => {
            return SUN;
      };

      getData  = weather_data => {
            const {humidity, temp} = weather_data.main;
            const {speed} = weather_data.wind;
            const weatherState = SUN;
            const data = {
                  humidity,
                  temperature: temp,
                  weatherState,
                  wind: `${speed} m/s`, 
            }
            return data;
      };

      handleUpdateClick = () => {
            this.typeCity = !this.typeCity;
            if (this.typeCity) {
                  this.setState({ city: 'Mexico City', data: data });
            } else {
                  let dataTwo = data;
                  dataTwo.weatherState = RAIN;
                  this.setState({
                        city: 'Quintana Roo',
                        data: dataTwo
                  });
            }
            fetch(api_weather).then((resolve) => {
                  console.log(resolve);
                  return resolve.json();
            }).then((data => {
                  console.log(data);
                  debugger;
            }));

            console.log(data);

      }

      render() {
            const { city, data } = this.state;
            return (
                  <div className="weatherLocationCont">
                        <Location city={city}></Location>
                        <WeatherData data={data}> </WeatherData><br></br>
                        <button onClick={this.handleUpdateClick} > Actualiza </button>
                  </div>
            );
      }
}

export default WeatherLocation;
