import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, deaths, recovered, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading...';
	}

	const gridData = [
		{
			color: styles.infected,
			label: 'Infected',
			data: confirmed.value,
			summary: 'Number of active cases of COVID-19',
		},
		{
			color: styles.recovered,
			label: 'Recovered',
			data: recovered.value,
			summary: 'Number of recoveries from COVID-19',
		},
		{
			color: styles.deaths,
			label: 'Deaths',
			data: deaths.value,
			summary: 'Number of deaths caused by COVID-19',
		},
	];

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{gridData.map(({ label, data, summary, color }, id) => (
					<Grid
						key={id}
						item
						component={Card}
						xs={12}
						md={3}
						className={cx(styles.card, color)}
					>
						<CardContent>
							<Typography color='textSecondary' gutterBottom>
								{label}
							</Typography>
							<Typography variant='h5'>
								<CountUp start={0} end={data} duration={2.5} separator=',' />
							</Typography>
							<Typography color='textSecondary' gutterBottom>
								{new Date(lastUpdate).toDateString()}
							</Typography>
							<Typography variant='body2'>{summary}</Typography>
						</CardContent>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Cards;
