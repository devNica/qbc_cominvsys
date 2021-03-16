import React, {} from 'react'
import {Link} from 'react-router-dom'
import './Denied.css'

const Denied = () =>{

    const Message = (
        <div className="container mt-5">
            <div className="jumbotron text-white">
                <h1 className="display-4">¡Aviso!</h1>
                <p className="lead">
                    No dispone de los permisos necesarios para acceder a esta vista, porque no ha iniciado sesion
                </p>
                <div className="mt-4">
                    <Link className="enlaceboton" to="/login" >Iniciar Sesion</Link>
                </div>
            </div>
        </div>
    )

    return (
        Message
    )
}

export default Denied;