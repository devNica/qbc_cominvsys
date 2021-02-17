import React, { Component } from 'react';
//import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import {connect} from 'react-redux';
import { fxLogin } from '../../redux/actions/auth';


class Login extends Component {

    state={
        username: '',
        password: '',
        alert: '',
        error: false,
        msg: '',
        type: 'danger'
    }

    handleOnChange=e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleOnSubmit = e =>{
        e.preventDefault();

        const {username, password} = this.state;

        let msg, count, error;
        error = false;
        count = 0;
        msg = [];


        if(username===''){
            count=count+1;
            msg[count-1]='User field cannot be empty - ';
            error=true 
        }

        if(password===''){
            count=count+1;
            msg[count-1]='Password field cannot be empty - ';
            error=true 
        }
        
        if(!error){

            let user={
                username,
                password
            }

            this.setState({error:false});
            this.props.fxLogin(user);
            
            
                
            if(this.props.type==='danger'){
                this.setState({alert: this.props.msg});
            }else{
                this.props.history.push('/profile')
            }

        }else{
            msg[count-1] = msg[count-1].substr(0, (msg[count-1].length-3))
            this.setState({error: true, msg, alert: ''});
        }
   
    }

    componentDidUpdate(prevProps){
        const {type, msg} = this.props;
        if(type !== prevProps.type){

           this.setState({alert: msg, type})
           
        }
    }

    render() {
        
        if(this.props.isAuthenticated){
            this.props.history.push('/profile');
        }

        const {username, password} = this.state;

        const {alert, error, msg} = this.state;
        
        const ErrorMessage=(
          
            <div className="alert alert-danger" role="alert">
                { error ? msg: alert}
            </div>
        )

        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header background-card-header text-white font-weight-bold">
                                INICIAR SESION
                            </div>
                            <div className="card-body">

                                { alert.length > 0 || error ? ErrorMessage : null}

                                <form onSubmit={this.handleOnSubmit}>
                                    <label htmlFor="username" className="grey-text">
                                    USERNAME
                                    </label>
                                    <input 
                                        type="text" 
                                        id="username" 
                                        className="form-control" 
                                        name='username'
                                        onChange={this.handleOnChange}
                                        value={username}
                                        autoComplete='off'
                                    />
                                    <br />
                                    <label htmlFor="password" className="grey-text">
                                    PASSWORD
                                    </label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        className="form-control" 
                                        name="password"
                                        onChange={this.handleOnChange}
                                        value={password}
                                    />
                                    <div className="text-center mt-4">
                                    <button className="btn" style={{ background: '#3a3f80ef', color: '#ffffff'}}>LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    msg: state.notifications.note.msg,
    type: state.notifications.note.type,
})
export default connect(mapStateToProps, {fxLogin})(Login);