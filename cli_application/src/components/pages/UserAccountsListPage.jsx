import React,{useEffect} from 'react'
import './UserAccountsListPage.css'
import {connect} from 'react-redux';
import {fx_listUserAccounts} from '../../redux/actions/useraccounts'
import UserAccountsDT from '../datatables/UserAccountsDT';

const mapStateToProps = state => ({
    token_fr: state.auth.token
});

const UserAccountsListPage = ({token_fr, fx_listUserAccounts}) =>{
    
    useEffect(()=>{
        fx_listUserAccounts({token: token_fr})
    },[fx_listUserAccounts, token_fr])
    
    return(
        <div>
            <h4 className="title-module">Lista de Cuentas de Usuario</h4>
            <UserAccountsDT/>
        </div>
    )
}


export default connect(mapStateToProps,{fx_listUserAccounts})(UserAccountsListPage);

