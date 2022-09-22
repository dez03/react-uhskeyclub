
import Search from "../components/Gallery/Search";
import initialDetails from "../data/InitialDetails";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GalleryFull from "../components/Gallery/GalleryFull"


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
      <h1 className="my-4 px-4">Gallery</h1>
      <p>
        If you're in a picture and it doesn't come up with a search, please
        contact{" "}
        <a href="https://uhskeyclub.vercel.app/officers">Aviel Hernandez</a>
      </p>
      <hr />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="centered force tabs example"
            centered
          >
            <Tab label="Search Your Name" {...a11yProps(1)} />
            <Tab label="Plain Gallery" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={1}>
          <GalleryFull />
        </TabPanel>
        <TabPanel value={value} index={0}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Press the search button and type your name
          </h2>
          <Search details={initialDetails} />
        </TabPanel>
      </Box>
    </>
  );
}


// const Gallery = () => {
//   return (
//     <>
      
//       <h1 className="m-0 ">Gallery</h1>
//       <p className="">Press the search button and type your name</p>
//       <p>
//         This page is still under development, I am aware it is buggy, the search
//         bar works though!
//       </p>
//       <Search details={initialDetails} />
//     </>
//   );
// }

// export default Gallery