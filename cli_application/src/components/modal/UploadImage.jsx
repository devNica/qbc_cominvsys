import React, {useState } from 'react';
import { uploadImage } from '../../api/api';
import {connect} from 'react-redux';
import { fxUpdateProfileImage } from "../../redux/actions/notifications";
//import Notification from "../notifications/Notification";

const mapStateToProps = state =>({
    
})

const UploadImage = ({IDUSUARIO, fxUpdateProfileImage}) => {

    const [fileSelected, setFile] = useState('');
    
    const fileSelecttedHandler = e =>{
        let files = e.target.files[0];
        var reader = new FileReader();

        if(files.type === "image/png"){
            if(files.size > 24000 && files.size < 40000){
                reader.onload = (e)=>{
                    document.getElementById('preview').src = e.target.result;
                }
        
                reader.readAsDataURL(files);
                setFile(files);
            }else{
                alert(`El tamaño del archivo no es admitivo, por fafor selecciones un archivo en el siguiente rango: [24Kb - 40Kb]`);
            }
            
        }
        else {
            alert(`El archivo seleccionado no coincide con el formato PNG`)
        }

        
    }

    const fileUploadHandler = e =>{
        
        if(fileSelected){
            const fd = new FormData();
            fd.append('img', fileSelected, fileSelected.name);
            fd.append('IDUSUARIO', IDUSUARIO)
        
            uploadImage(fd).then(res=>{
                console.log(res)
                const notification = {
                    msg: "La imagen del perfil del usuario ha sido cambiada",
                    type: "success",
                    time: 1200
                }
                
                fxUpdateProfileImage(notification);

                setTimeout(()=>{
                    window.history.go(0);
                },1250)
                
                
            });
        }else{
            const notification = {
                msg: "No se ha seleccionado una imagen",
                type: "danger",
                time: 1400
            }
            
            fxUpdateProfileImage(notification);

        }
    }

    
    return (
        <div className="modal fade" id="uploadImageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-dark font-weight-bold" id="exampleModalLabel">CAMBIAR IMAGEN DE PERFIL</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    
                    <div className="row">
                        <div className="col 12 col-sm-12 col-md-8 offset-md-4 col-lg-6 offset-lg-3">
                            <div className="card">
                                <div className="card-header bg-dark text-white">
                                    Por favor seleccione una imagen PNG [24Kb - 40Kb]
                                </div>
                                <img 
                                    src={fileSelected}
                                    id='preview' 
                                    className="img-fluid img-profile rounded-circle mx-auto mt-3 btn btn-primary" 
                                    alt="<>">
                                </img>
                                <div className="card-body">
                                <input 
                                    type="file" 
                                    name="fileSelected" 
                                    id="fileSelected" 
                                    className=""
                                    onChange={fileSelecttedHandler}
                                />
                                </div>
                                <div className="card-footer">
                                <div className="row">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                                        <button 
                                            type="button" 
                                            className="btn btn-sm btn-primary btn-block"
                                            onClick={fileUploadHandler}
                                        >
                                            Subir Imagen
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    

                </div>
                {/* <div className="modal-footer">
                    <button 
                        type="button"
                        className="btn btn-secondary" 
                        data-dismiss="modal"
                        
                    >
                    Close
                    </button>
                    
                </div> */}
                </div>
            </div>
            {/* <Notification/> */}
        </div>
    );
    
}

export default connect(mapStateToProps,{ fxUpdateProfileImage })(UploadImage);