import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#40c4ff",
    },
    secondary: {
      main: "#fff9c4",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  positionMenu: {
    flexGrow: 30,
    marginLeft: theme.spacing(2),
  },
  ButtonLink: {
    textDecoration: "none",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              color="secondary"
            >
              App Management
            </Typography>
            <div className={classes.positionMenu}>
              <Button variant="contained" color="secondary">
                FrontDesk
              </Button>
              &nbsp;&nbsp;
              <Link to="/">
                <Button
                  variant="contained"
                  color="secondary"
                  className="ButtonLink"
                >
                  UserList
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Link to="/task">
                <Button
                  variant="contained"
                  color="secondary"
                  className="ButtonLink"
                >
                  Task
                </Button>
              </Link>
              &nbsp;&nbsp;
              <Button
                variant="contained"
                color="secondary"
                className="ButtonLink"
              >
                About
              </Button>
            </div>

            <Button variant="outlined" color="secondary">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
}
