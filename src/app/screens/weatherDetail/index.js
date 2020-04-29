import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TabMain from './components/tabMain';
import TabDetails from './components/tabDetails';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SimpleTabs = (props) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    weatherData,
  } = props;

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Main" {...a11yProps(0)} className="tab" />
          <Tab label="More details" {...a11yProps(1)} className="tab" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className={`tab-panel bg-${weatherData.weather[0].icon}`}>
        <TabMain weatherData={weatherData} />
      </TabPanel>
      <TabPanel value={value} index={1} className={`tab-panel bg-${weatherData.weather[0].icon}`}>
        <TabDetails weatherData={weatherData} />
      </TabPanel>
    </div>
  );
}

export default SimpleTabs;