/* eslint-disable import/no-anonymous-default-export */
import {LOAD_USER, AUTH_ERROR, LOGOUT, LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    userLoading: false,
    user: JSON.parse(localStorage.getItem("user"))
};

export default function (state = initialState, action){
    switch(action.type){
        case LOAD_USER:
            return{
                ...state,
                isAuthenticated: true,
                userLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL: 
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                userLoading: false
                
            }
        case LOGOUT:
            localStorage.removeItem("token");
            localStorage.removeItem("user")
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                userLoading: false
            }
            
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user))
            return{
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                isAuthenticated: true,
                userLoading: false
            }
        
        default: 
            return state;
    }
}