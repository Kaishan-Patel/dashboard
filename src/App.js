import React from 'react';
import './App.css';
// Nav Bar
import Bar from './components/appbar/appbar';
// Grid Layout
import Grid from '@material-ui/core/Grid';
// Top Components
import TopSpend from './components/top/topSpend';
import TopUnits from './components/top/topUnits';
import TopVisits from './components/top/topVisits';
import TopTotalCusts from './components/top/topTotalCusts';
import TopPercentageSpend from './components/top/topPercentageSpend';
import TopPercentageUnits from './components/top/topPercentageUnits';
import TopPercentageVisits from './components/top/topPercentageVisits';
import TopPercentageTotalCusts from './components/top/topPercentageTotalCusts';
// Weekly Components
import WeeklyAisle from './components/weekly/weeklyAisle';
import WeeklyBrand from './components/weekly/weeklyBrand';
import WeeklyOffer from './components/weekly/weeklyOffer';
// Tab Layout
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      top_spend: [],
      top_units: [],
      top_visits: [],
      top_totalCusts: [],
      weekly_Aisle: [],
      weekly_Brand: [],
      weekly_Offer: [],
    }
  }
  componentDidMount() {
    let urls = [
      'http://localhost:3000/top',
      'http://localhost:3000/weekly'
    ];

    Promise.all(urls.map(url => fetch(url)
      .then(resp => resp.json())))
      .then(data => {
        this.setState({
          top_spend: data[0].data.splice(0, 3),
          top_units: data[0].data.splice(0, 3),
          top_visits: data[0].data.splice(0, 3),
          top_totalCusts: data[0].data.splice(0, 3),
          weekly_Aisle: data[1].data.splice(0, 22),
          weekly_Brand: data[1].data.splice(0, 22),
          weekly_Offer: data[1].data.splice(0, 22)
        })
      })
  }

  render() {
    let topSpend = this.state.top_spend;
    let topUnits = this.state.top_units;
    let topVisits = this.state.top_visits;
    let topTotalCusts = this.state.top_totalCusts;

    let weeklyAisle = this.state.weekly_Aisle;
    let weeklyBrand = this.state.weekly_Brand;
    let weeklyOffer = this.state.weekly_Offer;

    return (
      <div className="App">
        <div>
          <Bar />
        </div>
        <div>
          <Grid container spacing={0} className="Grid-Layout">
            <Grid item md={'1rem'}>
              <TopSpend spend={topSpend} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopUnits units={topUnits} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopVisits visits={topVisits} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopTotalCusts total={topTotalCusts} />
            </Grid>
          </Grid>
        </div>
        <div>
          <Grid container spacing={0} className="Grid-Layout">
            <Grid item md={'1rem'}>
              <TopPercentageSpend spend={topSpend} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopPercentageUnits units={topUnits} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopPercentageVisits visits={topVisits} />
            </Grid>
            <Grid item md={'1rem'}>
              <TopPercentageTotalCusts total={topTotalCusts} />
            </Grid>
          </Grid>
        </div>
        <div className="Tabs-Layout">
          <Tabs>
            <TabList>
              <Tab>Weekly Aisle</Tab>
              <Tab>Weekly Brand</Tab>
              <Tab>Weekly Offer</Tab>
            </TabList>
            <TabPanel>
              <WeeklyAisle aisle={weeklyAisle} />
            </TabPanel>
            <TabPanel>
              <WeeklyBrand brand={weeklyBrand} />
            </TabPanel>
            <TabPanel>
              <WeeklyOffer offer={weeklyOffer} />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
