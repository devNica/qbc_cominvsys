import { combineReducers } from "redux";
import auth from "./auth";
import notifications from "./notifications";
import useraccounts from './useraccounts'

export default combineReducers({
   auth,
   notifications,
   useraccounts
});
