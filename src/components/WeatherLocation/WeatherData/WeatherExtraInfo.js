import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
const WeatherExtraInfo = ({humidity,wind}) =>(
    <div className="weatherExtraInfo">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} air `}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity : PropTypes.number.isRequired,
    wind : PropTypes.string.isRequired,
};
export default WeatherExtraInfo;
