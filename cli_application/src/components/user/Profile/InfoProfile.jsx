/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react'

import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import noImg from './noimage.png';
import UploadImage from '../../modal/UploadImage';
import { downloadImage } from '../../../api/api'

const InfoProfile = ({user_fc, token_fc})=>{

    const [statusImg, setStatusImg] = useState(false)
    const [profileImg, setImg] = useState('')

    const arrayBufferToBase64 = (buffer) =>{
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));   
        bytes.forEach((b) => binary += String.fromCharCode(b));    
        return window.btoa(binary);
    };

    const handleOnClick = evt =>{
        evt.preventDefault();
    }

    useEffect(()=>{
        downloadImage({IDUSUARIO: user_fc.IDUSUARIO, token: token_fc}).then(response=>{
            
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

    },[user_fc, token_fc])

    return(
    <Fragment>
         <figure className="snip1566">
            <img src={statusImg ? profileImg : noImg} alt="user_image" />
            <figcaption>
                <AddTwoToneIcon className="icon" style={{ fontSize: 95}} />
            </figcaption>
            <a type="button" data-toggle="modal" data-target="#uploadImageModal" href="/" onClick={handleOnClick}/>
        </figure>
        <UploadImage IDUSUARIO={user_fc.IDUSUARIO} />
        <table className="table table-hover">
            <tbody>
                <tr style={{fontSize: '0.95rem'}}>
                    <td className="font-weight-bold">
                        {user_fc.USERNAME} {user_fc.PERFIL}
                    </td>
                </tr>
            </tbody>

        </table>
    </Fragment>
    )
}

export default React.memo(InfoProfile);