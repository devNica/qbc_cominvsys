import { CREATE_NOTIFICATION } from "./types";

export const fxUpdateProfileImage = (data) => (dispatch)=>{
    dispatch({
        type: CREATE_NOTIFICATION,
        payload: data
    });
}