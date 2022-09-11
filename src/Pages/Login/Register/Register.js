import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    // const nameRef = useRef('');
    // const nameRef = useRef('');
    // const nameRef = useRef('');

    const handleRegister = event =>{
        event.preventDefault();

        console.log(event.target.name.value);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event.target.confirmPassword.value);

    }
    return (
        <div className=' register-form'>
            <h3 className='text-center text-primary my-4'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" required name="name" placeholder='Your name' id="" />
                
                <input type="email" required name="email" placeholder='Your email' id="" />
                
                <input type="password" required name="password" placeholder='Your password' id="" />
                
                <input type="password" required name="confirmPassword" placeholder='Confirm-password' id="" />
                
                <input className='w-25 mx-auto ' type="submit" value="Register" />
            </form>
            <p>Already  have an account? <Link to='/login' className='text-danger '>Please Login</Link> </p>
        </div>
    );
};

export default Register;