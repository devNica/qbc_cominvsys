import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './adminpanel.css';

// Iconos
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import EditIcon from '@material-ui/icons/Edit';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import DnsIcon from '@material-ui/icons/Dns';

const AdminPanel = (props) => {
    const {modules} = props;
    const [userModules, setModules] = useState([]);

    const handleOnClick = e =>{
        props.getChoice(e.target.name)
    }

    useEffect(()=>{
      setModules(modules);

    },[modules])

    const userAccountsPanel = (
    <div>
        {/* USERMODULE*/}
        <div className="nav-item dropdown">
            <button className="list-group-item list-group-item-action item-profile h5 text-dark dropdown-toggle" 
            id="user-module-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <AccountBoxIcon  style={{ color: "#5094de"}} fontSize="small"/> Usuarios
            </button>
            <div className="dropdown-menu" aria-labelledby="user-module-dropdown">
            
            <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="edit_user" to='/administration/viewusersaccounts'>
                <DnsIcon  style={{ color: "#5094de"}} fontSize="small"/> Registros
            </Link>
            
            <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="create_user" to='/administration/adduseraccount'> 
                <PersonAddIcon  style={{ color: "#5094de"}} fontSize="small"/> Agregar Usuario
            </Link>
            
            </div>
        </div>
       
    </div>
    
    )

    const administrationPanel = (
        <div>
            {/*STAFF MODULE*/}
            <div className="nav-item dropdown">
                <button className="list-group-item list-group-item-action item-profile h5 text-dark dropdown-toggle" 
                id="staff-module-dropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <AssignmentIndIcon  style={{ color: "#5094de"}} fontSize="small"/> Staff
                </button>
                <div className="dropdown-menu" aria-labelledby="staff-module-dropdown">
                
                <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="edit_employee" to='/administration/viewemployeesrecords'>
                    <DnsIcon  style={{ color: "#5094de"}} fontSize="small"/> View Records
                </Link>

                <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="create_employee" to='/administration/addemployee'> 
                    <PersonAddIcon  style={{ color: "#5094de"}} fontSize="small"/> Add Employee
                </Link>
                
                
                
                </div>
            </div>
            {/*MODULO DE EMPLEADO*/}
            <div className="nav-item dropdown">
                <button className="list-group-item list-group-item-action item-profile h5 text-dark dropdown-toggle" 
                id="person-module-dropdown"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <PersonIcon  style={{ color: "#5094de"}} fontSize="small"/> Empleado
                </button>
                <div className="dropdown-menu" aria-labelledby="person-module-dropdown">
                
                <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="view_person" to='/administration/viewpersonsrecords'>
                    <DnsIcon  style={{ color: "#5094de"}} fontSize="small"/> Registros
                </Link>
                
                <Link className="list-group-item list-group-item-action sub-item-option h5 text-dark" name="create_person" to='/administration/addperson'> 
                    <PersonAddIcon  style={{ color: "#5094de"}} fontSize="small"/> Agregar Empleado
                </Link>
                
               
                
                </div>
            </div>
        </div>
    )

    return (
        <div className="list-group pl-4">
            <h5 className="font-weight-bold text-uppercase pt-2" style={{color: "#196ac2"}}>MODULOS</h5>
            { 
                userModules !== undefined && userModules.length > 0 ?
                    userModules.find(module => module === 'USER_ACCOUNTS') ? userAccountsPanel: null
                : null
            
            }
            {
                userModules !== undefined && userModules.length > 0 ?
                    userModules.find(module => module === 'ADMINISTRATION') ? administrationPanel:  null
                : null

            }
        
        
            <br/>
    </div>
    );
};

export default AdminPanel;