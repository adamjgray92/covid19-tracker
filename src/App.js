import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import Covid19Image from './images/covid-19.png';
import { fetchData } from './api';

class App extends Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const data = await fetchData();

		this.setState({ data: data });
	}

	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);

		this.setState({ country: country, data: fetchedData });
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<img
					src={Covid19Image}
					alt='Covid-19 Tracker'
					className={styles.image}
				/>
				<Cards data={data} />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
