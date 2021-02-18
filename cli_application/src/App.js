import React, { Fragment } from 'react';
import GuestRoute from "./components/commons/GuestRoute";
import PrivateRoute from "./components/commons/PrivateRoute";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/user/Login";
import Profile from "./components/user/Profile/Profile";

const App = ({ location }) => {

  return (
    <Fragment>  
      <Navbar/>
        <GuestRoute location={location} exact path = "/login" component={Login}/>
        <PrivateRoute location={location} exact path = "/profile" component={Profile}/>
    </Fragment>
  );

}

export default App;
