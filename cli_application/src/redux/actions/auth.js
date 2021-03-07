import { LOAD_USER, AUTH_ERROR, CREATE_NOTIFICATION, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import api from "../../api/api";

export const fxLoadUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    if(token){
        dispatch({ type: LOAD_USER});
    }else{
        dispatch({ type: AUTH_ERROR });
    }
}

export const fxLogin = credentials => (dispatch) => {
    api.user.login(credentials)
    .then(response => {
        /**SI LAS CREDENCIALES SON CORRECTAS*/
        if(response.flag){
            let user = response.usuario[0];
            let token = response.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    user,
                    token
                }
            });

            dispatch({
                type: CREATE_NOTIFICATION,
                payload: {
                    msg: "Bienvenido",
                    type: "success",
                    time: 2500
                }
            })
        }
        /**SI LAS CREDENCIALES FALLAN */
        else{
            dispatch({
                type: LOGIN_FAIL
            })

            dispatch({
                type: CREATE_NOTIFICATION,
                payload: {
                    msg: response.msg,
                    type: "danger",
                    time: 2500
                }
            })
        }
        
    })
    .catch(err => console.log(err));
}

export const fxLogout = () =>(dispatch)=>{
    dispatch({
        type: LOGOUT
    });
}