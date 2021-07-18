import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";
import InputBase from "@material-ui/core/InputBase";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import BallotIcon from "@material-ui/icons/Ballot";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBox from "@material-ui/icons/AccountBox";

import {
  createTheme,
  makeStyles,
  ThemeProvider,
  alpha,
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import { Grid } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#283593",
    },
    secondary: {
      main: "#fff59d",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    // margin: theme.spacing(0),
  },
  imglogo: {
    maxHeight: 35,
    maxWidth: 35,
    border: "1.5px solid white",
    borderRadius: 8,
    marginRight: 10,
  },
  menuGroup: {
    marginLeft: 20,
    marginRight: 20,
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" disableGutters>
        <AppBar position="static">
          <Toolbar>
            {/* ---------------------------logo----------------------------------*/}
            <img className={classes.imglogo} src="logo.jpg" alt="logo" />
            <Typography
              variant="h5"
              color="inherit"
              style={{
                fontFamily: "Audiowide, sans-serif",
                textShadow: "2px 2px 2px #ababab",
              }}
            >
              Revosoft
            </Typography>
            {/* ---------------------------logo----------------------------------*/}
            {/* ---------------------------Menu----------------------------------*/}
            <Grid container spacing={2} className={classes.menuGroup}>
              <Grid item >
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<DashboardIcon />}
                >
                  Front Desk
                </Button>
              </Grid>
              <Grid item >
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<ContactMailIcon />}
                >
                  Contact List
                </Button>
              </Grid>
              <Grid item >
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  startIcon={<BallotIcon />}
                >
                  Task
                </Button>
              </Grid>
            </Grid>
            {/* ---------------------------Menu----------------------------------*/}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountBox />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </ThemeProvider>
  );
}
