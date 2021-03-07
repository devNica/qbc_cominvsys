import React, { useState} from 'react';
//import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {connect} from 'react-redux';
import { fxLogin } from '../../redux/actions/auth';
import { fn_create_notification } from "../../redux/actions/notifications";

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

const Login = (props) => {

    const {isAuthenticated, fxLogin, history, fn_create_notification } = props;
    const [inputs, setInputs] = useState({username: "", password: ""});
    const {username, password} = inputs;
    
    const handleOnChange=e=>{
        const {name, value} = e.target;
        setInputs(inputs =>({...inputs, [name]: value}));
        
    }

    const handleOnSubmit = e =>{
        e.preventDefault();

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
   
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header background-card-header text-white font-weight-bold">
                            INICIAR SESION
                        </div>
                        <div className="card-body">

                            <form onSubmit={handleOnSubmit}>
                                <label htmlFor="username" className="grey-text">
                                USERNAME
                                </label>
                                <input 
                                    type="text" 
                                    id="username" 
                                    className="form-control" 
                                    name='username'
                                    onChange={handleOnChange}
                                    value={username}
                                    autoComplete='off'
                                />
                                <br />
                                <label htmlFor="password" className="grey-text">
                                PASSWORD
                                </label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    className="form-control" 
                                    name="password"
                                    onChange={handleOnChange}
                                    value={password}
                                />
                                <div className="text-center mt-4">
                                <button className="btn" style={{ background: '#3a3f80ef', color: '#ffffff'}}>LOGIN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default connect(mapStateToProps, {fxLogin, fn_create_notification})(Login);