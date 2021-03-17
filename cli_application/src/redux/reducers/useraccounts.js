/* eslint-disable import/no-anonymous-default-export */
import {LIST_USER_ACCOUNTS, LIST_EMPLOYEES, CLEAR_LIST_USERACCOUNTS} from '../actions/types';

const initialState={
    accounts: [],
    employees: []
}

export default function(state=initialState, action){
    switch(action.type) {
        case LIST_USER_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        case CLEAR_LIST_USERACCOUNTS:
            return {
                ...state,
                accounts: []
            }
        case LIST_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }

        default:
            return state;
    }
}