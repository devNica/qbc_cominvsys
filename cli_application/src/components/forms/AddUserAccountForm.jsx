import React, { useState } from 'react'
import { Fragment } from 'react'
import './AddUserAccountForm.css'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';

const AddUserAccountForm = ({empleado_fc, submit}) =>{

    const [user, setUser] = useState({username: '', password: '', fk_empleado: 0})
    const [flag, setFlag] = useState(false)
    const [myClass, setClass] = useState('form-control mx-1 text-center text-primary')
    const {username, password} = user;

    const handleSubmit = evt =>{
        evt.preventDefault()
        setClass('form-control mx-1 text-center confirm')
        let usernameField = document.getElementById('username');
        let passwordField = document.getElementById('password');
        let fkempleadoField = document.getElementById('fk_empleado');
        let empleadoField = document.getElementById('empleado');
        let confirmButton = document.getElementById('confirm');
        let showpassButton = document.getElementById('showpass')
        usernameField.disabled = true;
        passwordField.disabled = true;
        fkempleadoField.disabled = true;
        empleadoField.disabled = true;
        confirmButton.disabled = true;
        showpassButton.disabled = true;

        alert(`Los datos del usuario, han sido confirmados`)
       
       submit(user);
   }

   const showPassword = () =>{
            let tipo = document.getElementById("password");
            if(tipo.type === "password"){
                tipo.type = "text";
                setFlag(!flag)
            }else{
                tipo.type = "password";
                setFlag(!flag)
            }
   }

    const handleChange = evt =>{
        const {name, value} = evt.target;
        setUser(user =>({...user, [name]: value.toUpperCase()}));
    }

    const showIcon = flag ? <VisibilityOffIcon style={{ color: '#fffff'}} fontSize="small"/> : <VisibilityIcon style={{ color: '#fffff'}} fontSize="small"/>

    return (
    <Fragment>  
        <div className="container mt-3">
            <div className="row">
                <div className="col-12">
                    <div className="card border">
                        
                        <div className="card-body">

                            <form onSubmit={handleSubmit}>
                                <div className="form-inline">
                                    <div className="form-group">
                                        <label  className="mx-1 font-weight-bold">USERNAME:</label>
                                        <input 
                                            type="text" 
                                            className={myClass} 
                                            id="username" name="username" 
                                            defaultValue={username}
                                            onChange={handleChange}
                                            size='20'
                                            autoComplete='off'
                                            />
                                    </div>
                                    <div className="form-row mx-4">
                                        <label  className="mx-1 font-weight-bold">PASSWORD:</label>
                                        <input 
                                            type="password" 
                                            className={myClass} 
                                            id="password" 
                                            name="password" 
                                            defaultValue={password}
                                            onChange={handleChange}
                                            size='20'
                                            required
                                        />
                                        <button id="showpass" type="button" className="btn btn-primary btn-sm" onClick={showPassword}>{showIcon}</button>
                                    </div>
                                    <div className="form-group">
                                        <label className="mx-1 font-weight-bold">IDEMPLEADO:</label>
                                        <input 
                                            type="text" 
                                            className={myClass} 
                                            id="fk_empleado" name="fk_empleado"
                                            value={empleado_fc.fk_empleado}
                                            size='10'
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label className="mx-1 font-weight-bold">EMPLEADO:</label>
                                        <input 
                                            type="text" 
                                            className={myClass} 
                                            id="empleado" 
                                            name="empleado" 
                                            size='20'
                                            value={empleado_fc.nombre}
                                            readOnly
                                            />
                                    </div>
                                </div>
                                <div className="form-group mt-4">
                                    <button id='confirm' type="submit" className="btn btn-primary btn-sm btn-block mt-2">Confirmar Informacion</button>
                                </div>
                                
                            </form> 
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default AddUserAccountForm;