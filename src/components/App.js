import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './Country'
import CountryList from './CountryList'
import WeatherData from './WeatherData'


function App() {

const [countries, setCountries ] = useState([])
const [ search, setSearch ] = useState('')

const list = countries.filter((country) => new RegExp(search, 'i').test(country.name))
	
	const hook = () => axios.get('https://restcountries.eu/rest/v2/all').then( response =>
		{
			setCountries(response.data)
		})
	useEffect(hook, [])
	

	const handleSearchChange = (event) => {
		setSearch(event.target.value)
	}

	const handleClick = (event) => {
		event.preventDefault()
		setSearch(event.target.name)
	}

		
	const renderCountries = ({data}) => {

		const nr = list.length

		if ( nr > 10 ) {
			return (
				<div>
					<p>Too many matches, specify another filter</p>
				</div>
			)
		}
		else if ( nr <= 10 && nr > 1 ) {
			return (
				<CountryList list={list} handleClick={handleClick} />
					)
		}
		else if ( nr === 1) {
			return (
				<div>
				<Country country={list[0]} />
				<WeatherData City={list[0].capital} />
				</div>
			)
		}
		else {
			return <div><p>`Country doesn't exist!`</p></div>
		}
	}

  return (
	  <div>
	  <form>
		  <label>Find countries: </label>
		  <input value={search}  onChange={handleSearchChange}></input>
	  </form>
		{renderCountries(countries)}
	  </div>
  )
}

export default App
