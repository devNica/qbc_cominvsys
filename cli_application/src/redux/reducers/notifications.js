/* eslint-disable import/no-anonymous-default-export */
import { CREATE_NOTIFICATION } from "../actions/types";

const initialState = {
    note: {
        type: null,
        msg: "",
        time: 0
    },
}

export default function (state = initialState, action){
    switch(action.type){
        case CREATE_NOTIFICATION:
            return {
                ...state,
                note: action.payload
            }
        default: 
            return state;
    }
}