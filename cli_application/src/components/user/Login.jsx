import React,{ useCallback } from 'react';
//import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {connect} from 'react-redux';
import { fxLogin } from '../../redux/actions/auth';
import { fn_create_notification } from "../../redux/actions/notifications";
import LoginForm from './LoginForm';
import "./Login.css"

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

const Login = (props) => {

    const {isAuthenticated, fxLogin, history, fn_create_notification } = props;
    
    /*El hook useCallback es utilizado para evitar que la funcion se cree cada
    vez que el componente se renderiza nuevamenete, de esta forma
    solo se va volver a crear si sus dependencias cambian*/
    const handleOnSubmit = useCallback (data =>{

        const {username, password} = data;

        let msg, count, error;
        error = false;
        count = 0;
        msg = [];


        if(username===''){
            count=count+1;
            msg[count-1]='Por favor introduzca un nombre de usuario - ';
            error=true 
        }

        if(password===''){
            count=count+1;
            msg[count-1]='Por favor introduzca una contraseña - ';
            error=true 
        }
        
        if(!error){

            let user={
                username,
                password
            }

            fxLogin(user);
            if(isAuthenticated){
                history.push('/profile')
            }
            
        }else{
            const reducer = (acc, curr) => acc + curr;
            let msg1 = msg.reduce(reducer);
            fn_create_notification({
                msg: msg1.substr(0, msg1.length-3),
                time: 2500,
                type: "danger"
            });
        }
   
    },[fxLogin, history, isAuthenticated, fn_create_notification])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <LoginForm onSubmit={handleOnSubmit}/>
                </div>
            </div>
        </div>
    );
    
}

export default connect(mapStateToProps, {fxLogin, fn_create_notification})(Login);