import React from 'react';

const CountryDetail = ({ country }) => {
  if (!country) return null
  return (
    <div>
    <h3>{country.name}</h3>
    <p>{country.capital}</p>
    <img src={country.flag}/>
    <p>{country.region}</p>
    </div>
  )
}

export default CountryDetail;
