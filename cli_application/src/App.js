import React, { Fragment } from 'react';
import GuestRoute from "./components/commons/GuestRoute";
// import PrivateRoute from "./components/commons/PrivateRoute";
import SideBarRoute from "./components/commons/SideBarRoute";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/user/Login";
import Notification from "./components/notifications/Notification";
import UserProfile from './components/user/Profile/UserProfile'
import UserAccountsListPage from './components/pages/UserAccountsListPage'
import AddUserAccountPage from './components/pages/AddUserAccountPage';

const App = ({ location }) => {

  return (
    <Fragment>  
      <Navbar/>
        <Notification/>
        <GuestRoute location={location} exact path = "/login" component={Login}/>
        {/* <PrivateRoute location={location} exact path = "/profile" component={Profile}/> */}
        <SideBarRoute location={location} exact path = "/profile" component={UserProfile}/>
        <SideBarRoute location={location} exact path = "/useraccounts/listaccounts" component={UserAccountsListPage}/>
        <SideBarRoute location={location} exact path = "/useraccounts/addaccount" component={AddUserAccountPage}/>
        
    </Fragment>
  );

}

export default App;
