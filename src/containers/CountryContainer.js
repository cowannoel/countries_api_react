import React from 'react';
import CountrySelector from '../components/CountrySelector';
import CountryDetail from '../components/CountryDetail';

class CountryContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      countries: [],
      selectedCountryAlpha3Code: ''
    };
    this.handleCountrySelected = this.handleCountrySelected.bind(this)
  }

  handleCountrySelected(alpha3Code) {
    this.setState({
      selectedCountryAlpha3Code: alpha3Code
    })
  }

  componentDidMount() {
    const url = 'https://restcountries.eu/rest/v2/all'
    fetch(url)
      .then(res => res.json())
      .then(countries => this.setState({
        countries
      }))
  }

  render(){
    const selectedCountry = this.state.countries.find(country => country.alpha3Code === this.state.selectedCountryAlpha3Code)

    return (
      <div>
        <h2>Country Container</h2>
        <CountrySelector 
          countries={this.state.countries}
          onCountrySelected={this.handleCountrySelected}
        />
        <CountryDetail 
          country={selectedCountry}
        />
      </div>
    );
  }
}

export default CountryContainer;
