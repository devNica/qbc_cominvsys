import { CREATE_NOTIFICATION } from "./types";

export const fn_create_notification = (data) => (dispatch)=>{
    dispatch({
        type: CREATE_NOTIFICATION,
        payload: data
    });
}

