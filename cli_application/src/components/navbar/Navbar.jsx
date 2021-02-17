import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { fxLogout } from '../../redux/actions/auth';
import './navbar.css'

const mapStateToProps = state =>({
    isAuthenticated : state.auth.isAuthenticated,
    user: state.auth.user
})

const Navbar = ({fxLogout, history, user}) =>{

    const handleUserLogout = e => {
        e.preventDefault();
        fxLogout();
        history.push('/');
    }

    const userLink = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link font-weight-bold text-white" to="/profile">PROFILE</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="null" onClick={ handleUserLogout }>SALIR</a>
            </li>

        </ul>
    )

    const guestLink = (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link font-weight-bold text-white" to="/Login">INICIAR SESION</Link>
            </li>
        </ul>
    )
        
        
    return (
        <nav className="navbar navbar-expand-lg navbar-dark background-navbar">
            <Link className="navbar-brand" to="/">Syswork20R</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="basicExampleNav">

                
            {localStorage.token ? userLink : guestLink}
                
            </div>
            </nav>
    );
    
}

export default connect(mapStateToProps,{fxLogout})(withRouter(Navbar));