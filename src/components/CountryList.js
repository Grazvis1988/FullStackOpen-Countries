
const CountryList = ({list, handleClick}) => (
<div>
	{list.map( (country) => <div key={country.numericCode} >{country.name}<button onClick={handleClick} name={country.name}>Show</button></div>
)}
</div>
)

export default CountryList
