import React from 'react';
import {Link} from 'react-router-dom';

const GuestLink = () =>{
    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link font-weight-bold text-white" to="/login">INICIAR SESION</Link>
            </li>
        </ul>
    )
}

export default React.memo(GuestLink);