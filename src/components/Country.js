
const Country = ({country}) => (
<div>
	<h1>{country.name}</h1>
	<p>Capital: {country.capital}</p>
	<p>Population: {country.population}</p>
	<h2>Languages</h2>
	<ul>
		{country.languages.map( language =>
			<li key={language.name}>{language.name}</li>)
		}
	</ul>
	<img src={country.flag} alt="Country flag" width="300vw"/>
</div>
)

export default Country
