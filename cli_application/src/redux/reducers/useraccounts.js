/* eslint-disable import/no-anonymous-default-export */
import {LIST_USER_ACCOUNTS} from '../actions/types';

const initialState={
    accounts: []
}

export default function(state=initialState, action){
    switch(action.type) {
        case LIST_USER_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        default:
            return state;
    }
}