import React, { Fragment } from 'react';
import GuestRoute from "./components/commons/GuestRoute";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/user/Login";

const App = ({ location }) => {

  return (
    <Fragment>  
      <Navbar/>
        <GuestRoute location={location} exact path = "/login" component={Login}/>
    </Fragment>
  );

}

export default App;
