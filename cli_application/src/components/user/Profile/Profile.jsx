/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment } from 'react';
import { connect } from 'react-redux';
import AdminPanel from '../../panel/AdminPanel';
//import NotificacionProceso from '../../notifications/NotificacionProceso';
import Notification from "../../notifications/Notification";

import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import { useState, useEffect } from 'react';
import noImg from './noimage.png';
import UploadImage from '../../modal/UploadImage';
import { downloadImage } from '../../../api/api'

const mapStateToProps = state => ({
    user_fr: state.auth.user,
})

const Profile = ({user_fr}) =>{

    const [statusImg, setStatusImg] = useState(false)
    const [profileImg, setImg] = useState('')

    const arrayBufferToBase64 = (buffer) =>{
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));   
        bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    };

    useEffect(()=>{
        downloadImage({IDUSUARIO: user_fr.IDUSUARIO}).then(response=>{
            
            if(response.flag){
                let imgStrs = arrayBufferToBase64(response.photo.data)
                let base64Flga=`data:image/png;base64,`

                if(response){
                    setImg(base64Flga+imgStrs)
                    setStatusImg(true)
                }
                else{
                    console.log(`No hay respuesta`);
                }
            }
        }).catch(error=>console.log(error))

    },[user_fr])

    
    
    const dashboard=(
        <Fragment>
            <nav id="sidebar" className="shadow-orange-right">
                <div className="sidebar-header">
                    <figure className="snip1566">
                        <img src={statusImg ? profileImg : noImg} alt="user_image" />
                        <figcaption>
                            <AddTwoToneIcon className="icon" style={{ fontSize: 95}} />
                        </figcaption>
                        <a type="button" data-toggle="modal" data-target="#uploadImageModal" href="#" />
                    </figure>
                    <UploadImage IDUSUARIO={user_fr.IDUSUARIO} />
                    <table className="table table-hover">
                        <tbody>
                            <tr style={{fontSize: '0.95rem'}}>
                                <td className="font-weight-bold">
                                    {user_fr.USERNAME} {user_fr.PERFIL}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <br/>
                <AdminPanel modules={user_fr.MODULO}/>
            </nav>

            <div id="content">
          
            </div>
        </Fragment>
    )

    return (
        <div className="wrapper">
            {dashboard}
            {/* <NotificacionProceso/> */}
            <Notification/>
        </div>
    );
    
}

export default connect(mapStateToProps,{})(Profile);