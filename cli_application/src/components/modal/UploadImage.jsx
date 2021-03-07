import React, {useState } from 'react';
import { uploadImage } from '../../api/api';
import {connect} from 'react-redux';
import { fn_create_notification } from "../../redux/actions/notifications";

const mapStateToProps = state =>({
    token_fr: state.auth.token
})

const UploadImage = ({IDUSUARIO, fn_create_notification, token_fr}) => {

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
            fd.append("token",token_fr);
        
            uploadImage(fd).then(response=>{
                
                const {success, message} = response;

                if(success){
                    const notification = {
                        msg: message,
                        type: "success",
                        time: 2500
                    }
                   
                    setTimeout(()=>{
                        window.history.go(0);
                    },3100)

                    fn_create_notification(notification);

                }else{
                    
                    const notification = {
                        msg: message,
                        type: "danger",
                        time: 2500
                    }

                    fn_create_notification(notification);
                }
            });
            
        }else{
            const notification = {
                msg: "No se ha seleccionado una imagen",
                type: "danger",
                time: 1800
            }
            
            fn_create_notification(notification);

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
                
                </div>
            </div>
            
        </div>
    );
    
}

export default connect(mapStateToProps,{ fn_create_notification })(UploadImage);