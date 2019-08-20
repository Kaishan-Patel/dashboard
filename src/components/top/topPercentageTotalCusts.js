import React from 'react';
import { Chart } from 'react-google-charts';

const TopPercentageTotalCusts = ({ total }) => {
  return (
    <Chart
      height={'300px'}
      width={'350px'}
      chartType='ColumnChart'
      loader={<div>Loading Chart..</div>}
      data={[
        ['', '% UPLIFT'],
        ...total.map(d => [d.PRODUCT, d.PCT_UPLIFT]),
      ]}
      options={{
        title: 'Total Custs Percentage Uplift',
        colors: ['#FB7A21'],
        backgroundColor: '#F2E9E2'
      }}
    />
  );
}

export default TopPercentageTotalCusts;