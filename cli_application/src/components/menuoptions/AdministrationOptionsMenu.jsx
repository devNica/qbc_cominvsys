import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import PersonIcon from '@material-ui/icons/Person';
import DnsIcon from '@material-ui/icons/Dns';


const AdministrationOptionsMenu = ()=>{
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default AdministrationOptionsMenu;