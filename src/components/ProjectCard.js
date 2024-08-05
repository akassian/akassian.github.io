import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
// import VisibilityIcon from "@material-ui/icons/Visibility";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

/* Styles for ProjectCard */
const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    "white-space":
      "pre-wrap" /* Allows for \n for line breaking in strings - used by resumeData */,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandedDescription: {
    "text-align": "left",
  },
}));

/* Based on Material UI Simple Card Template,
with drop-down expanded description section functionality */
export default function ProjectCard({
  title,
  description,
  expandedDescription,
  image,
  url,
  urlSource,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea href={url}>
        <CardHeader title={title} />
      </CardActionArea>
      <CardActionArea href={url}>
        <CardMedia
          className={classes.media}
          image={require("../images/" + image)}
          title={title}
        />
        {/* TODO: Hover over image -> .gif previews */}
        {/* <div
          // className={classes.thumbnail}
          style={{
            background: `url(${require(`../images/${image}`)})`,
            height: "300px",
            width: "600px",
            "background-size": "contain",
            "background-repeat": "no-repeat",
            "&:hover": {
              opacity: "0",
            },
          }}
        ></div> */}
        {/* <img src={require("../images/" + image)} alt="Bearcon.net Preview" /> */}
        {/* </CardMedia> */}
      </CardActionArea>
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="view" href={url}>
          <LanguageIcon />
        </IconButton>
        {urlSource ? <IconButton aria-label="github" href={urlSource}>
          <GitHubIcon />
        </IconButton> : null}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            variant="h6"
            className={classes.expandedDescription}
            paragraph
          >
            {expandedDescription}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
