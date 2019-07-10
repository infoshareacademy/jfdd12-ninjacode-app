import React from "react";
import { NavLink } from "react-router-dom";
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
import { Button, Modal } from "@material-ui/core";
import { ExpensesForm } from "./components/ExpensesForm";

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
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));
function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState();

  return null;
}

export default function BottomAppBar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  function modalForm() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <React.Fragment>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <ExpensesForm />
        </div>
      </Modal>
      <CssBaseline />

      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <NavLink exact to="/">
            <IconButton edge="start" color="inherit" aria-label="Wykresy">
              <Icon fontSize="large">dashboard</Icon>
              {/* <Typography variant="button">Dashboard</Typography> */}
            </IconButton>
          </NavLink>
          <NavLink to="/history">
            <IconButton
              edge="start"
              color="inherit"
              label="History"
              aria-label="History"
            >
              <Icon fontSize="large">list_alt</Icon>
              {/* <Typography variant="button">Historia</Typography> */}
            </IconButton>
          </NavLink>
          <Fab
            color="secondary"
            aria-label="Add"
            className={classes.fabButton}
            onClick={handleOpen}
          >
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <NavLink to="/wykresy">
            <IconButton color="inherit" aria-label="Wykresy">
              <Icon fontSize="large">assessment</Icon>
              {/* <Typography variant="button">Wykresy</Typography> */}
            </IconButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
