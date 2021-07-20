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
import UsersList from "./UsersList";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import TaskManagement from "./TaskManagement";
import PageNotFound from "./PageNotFound";
import reducer from "./reducer";
// import Navbar2 from './Navbar2';

function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          {/* <Navbar2 /> */}
          <Switch>
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/edit/:id" component={EditUser} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/task" component={TaskManagement} />
            <Route exact path="/UsersList" component={UsersList} />
            <Route exact path="/" component={UsersList} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
