import React, { Fragment } from 'react';
import GuestRoute from "./components/commons/GuestRoute";
import PrivateRoute from "./components/commons/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile/Profile";
import Notification from "./components/notifications/Notification";

const App = ({ location }) => {

  return (
    <Fragment>  
      <Navbar/>
        <Notification/>
        <GuestRoute location={location} exact path = "/login" component={Login}/>
        <PrivateRoute location={location} exact path = "/profile" component={Profile}/>
    </Fragment>
  );

}

export default App;
