import React from 'react';
import { Chart } from 'react-google-charts';

const TopUnits = ({ units }) => {
  return (
    <Chart
      height={'300px'}
      width={'350px'}
      chartType='ColumnChart'
      loader={<div>Loading Chart..</div>}
      data={[
        ['', 'UPLIFT'],
        ...units.map(d => [d.PRODUCT, d.UPLIFT])
      ]}
      options={{
        title: 'Units Uplift',
        colors: ['#FB7A21'],
        backgroundColor: '#F2E9E2'
      }}
    />
  );
}

export default TopUnits;