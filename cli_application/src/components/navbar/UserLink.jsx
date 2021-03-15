import React,{useCallback} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' 
import { fxLogout } from '../../redux/actions/auth';

const UserLink = ({fxLogout, history}) =>{

    const handleUserLogout = useCallback((e) => {
        e.preventDefault();
        fxLogout();
        history.push('/');
    },[fxLogout, history])


    return(
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link font-weight-bold text-white" to="/profile">PROFILE</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link font-weight-bold text-white" href="null" onClick={ handleUserLogout }>SALIR</a>
            </li>

        </ul>
    )
}

export default connect(null,{fxLogout})(UserLink)