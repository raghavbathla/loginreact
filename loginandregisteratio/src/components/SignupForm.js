
import React, {useState} from 'react'
import validations from './validations';
import UserService  from '../Services/api'; 
import swal from 'sweetalert';
import {Link,useParams,useNavigate} from 'react-router-dom';
const SignupForm = () => {
    let history = useNavigate();
const handleFormSubmit =(event) =>{
event.preventDefault();
setErrors(validations(values))
console.log(errors.fullname === undefined)
if(!errors.fullname && !errors.password && !errors.email && !errors.cpassword){
    UserService.addUser(data)
    swal("Signup Successfull")
    history("/")
}


}

const initvalue ={
    fullname:"",
    email : "",
    password :"",
    cpassword :""
}
const initdata ={
    fullname:"",
    email : "",
    password :""
}
const [values,setValues] = useState(initvalue);
const [errors,setErrors] = useState({});
const [data,setData] = useState(initdata);
const handleChange = (event) =>{
    setValues({
        ...values, [event.target.name] : event.target.value
    })
    setData({
        ...data, [event.target.name] : event.target.value
    })
}

    return (
     <div className="container">
<div className="app-wrapper">
<div>
    <h2 className="title">Create Account</h2>
    </div>
    <form className="label">
<div className="name">
    <label className="label">Full Name</label>
<input className="input" type = "text" name = "fullname" value={values.fullname} onChange={handleChange}/>
{errors.fullname && <p className="error">{errors.fullname}</p>}
</div>
<div className="email">
    <label className="label">Email</label>
<input className="input" type = "email" name = "email" value={values.email} onChange={handleChange}/>
{errors.email && <p className="error">{errors.email}</p>}
</div>
<div className="password">
    <label className="label">Password</label>
<input className="input" type ="password" name = "password" value={values.password} onChange={handleChange}/>
{errors.password && <p className="error">{errors.password}</p>}
</div>
<div className="password">
    <label className="label">Confirm Password</label>
<input className="input" type ="password" name = "cpassword" value={values.cpassword} onChange={handleChange}/>
{errors.cpassword && <p className="error">{errors.cpassword}</p>}
</div>
    </form>
    <button className="submit" onClick={handleFormSubmit}>
    Sign Up
</button>
     </div>
        </div>
    )
}

export default SignupForm
