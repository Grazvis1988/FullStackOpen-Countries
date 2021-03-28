import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WeatherData = ({City}) => {
	const [weather, setWeather] = useState({main: {temp: 0}, wind: {speed: 0}})
	
	const link = `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${process.env.REACT_APP_API_KEY}`
	console.log(link)

		useEffect(() => {
		axios.get(link).then( response => {
			console.log(response.data)
			setWeather(response.data)
		})
	} , [])

	return (
		<div>
			<h2>Weather in {City}</h2>
			<div><b>Temperature: </b>{(weather.main.temp - 273.15).toFixed(2)} °C</div>
			
			<div><b>Wind: </b>{weather.wind.speed.toFixed(2)} m/s</div>
		</div>
	)
}

export default WeatherData
