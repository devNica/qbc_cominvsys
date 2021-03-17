import React,{useEffect, useState} from 'react'
import { Fragment } from 'react';
import EmployeeDT from '../datatables/EmployeeDT';
import AddUserAccountForm from '../forms/AddUserAccountForm';
import HeaderPage from './HeaderPage';
import {connect} from 'react-redux';
import {fxListEmployeeUA} from '../../redux/actions/useraccounts';
import {Link} from 'react-router-dom';

const mapStateToProps = state => ({
    token_fr: state.auth.token
});

const AddUserAccountPage = ({token_fr, fxListEmployeeUA}) =>{
    
    const [empleado, setEmpleado] = useState({fk_empleado: 0 , nombre: ''})

    const handleSelect = data =>{
        setEmpleado(data);
    }

    const handleSubmit = user =>{
        
        console.log(user)
    }

    useEffect(()=>{
        fxListEmployeeUA({token: token_fr});

    },[fxListEmployeeUA, token_fr])
    
    return (
        <Fragment>
           <HeaderPage title="Agregar Cuenta de Usuario"/>
           <ul>
               <li className="list-group-item">
                    <span className="font-weight-bold"> 
                       Paso 1. Seleccione un registro de la siguiente tabla:
                    </span>
                    <EmployeeDT selectRow={handleSelect}/>
               </li>
               <li className="list-group-item">
                    <span className="font-weight-bold"> 
                       Paso 2. Completar y confirmar los datos del formulario de registro:
                    </span>
                   <AddUserAccountForm empleado_fc={empleado} submit={handleSubmit}/>
               </li>
               <li className="list-group-item">
                    <span className="font-weight-bold"> 
                       Paso 3. Salvar la informacion en la base de datos:
                    </span>
                    <div className="container mt-3 form-inline">
                        <button className="btn btn-success btn-sm" type="button"> 
                            Crear Cuenta
                        </button>
                        <Link className="btn btn-danger btn-sm mx-2" to="/profile"> 
                            Regresar al perfil
                        </Link>
                    </div>
               </li>
           </ul>
         
        </Fragment>
    )
}


export default connect(mapStateToProps, {fxListEmployeeUA})(AddUserAccountPage);