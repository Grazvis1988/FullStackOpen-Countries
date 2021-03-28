import Country from './components/Country'
import CountryList from './components/CountryList'


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
					)
		}
		else if ( nr == 1) {
			return (
					)
		}
		else {
			return <div><p>`Country doesn't exist!`</p></div>
		}
	}


export default renderCountries
