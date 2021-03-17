import React, { useState, useEffect, useCallback } from 'react';
import {MDBDataTable} from 'mdbreact';
import {connect} from 'react-redux';
import {employee_model} from '../models/employee';
import {Link} from 'react-router-dom';

const mapStateToProps = state=>({
    employees: state.useraccounts.employees
})

const opciones = (data)=>{

    let opciones = (
        <div>
            <Link 
                className="btn btn-sm btn-outline-dark mx-1" 
                //value={accounts.data.rows[i].IDUSUARIO} 
                to={`/employee/admin/${data.IDEMPLEADO}`}
                >Administrar
            </Link>
        </div>
    )

    return opciones;
    
}

const EmployeeDT = (props)=>{
    const {employees, selectRow} = props;
    const [data, setData] = useState(employee_model([]).data)

    
    const handleOnClick = useCallback((data)=>{
      
        selectRow({fk_empleado: data.IDEMPLEADO, nombre: data.NOMBRECOMPLETO})
       
    },[selectRow])

    
    useEffect(()=>{
        
        if(employees.data !== undefined){

            let func='clickEvent'
            for(let i=0; i<employees.data.rows.length; i++){
                Object.defineProperty(employees.data.rows[i], func, {value: handleOnClick, configurable: true})
                Object.defineProperty(employees.data.rows[i], 'OPCIONES', { value: opciones(employees.data.rows[i]), configurable: true})   
            }
            setData(employees.data);
        }
               
    },[employees, handleOnClick])

    return (
        <div className="container my-2 py-3">
            <MDBDataTable
                bordered
                hover
                data={data}
                entries={3}
                entriesOptions={[3,5,10,20,40]}
                
            />
        </div>
    );
    
}

export default connect(mapStateToProps)(EmployeeDT);