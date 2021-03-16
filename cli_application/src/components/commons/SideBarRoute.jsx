import React,{Fragment} from 'react';
import { Route } from 'react-router-dom';
import AdminPanel from '../panel/AdminPanel';
import InfoProfile from '../user/Profile/InfoProfile';
import Denied from '../user/Dashboard/Denied';

import { connect } from 'react-redux';



const SideBarRoute = ({ component: Component, isAuthenticated, user_fr, token_fr, ...rest }) => {

    return(
        <Route
        {...rest}
        render={props =>

            isAuthenticated ?  
            <div className="wrapper">
                <nav id="sidebar" className="shadow-orange-right">
                    <Fragment>
                        <div className="sidebar-header">
                            <InfoProfile user_fc={user_fr} token_fc={token_fr}/> 
                        </div>
                        <br/>
                    <AdminPanel modules={user_fr.MODULO} permissions={user_fr.PERMISO}/>
                    </Fragment>
                </nav>
                <div id="content">
                    <Component {...props} />
                </div>
            </div> : 

            <Denied/>
        }
    />
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user_fr: state.auth.user,
    token_fr: state.auth.token
});

export default connect(mapStateToProps)(SideBarRoute);