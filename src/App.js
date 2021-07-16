import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Signin from "./Signin";
import Signup from "./Signup";
import Navbar from "./Navbar";
// import Users from "./Users";
import UserList from "./UsersList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import TaskManagement from "./TaskManagement";
import PageNotFound from "./PageNotFound";
import reducer from "./reducer";

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/edit/:id" component={EditUser} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/task" component={TaskManagement} />
            <Route exact path="/" component={UserList} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
