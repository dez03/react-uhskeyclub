import React from 'react'
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import OfficerHours from "../components/HoursSheets/OfficerHours";
import SeniorHours from "../components/HoursSheets/SeniorHours";
import JuniorHours from "../components/HoursSheets/JuniorHours";
import SophomoreHours from "../components/HoursSheets/SophomoreHours";
import FreshmanHours from "../components/HoursSheets/FreshmanHours";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
     
          <div className="min-h-full">
            <div
              className="min-h-screen"
              role="tabpanel"
              hidden={value !== index}
              id={`simple-tabpanel-${index}`}
              aria-labelledby={`simple-tab-${index}`}
              {...other}
            >
              {value === index && (
                <Box sx={{ p: 3 }}>
                  <Typography>{children}</Typography>
                </Box>
              )}
            </div>
          </div>

    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      
          <h6 className="mt-4 px-4">
            The total amount of hours you have can be found here, if you have
            any questions or concerns, please email&nbsp;
            <a href="mailto:sneha.mexon@twpunionschools.org">
              sneha.mexon@twpunionschools.org
            </a>
          </h6>
          <hr />
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable centered force tabs example"
                centered
              >
                <Tab label="Officer Hours" {...a11yProps(0)} />
                <Tab label="Senior Hours" {...a11yProps(1)} />
                <Tab label="Junior Hours" {...a11yProps(1)} />
                <Tab label="Sophomore Hours" {...a11yProps(2)} />
                <Tab label="Freshman Hours" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <OfficerHours />
            </TabPanel>
            <TabPanel value={value} index={1}>
              {" "}
              {/* Senior Hours */}
              <SeniorHours />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <JuniorHours />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <SophomoreHours />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <FreshmanHours />
            </TabPanel>
          </Box>
    </>
  );
}

// function Hours() {

//   return (
//     <div className="bg-[#F8F0E3] p-4">
//       <div>Hours!!!</div>
//       <div className="">
//         {/* <iframe
//           allowTransparency="true"
//           src="https://script.google.com/macros/s/AKfycbyL-IdLbsClp4-3j9Mpb1wzke9LXAevpuVKcaKoImG3NOHlnwzSMxvzF-JTGT3ddJ7M/exec"
//           height="610"
//           width="100%"
//         /> */}

//         {/* <iframe
//           allowTransparency="true"
//           src="https://script.google.com/macros/s/AKfycbxX8ceM9ID4DtHDbLSEFo7W0jv-s-DoRo-kwABADVpSn8c7mTMO__nFBmCEW4GOyiNU/exec"
//           height="470"
//           width="100%"
//         /> */}

//         <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//           <Tabs
//             value={value}
//             onChange={handleChange}
//             aria-label="basic tabs example"
//           >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//           </Tabs>
//         </Box>
//         <TabPanel value={value} index={0}>
//           Item One
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//           Item Three
//         </TabPanel>
//       </div>
//     </div>
//   );
// }

// export default Hours
