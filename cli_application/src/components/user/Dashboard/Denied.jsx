import React, {} from 'react'
import {Link} from 'react-router-dom'


const Denied = () =>{
    return (
        <div className="container">
            <div className="py-3 px-3">
                <div class="jumbotron">
                    <h1 class="display-4">¡Aviso!</h1>
                    <hr class="my-4"/>
                    <p>El usuario no cuenta con los permisos requeridos para acceder a este modulo</p>
                    <Link class="btn btn-primary btn-lg" role="button" to='/profile'>Ir al Perfil</Link>
                </div>
            </div>
        </div>
    )
}

export default Denied;