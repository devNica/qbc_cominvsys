import React, {useCallback} from 'react'
import { Fragment } from 'react';
import DnsIcon from '@material-ui/icons/Dns';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import {Link} from 'react-router-dom'


const UserAccountsOptionsMenu = () =>{

    const handleOnClick = useCallback( (evt) =>{
        evt.preventDefault();
    },[])

    return(
        <Fragment>
            <div className="nav-item dropdown">
                <a href="/" onClick={handleOnClick} role="button" className="elemento-padre item-profile h5 text-dark dropdown-toggle" 
                    id="user-module-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <AccountBoxIcon  style={{ color: "#5094de"}} fontSize="small"/> Usuarios
                </a>
                <div className="dropdown-menu" aria-labelledby="user-module-dropdown">
                    <Link  role="button" className="elemento-hijo h5 text-dark" name="LISTAR-USER_ACCOUNTS" to='/useraccounts/listaccounts'>
                        <DnsIcon  style={{ color: "#5094de"}} fontSize="small"/> Registros
                    </Link>
                    <Link role="button" className="elemento-hijo h5 text-dark" name="CREAR-USER_ACCOUNTS" to='/useraccounts/addaccount'> 
                        <PersonAddIcon  style={{ color: "#5094de"}} fontSize="small"/> Agregar Usuario
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}


export default UserAccountsOptionsMenu;