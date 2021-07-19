import React, { Component } from "react";
import * as action from "./action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Users from "./Users";
import {
  withStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#283593",
    },
    secondary: {
      main: "#e0f7fa",
    },
  },
});

const useStyles = (theme) => ({
  card: {
    maxWidth: 345,
    marginTop: 30,
  },
  media: {
    height: 250,
  },
  buttonColor: {
    backgroundColor: "#e57373",
    // warning: "#ffb74d",
    // error: "#e57373",
  },
});
class UsersList extends Component {
  render() {
    const { classes } = this.props;
    const allUsers = this.props.usersFromDatabase;
    let lists = (
      <div>
        <h1>Do not found data</h1>
      </div>
    );
    if (allUsers.lenght !== 0) {
      lists = allUsers.map((item) => (
        <div key={item.id}>
          <Users data={item} />
        </div>
      ));
    }
    return (
      <ThemeProvider theme={theme}>
        <div>{lists}</div>
      </ThemeProvider>
    );
  }
  componentDidMount() {
    this.props.getAllUsers();
  }
}
const mapStateToProps = (state) => {
  return {
    usersFromDatabase: state.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllusers: () => {
      return dispatch(action.getUserList());
    },
  };
};
export default (connect(mapStateToProps, mapDispatchToProps),
withStyles(useStyles))(UsersList);
