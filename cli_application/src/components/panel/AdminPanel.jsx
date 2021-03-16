import React, {useState, useEffect} from 'react';
import './Adminpanel.css';

import UserAccountsOptionsMenu from '../menuoptions/UserAccountsOptionsMenu';
import AdministrationOptionsMenu from '../menuoptions/AdministrationOptionsMenu';

const AdminPanel = ({modules}) => {
    
    const [userModules, setModules] = useState([]);

    useEffect(()=>{
      setModules(modules);

    },[modules])

    return (
        <div className="list-group pl-4">
            <h5 className="font-weight-bold text-uppercase pt-2" style={{color: "#196ac2"}}>MODULOS</h5>
            { 
                userModules !== undefined && userModules.length > 0 ?
                    userModules.find(module => module === 'USER_ACCOUNTS') ? <UserAccountsOptionsMenu/> : null
                : null
            
            }
            {
                userModules !== undefined && userModules.length > 0 ?
                    userModules.find(module => module === 'ADMINISTRATION') ? <AdministrationOptionsMenu/> :  null
                : null

            }
        
            <br/>
    </div>
    );
};

export default AdminPanel;