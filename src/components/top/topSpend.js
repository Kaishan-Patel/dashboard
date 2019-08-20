import React from 'react';
import { Chart } from 'react-google-charts';

const TopSpend = ({ spend }) => {
  return (
    <Chart
      height={'300px'}
      width={'350px'}
      chartType='ColumnChart'
      loader={<div>Loading Chart..</div>}
      data={[
        ['', 'UPLIFT'],
        ...spend.map(d => [d.PRODUCT, d.UPLIFT])
      ]}
      options={{
        title: 'Spend Uplift',
        colors: ['#FB7A21'],
        backgroundColor: '#F2E9E2'
      }}
    />
  );
}

export default TopSpend;