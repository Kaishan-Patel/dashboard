import React from 'react';
import { Chart } from 'react-google-charts';

const WeeklyOffer = ({ offer }) => {
    return (
        <Chart
            height={'500px'}
            width={'100%'}
            chartType='LineChart'
            loader={<div>Loading Chart..</div>}
            data={[
                ['', 'EXPOSED', 'CONTROL'],
                ...offer.map(d => [d.WEEK_COMMENCING, d.EXPOSED, d.CONTROL]),
            ]}
            options={{
                title: 'Weekly Offer',
                backgroundColor: '#F2E9E2'
            }}
        />
    );
}

export default WeeklyOffer;