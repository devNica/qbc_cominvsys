import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactNotifications from 'react-notifications-component';
import App from './App';
import { fxLoadUser } from "./redux/actions/auth";

const Base = ()=>{

    useEffect(()=>{
        store.dispatch(fxLoadUser());
    })

    return (
        <BrowserRouter basename='/'>
            <Provider store={store}>
                <ReactNotifications/>
               <Route component={App} />
            </Provider>
        </BrowserRouter>
    );    
}

export default Base;