import React from 'react'

const validations = (values) => {
    let errors ={}
    if(!values.fullname){
        errors.fullname = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email ="Email is Invalid"

    }
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 5){
        errors.password = "Passwords must be more than 5"
    }
    if(!values.cpassword){
        errors.cpassword = "Confirm Password is required"
    }
    else if(values.cpassword !== values.password){
        errors.cpassword = "Passwords Should match"
    } 



    return errors;
}

export default validations
