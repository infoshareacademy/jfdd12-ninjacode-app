import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Avatar from "@material-ui/core/Avatar";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import MoreIcon from "@material-ui/icons/MoreVert";
import Icon from "@material-ui/core/Icon";
import { Button } from "@material-ui/core";

const messages = [
  {
    id: 1,
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: ""
  }
];

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  paper: {
    paddingBottom: 50
  },
  list: {
    marginBottom: theme.spacing(2)
  },
  subheader: {
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    top: "auto",
    bottom: 0
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

export default function BottomAppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper
        style={{ backgroundColor: "white", height: "100vh" }}
        square
        className={classes.paper}
      >
        <Typography className={classes.text} variant="h3" gutterBottom>
          Dashboard
        </Typography>
        <i className="material-icons">face</i>
        <i className="material-icons">assessment</i>
        <i className="material-icons">list_alt</i>
      </Paper>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Wykresy">
            <Icon fontSize="large">dashboard</Icon>
            {/* <Typography variant="button">Dashboard</Typography> */}
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            label="History"
            aria-label="History"
          >
            <Icon fontSize="large">list_alt</Icon>
            {/* <Typography variant="button">Historia</Typography> */}
          </IconButton>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <div className={classes.grow} />

          <IconButton color="inherit" aria-label="Wykresy">
            <Icon fontSize="large">assessment</Icon>
            {/* <Typography variant="button">Wykresy</Typography> */}
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
