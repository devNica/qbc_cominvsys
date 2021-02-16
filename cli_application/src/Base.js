import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

const Base = ()=>{
    return (
        <BrowserRouter basename='/'>
            <Provider store={store}>
               <Route component={App} />
            </Provider>
        </BrowserRouter>
    );    
}

export default Base;