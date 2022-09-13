import React, { useState } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState()
    // const nameRef = useRef('');
    // const nameRef = useRef('');
    // const nameRef = useRef('');
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    if (user) {
        navigate('/');
        console.log(user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const agree = event.target.terms.checked;



        await createUserWithEmailAndPassword(email, password);

        await updateProfile({ displayName: name});
        alert('Updated profile');
        navigate('/')







    }
    return (
        <div className=' register-form w-25'>
            <h3 className='text-center text-primary my-4'>Please Register</h3>
            <form onSubmit={handleRegister}>
                <input type="text" required name="name" placeholder='Your name' id="" />

                <input type="email" required name="email" placeholder='Your email' id="" />

                <input type="password" required name="password" placeholder='Your password' id="" />

                <input type="password" required name="confirmPassword" placeholder='Confirm-password' id="" />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept Genius Car and Conditions</label>

                <input disabled={!agree} type="submit" className='w-50 btn btn-primary mx-auto ' value="Register" />
            </form>
            <p>Already  have an account? <Link to='/login' className='text-danger '>Please Login</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;