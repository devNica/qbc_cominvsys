import React,{useEffect} from 'react'
import {connect} from 'react-redux';
import {fx_listUserAccounts, fxCLearListUserAccounts} from '../../redux/actions/useraccounts'
import UserAccountsDT from '../datatables/UserAccountsDT';
import HeaderPage from './HeaderPage';

const mapStateToProps = state => ({
    token_fr: state.auth.token
});

const UserAccountsListPage = ({token_fr, fx_listUserAccounts, fxCLearListUserAccounts}) =>{
    
    useEffect(()=>{
        fx_listUserAccounts({token: token_fr})

        return ()=> fxCLearListUserAccounts();

    },[fx_listUserAccounts, token_fr, fxCLearListUserAccounts])
    
    return(
        <div>
            <HeaderPage title="Listar Cuentas de Usuario"/>
            <UserAccountsDT/>
        </div>
    )
}


export default connect(mapStateToProps,{fx_listUserAccounts, fxCLearListUserAccounts})(UserAccountsListPage);

