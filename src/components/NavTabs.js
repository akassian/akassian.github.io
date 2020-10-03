import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ScrollTop from "./ScrollTop";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

/* Navigation, based on Material UI for AppBar */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
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

/* Styles for Navigation */
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    color: "white",
    "font-weight": 600,
    "font-size": "70%",
    // "text-transform": "none",
    // "font-variant": "small-caps",
    transition: "0.3s",
    "&:hover": {
      color: "goldenrod",
    },
  },
  active_tab: {
    color: "goldenrod",
    "font-weight": 650,
    "font-size": "75%",
    transition: "0.3s",
  },
});

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Logic for setting a different style for the active tab
  function getStyle(isActive) {
    return isActive ? classes.active_tab : classes.tab;
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          centered
        >
          <Tab className={getStyle(value === 0)} label="Home" href="#home" />
          <Tab className={getStyle(value === 1)} label="About" href="#about" />
          <Tab
            className={getStyle(value === 2)}
            label="Background"
            href="#resume"
          />
          <Tab
            className={getStyle(value === 3)}
            label="Projects"
            href="#projects"
          />
          <Tab
            className={getStyle(value === 4)}
            label="Resume"
            href="https://docs.google.com/document/d/1tz9CDTwpOkvGkl7NDs7h35WoVq1pEgMOanENYMf9bUU/export?format=pdf"
            // Link that downloads pdf of latest resume
            // TODO: build this link from my resume as a variable of resumeData.js
          />
          <Tab
            className={getStyle(value === 5)}
            label="Email"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=akassian@berkeley.edu"
            // Link that creates a new gmail composed to my email, hardcoded for now
            // TODO: build this link from my email as a variable of resumeData.js
          />
        </Tabs>
      </AppBar>
      {/* Hardcoded anchor div id for ScrollTop to scroll back to */}
      <div id="back-to-top-anchor" />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
