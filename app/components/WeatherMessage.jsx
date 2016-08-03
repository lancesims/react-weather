var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h3 className="text-center">Its {temp} in {location} right now</h3>
    )
}

module.exports = WeatherMessage;
