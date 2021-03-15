import React, {useState, useMemo} from "react"

const LoginForm = ({onSubmit})=>{
    
    const [user, setUser] = useState({username: "", password: ""});
    const {username, password} = user;
    
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        onSubmit(user)
    }

    const handleOnChange=e=>{
        const {name, value} = e.target;
        setUser(user =>({...user, [name]: value}));
        
    }

    const headerForm = useMemo(()=>(
        <div className="card-header background-card-header text-white font-weight-bold">
            INICIAR SESION
        </div>
    ),[])

    const submitBoton = useMemo(()=>(
        <div className="text-center mt-4">
            <button className="btn btn-sm btn-block login-btn">LOGIN</button>
        </div>
    ),[])

    return(
        <div className="card">
            {headerForm}
            <div className="card-body">
                
                <form onSubmit={handleSubmit}>
                    <label className="grey-text">
                    USERNAME
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name='username'
                        onChange={handleOnChange}
                        value={username}
                        autoComplete='off'
                    />
                    <br />
                    <label  className="grey-text">
                    PASSWORD
                    </label>
                    <input 
                        type="password" 
                        className="form-control" 
                        name="password"
                        onChange={handleOnChange}
                        value={password}
                    />
                    {submitBoton}
                </form>
            </div>
        </div>
    )
}

export default React.memo(LoginForm)

// Si el callback de React.memo retorna siempre un false
// export default React.memo(LoginForm, (prevProps, nextProps)=>{
//     return false
//      return  prevProps.id === nextProps.id
// });

// esto se comporta identicamente a:

// export default LoginForm

