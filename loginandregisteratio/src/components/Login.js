
import React, {useState} from 'react'
import {Link,useParams,useNavigate} from 'react-router-dom';
import UserService  from '../Services/api';
import swal from 'sweetalert';

const Login = () => {

   

    const initvalue ={
        email : "",
        password :""
    }


    const [values,setValues] = useState(initvalue);

 const redirect = () => {
        window.location.href = 'http://localhost:3001/home';
        // maybe can add spinner while loading
        return null;
      }
    
const handlechange =(event) =>{
    setValues({
        ...values, [event.target.name] : event.target.value
    })
}
const handleFormSubmit =(event) =>{
     UserService.login(values).then((result) => {
         if(result.data.data !== null){
        swal("Login Successfull")
        window.location.replace('http://localhost:3001/home')
         }
         else{
             swal("Bad Credential")
         }
  console.log(result.data.data)
  });


 
}

let history = useNavigate();

const handleSignUp =(event) =>{
    history("/signup")
    }

    return (
     <div className="container">
<div className="app-wrapper">
<div>
    <h2 className="title">Login</h2>
    </div>
    <form className="label">

<div className="email">
    <label className="label">Email</label>
<input className="input" type = "email" name = "email" value={values.email} onChange={handlechange}/>
</div>
<div className="password">
    <label className="label">Password</label>
<input className="input" type ="password" name = "password" value={values.password} onChange={handlechange}/>
</div>


    </form>
    <button className="login" onClick={handleFormSubmit}>
    Login
</button>
<button className="signup" onClick={handleSignUp}>
    Sign Up
</button>
     </div>
        </div>
    )
}

export default Login
