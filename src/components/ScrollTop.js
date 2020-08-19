import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

/* Styles for ScrollTop button */
const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

/* ScrollTop Button to scroll back to top of page,
shown on bottom right of screen whenever not at top of page,
based on Material UI AppBar template */
export default function ScrollTop({ children }) {
  const classes = useStyles();

  const handleClick = (event) => {
    /* Scroll to div with id of back-to-top-anchor,
    hardcoded into navigation (NavTabs) */
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div onClick={handleClick} role="presentation" className={classes.root}>
      {children}
    </div>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
