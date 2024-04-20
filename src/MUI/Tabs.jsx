import * as React from 'react';
import Box from '@mui/material/Box';
import { Tabs } from '@mui/material';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const LabTabs = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
    <div>
        <h4 style={{textAlign: "center"}}>Basics</h4>
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
    <br></br>
    <h4 style={{textAlign: "center"}}>Wraped Lables</h4>
    <Box sx={{ width: '100%' }}>
    <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example">
    <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
            wrapped/>
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
    </Tabs>
    </Box>
    <br></br>
    <h4 style={{textAlign: "center"}}>Colored Tab</h4>
    <div>
    <Box sx={{ width: '100%' }}></Box>
        <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
            <Tab value="one" label="Item One" />
            <Tab value="two" label="Item Two" />
            <Tab value="three" label="Item Three" />
        </Tabs>
    </div>
    <h4 style={{textAlign: "center"}}>Disabled Tab</h4>
    <div>
        <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
            <Tab label="Active" />
            <Tab label="Disabled" disabled />
            <Tab label="Active" />
        </Tabs>
    </div>
    <h4 style={{textAlign: "center"}}>Fixed Tabs/ Centered</h4>
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
        </Tabs>
    </Box>
    <h4 style={{textAlign: "center"}}>Scrollable Tabs</h4>
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
        </Tabs>
    </Box>
    <h4 style={{textAlign: "center"}}>Prevent scroll Tabs</h4>
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
        <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example">
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab label="Item Four" />
            <Tab label="Item Five" />
            <Tab label="Item Six" />
            <Tab label="Item Seven" />
        </Tabs>
    </Box>
    <h4 style={{textAlign: "center"}}>Icon Tabs</h4>
    <Tabs value={value} onChange={handleChange} aria-label="icon tabs example">
        <Tab icon={<PhoneIcon />} aria-label="phone" />
        <Tab icon={<FavoriteIcon />} aria-label="favorite" />
        <Tab icon={<PersonPinIcon />} aria-label="person" />
    </Tabs>
    <br></br>
        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<PhoneIcon />} label="RECENTS" />
        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<PersonPinIcon />} label="NEARBY" />
    </Tabs>
    </div>
  );
}

export default LabTabs;