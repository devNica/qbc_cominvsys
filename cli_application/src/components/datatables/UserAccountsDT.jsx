import React, { useState, useEffect, useCallback } from 'react';
import {MDBDataTable} from 'mdbreact';
import {connect} from 'react-redux';
import {useraccounts_model} from '../models/useraccounts';
import {Link} from 'react-router-dom';

const mapStateToProps = state=>({
    accounts: state.useraccounts.accounts
})

const opciones = (data)=>{

    let opciones = (
        <div>
            <Link 
                className="btn btn-sm btn-outline-primary" 
                //value={accounts.data.rows[i].IDUSUARIO} 
                to={`/assignmentview/${data.IDUSUARIO}`}
                >Ver
            </Link>
            <Link 
                className="btn btn-sm btn-outline-dark mx-1" 
                //value={accounts.data.rows[i].IDUSUARIO} 
                to={`/manageassignment/${data.IDUSUARIO}`}
                >Administrar
            </Link>
        </div>
    )

    return opciones;
    
}

const UserAccountsDT = (props)=>{
    const {accounts} = props;
    const [data, setData] = useState(useraccounts_model([]).data)

    
    const handleOnClick = useCallback((e)=>{
        console.log(e)
       
    },[])

    
    useEffect(()=>{
        
        if(accounts.data !== undefined){

            let func='clickEvent'
            for(let i=0; i<accounts.data.rows.length; i++){
                Object.defineProperty(accounts.data.rows[i], func, {value: handleOnClick, configurable: true})
                Object.defineProperty(accounts.data.rows[i], 'OPCIONES', { value: opciones(accounts.data.rows[i]), configurable: true})   
            }
            setData(accounts.data);
        }
               
    },[accounts, handleOnClick])

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

export default connect(mapStateToProps)(UserAccountsDT);