import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import GuestLink from './GuestLink';
import './navbar.css'
import UserLink from './UserLink';

const Navbar = ({history}) =>{

    return (
        <nav className="navbar navbar-expand-lg navbar-dark background-navbar">
            <Link className="navbar-brand" to="/">Syswork20R</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">
                {localStorage.token ? <UserLink history={history}/> : <GuestLink/>}
            </div>
        </nav>
    );
    
}

export default withRouter(Navbar);