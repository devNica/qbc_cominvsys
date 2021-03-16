import {LIST_USER_ACCOUNTS, CREATE_NOTIFICATION} from './types'
import { models } from '../../components/models/models';
import api from '../../api/api';

export const fx_listUserAccounts = (token) => dispatch =>{
    api.useraccounts.list(token).then(response=>{
        const {success, msg, accounts} = response;

        let info = models.useraccounts(accounts);

        if(success){
            dispatch({
                type: LIST_USER_ACCOUNTS,
                payload: info
            })
        }else{
            dispatch({
                type: CREATE_NOTIFICATION,
                payload: {
                    msg,
                    type: "danger",
                    time: 2500
                }
            })
        }
    })
}